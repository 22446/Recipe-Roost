import { Component, inject, OnInit } from '@angular/core';
import { HomeService } from '../../Core/services/home.service';
import { Subscription } from 'rxjs';
import { MealsHome } from '../../Core/interfaces/home';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MealsComponent } from "../meals/meals.component";
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-details-meal',
  standalone: true,
  imports: [MealsComponent,RouterLink ,CarouselModule],
  templateUrl: './details-meal.component.html',
  styleUrl: './details-meal.component.scss'
})
export class DetailsMealComponent implements OnInit{
  
  customOptions: OwlOptions = {
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

  private _HomeServices=inject(HomeService)
  private _ActivatedRoute=inject(ActivatedRoute)
  SubEnd!:Subscription
  idMeal!:string|null
  MealData:MealsHome[]=[]
  MealDataAll:MealsHome[]=[]

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(p)=>{
       this.idMeal=p.get('id')
      }
    })
    this._HomeServices.GetAllMealsDetails(this.idMeal).subscribe({
      next:(res)=>{
        this.MealData=res.meals
        
      }
    })
    this._HomeServices.GetAllMeals().subscribe({
      next:(res)=>{
        this.MealDataAll=res.meals
        
      }
    })
    this.details(this.idMeal)
  }

  details(id:string|null){
    this._HomeServices.GetAllMealsDetails(id).subscribe({
      next:(res)=>{
        this.MealData=res.meals
      }
    })

    }
    topOfPage(){
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }

