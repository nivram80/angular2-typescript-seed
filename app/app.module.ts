import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { MainHeaderComponent } from "./main-header/main-header.component";

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [
        AppComponent,
        MainHeaderComponent
    ],
    bootstrap:    [ AppComponent ]
})

export class AppModule {

}
