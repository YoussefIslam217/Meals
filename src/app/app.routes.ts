import { Routes } from '@angular/router';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { CatergoriesComponent } from './components/catergories/catergories.component';
import { MealsDetailsComponent } from './components/meals-details/meals-details.component'; 

export const routes: Routes = [
    {path:'',redirectTo:"/categories",pathMatch:'full'},
    {path:"categories",component:CatergoriesComponent,title:"Meals"},
    {path:"meals-details/:mName",component:MealsDetailsComponent,title:"Meal-Details"},
    {path:"**",component:NotfoundComponent,title:"404 error"}
];
