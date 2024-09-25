import { Component, inject, OnInit } from '@angular/core';
import { CategoriesService } from '../../Core/services/categories.service';
import { ICategories } from '../../Core/interfaces/icategories';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit{
  _CategoriesServices=inject(CategoriesService)
  _CategDta:ICategories[]=[]
  ngOnInit(): void {
    this._CategoriesServices.getAllCategories().subscribe({
      next:(res)=>{
        this._CategDta=res.categories
       
      }
    })
  }

}
