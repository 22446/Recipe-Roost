import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: 'Home', pathMatch: 'full' },
    { path: 'Home',component:HomeComponent,title: 'home' },
    { path: 'detailsMeal/:id', loadComponent: () => import('./components/details-meal/details-meal.component').then(m => m.DetailsMealComponent), title: 'details' },
    { path: 'CategoriesDetails/:name', loadComponent: () => import('./components/categories-details/categories-details.component').then(m => m.CategoriesDetailsComponent), title: 'details' },
    { path: 'detailsIngerediant/:name', loadComponent: () => import('./components/ingrediants-details/ingrediants-details.component').then(m => m.IngrediantsDetailsComponent), title: 'details' },
    { path: 'detailsCountry/:name', loadComponent: () => import('./components/areadetails/areadetails.component').then(m => m.AreadetailsComponent), title: 'details' },
    { path: 'Categories', loadComponent: () => import('./components/categories/categories.component').then(m => m.CategoriesComponent), title: 'categories' },
    { path: 'Ingrediants', loadComponent: () => import('./components/ingrediants/ingrediants.component').then(m => m.IngrediantsComponent), title: 'ingrediants' },
    { path: 'area', loadComponent: () => import('./components/area/area.component').then(m => m.AreaComponent), title: 'area' },
];
