import { Route } from '@angular/router';
import { ComponentsComponent } from '@app/features/components/components.component';
import {
  ComponentsGoogleMapsComponent
} from '@app/features/components/components-google-maps/components-google-maps.component';



export const componentsRoutes: Route[] = [
  {
    path: '',
    component: ComponentsComponent,
    children: [{
      path: 'google-maps',
      component: ComponentsGoogleMapsComponent
    }]
  },
];
