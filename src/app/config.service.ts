import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as categories from './data/categories.json';
import * as recipes from './data/recipes.json';
import { IRecipe } from './recipe.js';


@Injectable()
export class ConfigService {
    private Categories: string[];
    private Recipes: IRecipe[];
    private categories = categories;
    private recipes = recipes;

    constructor(private _http: HttpClient) { }

    public load() {
        this.Categories = (this.categories as any).default.categories;
        this.Recipes = (this.recipes as any).default.recipes;
    }

    public getCategories() {
        return this.Categories;
    }

    public getRecipes() {
        return this.Recipes;
    }
}
