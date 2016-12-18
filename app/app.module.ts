import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from "./app.routes";
import { AppComponent }  from './app.component';
import { MainHeaderComponent } from "./main-header/main-header.component";
import { HomeModule } from "./home/home.module";

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HomeModule
    ],
    declarations: [
        AppComponent,
        MainHeaderComponent
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule {

}
