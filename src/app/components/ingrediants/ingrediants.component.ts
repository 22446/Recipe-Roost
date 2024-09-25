import { Component, inject, OnInit } from '@angular/core';
import { IngrediantsService } from '../../Core/services/ingrediants.service';
import { Iingrediants } from '../../Core/interfaces/iingrediants';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ingrediants',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './ingrediants.component.html',
  styleUrl: './ingrediants.component.scss'
})
export class IngrediantsComponent  implements OnInit{
  _ingrediantsServices=inject(IngrediantsService)
  ingrediantsData:Iingrediants[]=[]
  ngOnInit(): void {
    this._ingrediantsServices.getAllIngrediants().subscribe({
      next:(res)=>{
        this.ingrediantsData=res.meals
      }
    })
  }

}
