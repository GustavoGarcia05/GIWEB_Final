import { RouterModule, Routes } from '@angular/router';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { FormacionComponent } from './components/formacion/formacion.component';
import { HomeComponent } from './components/home/home.component';


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'experiencia', component: ExperienciaComponent },
    { path: 'formacion', component: FormacionComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
