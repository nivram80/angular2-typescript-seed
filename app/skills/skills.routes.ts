import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillsComponent } from "./skills.component";

const skillsRoutes: Routes = [
    { path: 'skills',  component: SkillsComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(skillsRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class SkillsRoutingModule { }