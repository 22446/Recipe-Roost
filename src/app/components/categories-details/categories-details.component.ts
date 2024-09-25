import { Component, inject, OnInit } from '@angular/core';
import { CategoriesService } from '../../Core/services/categories.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MealsComponent } from "../meals/meals.component";
import { MealsHome } from '../../Core/interfaces/home';

@Component({
  selector: 'app-categories-details',
  standalone: true,
  imports: [MealsComponent,RouterLink],
  templateUrl: './categories-details.component.html',
  styleUrl: './categories-details.component.scss'
})
export class CategoriesDetailsComponent implements OnInit{
  private _categorisDteils=inject(CategoriesService)
  private _ActivatedRoute=inject(ActivatedRoute)
   _MealsHome:MealsHome[]=[]
  nameCateg!:string|null
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(p)=>{
        this.nameCateg=p.get("name")
      }
    })
    this._categorisDteils.getAllCategoriesbyName(this.nameCateg).subscribe({
      next:(res)=>{
        this._MealsHome=res.meals
        
      }
    })
  }


}
