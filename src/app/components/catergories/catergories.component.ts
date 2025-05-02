import { Component, inject } from '@angular/core';
import { MealTag } from '../../interfaces/meal-tag';
import { MealsService } from '../../services/meals.service';
import { FormsModule } from '@angular/forms';
import { Meal } from '../../interfaces/meal';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-catergories',
  imports: [FormsModule,RouterLink],
  templateUrl: './catergories.component.html',
  styleUrl: './catergories.component.scss'
})
export class CatergoriesComponent {
    mealTagNames !: MealTag[] ;
    mealss !: Meal[];
    allMeals !: Meal[];
    selectedTagName : string ='All' ;
    selectedTag : boolean = true;
    
    _MealsService = inject(MealsService);
    
    ngOnInit(): void {
      this._MealsService.getMealTags().subscribe({
        next:(res)=>{
          this.mealTagNames=res.meals;
          this.showAllMeals();
          console.log("success");
        },
        error:(err)=>{
          console.log(err);
        }
      })
      
    }

    showMealItems(mealName:any){
      this._MealsService.getMealsItems(mealName).subscribe({
        next:(res)=>{
          this.mealss=res.meals;
          this.selectedTagName=mealName;
          console.log("Selected category:", mealName);
        },
        error:(err)=>{
          console.log(err);
        }
      })
    }

    changeSelesctedTag(e : any){
      let selectedValue = e.target.value;
      if (selectedValue === 'All'){
        this.showAllMeals();
      }else{
        this.showMealItems(selectedValue);
      }
      
    }

    showAllMeals(){
      this._MealsService.getAllMeals().subscribe({
        next:(res)=>{
          this.mealss=res.meals;
          this.selectedTagName='All';
        },
        error:(err)=>{
          console.log(err);
        }
      })
    }


    
}
