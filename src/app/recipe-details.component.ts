import { Component, ViewChild, ElementRef, Renderer2, Input } from '@angular/core';
import { IRecipe } from "./recipe";
import { UntypedFormBuilder, UntypedFormGroup, Validators, FormControl } from '@angular/forms';
import { RecipeDataService } from './recipe-data.service';


@Component({
    selector: 'recipe-details',
    templateUrl: 'recipe-details.component.html',
    //styleUrls: ['app.component.css'],
    //moduleId: module.id
})
export class RecipeDetailsComponent
{

    public selectedRecipe: IRecipe;

    public form : UntypedFormGroup;

    @ViewChild('lgModal',{static: false}) modal: any;
    // @ViewChild('description') desc: ElementRef;

    constructor(public formBuilder: UntypedFormBuilder,private recipeService: RecipeDataService) { }

    ngOnInit()
    {
        //initialize empty form
        this.form =  this.formBuilder.group({
                id: '',
                description:''
            });
        // console.log("Modal:" + this.modal);
    }

    save(model: IRecipe, isValid: boolean) {
        this.addRecipe(model);
        console.log(model.description);
        //alert(model.id)
    }

    addRecipe(recipe:IRecipe) {
        //this.recipeService.updateRecipe(recipe);
            //.subscribe(recipes => this.recipes = recipes);
            console.log("recipe=" + recipe.description);

    }

    onOpen(recipe: IRecipe)
    {
        this.selectedRecipe = recipe;

        alert(recipe.description)
        // this.form =  this.formBuilder.group({
        //         id: recipe.id,
        //         description: recipe.description
        //     });

        console.log("test");
        // this.modal.open();
    }

}

 //<input  type="text" [(ngModel)]='Recipe.description' class="form-control" ngControl='description'/>
