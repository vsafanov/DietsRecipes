import { Component } from '@angular/core';
import { RecipesListComponent } from "./recipes-list.component";
import { RecipeDetailsComponent } from "./recipe-details.component";
import { HttpClientModule } from '@angular/common/http';
// import * as $ from 'jquery';


@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: [ 'app.component.css']
    //moduleId: module.id
})
export class AppComponent { name = 'Best Diet Recipes'; }
