import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { RecipesListComponent } from "./recipes-list.component";
import { RecipeDetailsComponent } from "./recipe-details.component";
import { ConfigService } from "./config.service";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    //Ng2Bs3ModalModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    NgbModule
  ],
  declarations: [
    AppComponent,
    RecipesListComponent,
    RecipeDetailsComponent],
  bootstrap: [AppComponent],
  providers: [ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: (config: ConfigService) => () => config.load(),
      deps: [ConfigService],
      multi: true
    }


  ],
})
export class AppModule { }

