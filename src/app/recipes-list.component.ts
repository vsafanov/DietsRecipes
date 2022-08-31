import { Component, ViewChild } from "@angular/core";

import { RecipeDataService } from './recipe-data.service';
import { IRecipe } from './recipe';
import { RecipeDetailsComponent } from "./recipe-details.component";
// import * as $ from 'jquery';
// import * as $$ from 'bootstrap';
import { NgbToast } from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'recipes-list',
    templateUrl: 'recipes-list.component.html',
    styleUrls: ['recipes-list.component.css'],
    //moduleId: module.id,
    providers: [RecipeDataService]
})

export class RecipesListComponent {
    public recipes: IRecipe[];
    public filterText: string = "";
    public filterCategory: string = "All";
    public categories: string[];
    public recipesCount: number = 0;
    public selectedRecipe: IRecipe;

    @ViewChild(RecipeDetailsComponent, { static: false }) recipeDetails: RecipeDetailsComponent;

    constructor(private recipeService: RecipeDataService) { }

    ngOnInit() {
        this.getRecipes();
        this.categories = this.recipeService.getCategories();
    }

    Filter() {
        //alert($("#temp") );
        this.getRecipes();
        this.recipesCount = this.recipes.length;
    }

    ResetFilter() {
        this.filterText = "";
        this.Filter();
    }

    ResetCategoryFilter() {
        this.filterCategory = "All";
        // this.filterText = "";
        this.Filter();
    }

    getRecipes() {

        this.recipes = this.recipeService.getRecipes();

        this.recipes = (this.filterText == "" || this.filterText == null
            ? this.recipes
            : this.recipes.filter(item => item.description.toLowerCase().indexOf(this.filterText.toLowerCase()) >= 0))
            .filter(item => (this.filterCategory != "All") ? item.category == this.filterCategory : item);

        this.recipesCount = this.recipes.length;
        //console.log("Count=" + this.recipes);
        // });
    }

    onClick(recipe: IRecipe) {
        // here we bind the chosen id, so that we can use it in your delete-method
        this.selectedRecipe = recipe;
        this.recipeDetails.form = this.recipeDetails.formBuilder.group({
            id: recipe.id,
            description: recipe.description
        });

        this.recipeDetails.onOpen(recipe);
    }

}
