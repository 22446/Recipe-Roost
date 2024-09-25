import { Component, inject } from '@angular/core';
import { IngrediantsService } from '../../Core/services/ingrediants.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MealsHome } from '../../Core/interfaces/home';

@Component({
  selector: 'app-ingrediants-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './ingrediants-details.component.html',
  styleUrl: './ingrediants-details.component.scss'
})
export class IngrediantsDetailsComponent {
  private _categorisDteils=inject(IngrediantsService)
  private _ActivatedRoute=inject(ActivatedRoute)
   _MealsHome:MealsHome[]=[]
  nameCateg!:string|null
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(p)=>{
        this.nameCateg=p.get("name")
      }
    })
    this._categorisDteils.getIngrediantsByName(this.nameCateg).subscribe({
      next:(res)=>{
        this._MealsHome=res.meal
      }
    })
  }
}
