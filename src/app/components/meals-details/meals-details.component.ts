import { Component, inject, OnInit } from '@angular/core';
import { MealsService } from '../../services/meals.service';
import { Meal } from '../../interfaces/meal';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-meals-details',
  imports: [],
  templateUrl: './meals-details.component.html',
  styleUrl: './meals-details.component.scss'
})
export class MealsDetailsComponent implements OnInit {

  
  mealss !: Meal;
  mIngredients !: any[];
  mMeasures !:any[];

  _MealsService = inject(MealsService);
  _ActivatedRoute= inject(ActivatedRoute);

  ngOnInit(): void {
    let mName = this._ActivatedRoute.snapshot.params?.['mName'];
    this._MealsService.getAllMeals(mName).subscribe({
      next:(res)=>{
        this.mealss=res.meals[0];
        this.mIngredients = Object.values(res.meals[0]).slice(10,29);
        this.mMeasures = Object.values(res.meals[0]).slice(30,49);
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }


}
