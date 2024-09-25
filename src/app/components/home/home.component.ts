import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { HomeService } from '../../Core/services/home.service';
import { MealsHome } from '../../Core/interfaces/home';
import { Subscribable, Subscription } from 'rxjs';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { RouterLink } from '@angular/router';
import { MealsComponent } from "../meals/meals.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule, RouterLink, MealsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
 
  SubEnd!:Subscription
  isloading:boolean=false
  MealData:MealsHome[]=[]
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    autoplay:true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    margin:0,
    items:1,
    center:true,
    nav:true

  }

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

