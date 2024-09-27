import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { HomeService } from '../../Core/services/home.service';
import { MealsHome } from '../../Core/interfaces/home';
import { Subscribable, Subscription } from 'rxjs';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { RouterLink } from '@angular/router';
import { MealsComponent } from "../meals/meals.component";
import { NgxSpinnerService } from 'ngx-spinner';
import { CategoriesService } from '../../Core/services/categories.service';
import { ICategories } from '../../Core/interfaces/icategories';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../../Core/pipes/search.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule, RouterLink, MealsComponent,FormsModule,SearchPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  SubEnd!:Subscription
  isloading:boolean=false
  name:string=""
  MealData:MealsHome[]=[]
  customOptionsCategory: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    rtl:true,
    navSpeed: 700,
    autoplaySpeed:800,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      500: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  _CategoriesServices=inject(CategoriesService)
  _CategDta:ICategories[]=[]

 

  private _HomeServices=inject(HomeService)

  ngOnInit(): void {
    
    
    this.SubEnd = this._HomeServices.GetAllMeals().subscribe({
      next:(res)=>{
        
         this.isloading=true
         this.MealData=res.meals
         
       }
     })
     
    this._CategoriesServices.getAllCategories().subscribe({
      next:(res)=>{
        this._CategDta=res.categories
       
      }
    })
   }
   
   ngOnDestroy(): void {
     return this.SubEnd.unsubscribe()
   }
}

