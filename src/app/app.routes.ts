import { CategoriesDetailsComponent } from './components/categories-details/categories-details.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { DetailsMealComponent } from './components/details-meal/details-meal.component';
import { HomeComponent } from './components/home/home.component';
import { Routes } from '@angular/router';
import { IngrediantsComponent } from './components/ingrediants/ingrediants.component';
import { IngrediantsDetailsComponent } from './components/ingrediants-details/ingrediants-details.component';
import { AreaComponent } from './components/area/area.component';
import { AreadetailsComponent } from './components/areadetails/areadetails.component';

export const routes: Routes = [
    {path:'',redirectTo:"Home",pathMatch:'full'},
    {path:'Home',component:HomeComponent,title:'home'},
    {path:'detailsMeal/:id',component:DetailsMealComponent,title:'details'},
    {path:'CategoriesDetails/:name',component:CategoriesDetailsComponent,title:'details'},
    {path:'detailsIngerediant/:name',component:IngrediantsDetailsComponent,title:'details'},
    {path:'detailsCountry/:name',component:AreadetailsComponent,title:'details'},
    {path:'Categories',component:CategoriesComponent,title:'categories'},
    {path:'Ingrediants',component:IngrediantsComponent,title:'ingrediants'},
    {path:'area',component:AreaComponent,title:'area'}
];
