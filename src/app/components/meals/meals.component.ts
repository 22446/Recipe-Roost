import { Component, inject } from '@angular/core';
import { MealsHome } from '../../Core/interfaces/home';
import { HomeService } from '../../Core/services/home.service';
import { Subscription } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-meals',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './meals.component.html',
  styleUrl: './meals.component.scss'
})
export class MealsComponent {
  MealData:MealsHome[]=[]
  isloading:boolean=false

  SubEnd!:Subscription

  private _HomeServices=inject(HomeService)

  ngOnInit(): void {
    this.SubEnd = this._HomeServices.GetAllMeals().subscribe({
      next:(res)=>{
         this.isloading=true
         this.MealData=res.meals
        
       }
     })
   }
   ngOnDestroy(): void {
     return this.SubEnd.unsubscribe()
   }
}
