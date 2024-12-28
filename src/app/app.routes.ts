import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { InstallationComponent } from './pages/installation/installation.component';
import { FirststepsComponent } from './pages/firststeps/firststeps.component';

export const routes: Routes = [
    {path: 'about', component: AboutComponent},
    {path: 'home', component: HomeComponent},
    {path: 'installation', component: InstallationComponent},
    {path: 'firststeps', component: FirststepsComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'}
];
