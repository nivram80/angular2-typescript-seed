import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from "./app.routes";
import { AppComponent }  from './app.component';
import { MainHeaderComponent } from "./main-header/main-header.component";
import { HomeModule } from "./home/home.module";
import { SkillsModule } from "./skills/skills.module";

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HomeModule,
        SkillsModule
    ],
    declarations: [
        AppComponent,
        MainHeaderComponent
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule {

}
