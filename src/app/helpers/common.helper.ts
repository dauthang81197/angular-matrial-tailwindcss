export const capitalizeFirstLetter = (string: string) => {
  if (string?.length > 1) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return string;
}

const order = "23456789TJQKA"

function getHandDetails(this: any, hand: string) {
  const cards = hand.split(" ")
  // @ts-ignore
  const faces = cards.map((a: any[]) => String.fromCharCode([77 - order.indexOf(a[0])])).sort()
  // @ts-ignore
  const suits = cards.map((a: any[]) => a[1]).sort()
  const counts = faces.reduce(count, {})
  const duplicates = Object.values(counts).reduce(count, {})
  const flush = suits[0] === suits[4]
  const first = faces[0].charCodeAt(0)
  const straight = faces.every((f, index) => f.charCodeAt(0) - first === index)
  let rank =
    (flush && straight && 1) ||
    (duplicates[4] && 2) ||
    (duplicates[3] && duplicates[2] && 3) ||
    (flush && 4) ||
    (straight && 5) ||
    (duplicates[3] && 6) ||
    (duplicates[2] > 1 && 7) ||
    (duplicates[2] && 8) ||
    9

  function byCountFirst(a: number, b: number) {
    //Counts are in reverse order - bigger is better
    const countDiff = counts[b] - counts[a]
    if (countDiff) return countDiff // If counts don't match return
    return b > a ? -1 : b === a ? 0 : 1
  }

  return {rank, value: faces.sort(this.byCountFirst).join("")}


}


function count(c: { [x: string]: any; }, a: string | number) {
  c[a] = (c[a] || 0) + 1
  return c
}

function compareHands(h1: any, h2: any) {
  let d1 = getHandDetails(h1)
  let d2 = getHandDetails(h2)
  if (d1.rank === d2.rank) {
    if (d1.value < d2.value) {
      return "WIN"
    } else if (d1.value > d2.value) {
      return "LOSE"
    } else {
      return "DRAW"
    }
  }
  return d1.rank < d2.rank ? "WIN" : "LOSE"
}

