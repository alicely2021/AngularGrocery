
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { GroceryComponent } from './app.grocery';
import { FormsModule } from '@angular/forms';
// import { ReactiveFormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    // AppComponent,
    GroceryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // CommonModule,
    // ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [GroceryComponent]
})
export class AppModule{

}


