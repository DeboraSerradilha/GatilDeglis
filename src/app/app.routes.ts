import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './pages/home/home.component';
import { ContatosComponent } from './pages/contatos/contatos.component';

export const routes: Routes = [
    {path:'', component: HomeComponent },    //Página Inicial (Home)
    {path:'contatos', component: ContatosComponent }   //Página de Contatos
];
