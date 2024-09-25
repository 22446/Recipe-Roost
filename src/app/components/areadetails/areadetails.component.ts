import { Component, inject } from '@angular/core';
import { AreaService } from '../../Core/services/area.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MealsHome } from '../../Core/interfaces/home';

@Component({
  selector: 'app-areadetails',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './areadetails.component.html',
  styleUrl: './areadetails.component.scss'
})
export class AreadetailsComponent {
  private _AreaService=inject(AreaService)
  private _ActivatedRoute=inject(ActivatedRoute)
   _MealsHome:MealsHome[]=[]
  nameCateg!:string|null
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(p)=>{
        this.nameCateg=p.get("name")
      }
    })
    this._AreaService.getAreaByName(this.nameCateg).subscribe({
      next:(res)=>{
        this._MealsHome=res.meals
        
      }
    })
  }
}
