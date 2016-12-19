import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { SkillsComponent } from "./skills.component";
import { SkillsRoutingModule } from "./skills.routes";

@NgModule({
    imports: [
        CommonModule,
        SkillsRoutingModule
    ],
    declarations: [
        SkillsComponent
    ],
    providers: []
})

export class SkillsModule {}