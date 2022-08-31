import {Injectable }from '@angular/core';
import {HttpClient, HttpResponse }from '@angular/common/http';
import {Observable }from 'rxjs';
import {IRecipe }from './recipe';
import {ICategory }from './category';
import {ConfigService} from "./config.service"


@Injectable()
export class RecipeDataService {

    //recipes:IRecipe[];
    recipes : Observable<IRecipe[]> ;

    constructor(private http:HttpClient, private config:ConfigService) {}
    // Uses http.get() to load a single JSON file

    getCategories() {
        return this.config.getCategories();
    }


    getRecipes() :IRecipe[] {
      return  this.config.getRecipes();
    }


    // addRecipe(recipe:IRecipe):Observable < IRecipe >  {
    //     return this.http.post<IRecipe>(this.config.getRecipesUrl(), recipe);
    // }

    //  updateRecipe(recipe:IRecipe):Observable < IRecipe >  {
    //     return this.http.put<IRecipe>(this.config.getRecipesUrl(), recipe);
    //     //.map(this.extractData);
    // }


    private extractData(res:Response) {
        //let body = res.json().recipes;
        //console.log(body);
        //localStorage.setItem("db", JSON.stringify(body))
        //return body ||  {};
    }
}
