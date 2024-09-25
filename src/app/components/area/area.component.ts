import { Component, inject } from '@angular/core';
import { AreaService } from '../../Core/services/area.service';
import { RouterLink } from '@angular/router';
import { IArea } from '../../Core/interfaces/iarea';

@Component({
  selector: 'app-area',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './area.component.html',
  styleUrl: './area.component.scss'
})
export class AreaComponent {
  _AreaService=inject(AreaService)
  ingrediantsData:IArea[]=[]
  ngOnInit(): void {
    this._AreaService.getAllArea().subscribe({
      next:(res)=>{
       this.ingrediantsData= res.meals
      }
    })
  }
}
