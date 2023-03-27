import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class SessionStorageService {
    public saveData(key: string, value: string): void {
        sessionStorage.setItem(key, value);
    }
    public getData(key: string): string | null {
        return sessionStorage.getItem(key);
    }
    public removeData(key: string): void {
        sessionStorage.removeItem(key);
    }
    public clearData(): void {
        sessionStorage.clear();
    }
}
