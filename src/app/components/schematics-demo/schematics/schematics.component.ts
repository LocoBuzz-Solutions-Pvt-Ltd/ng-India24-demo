import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";

@Component({
    selector: 'app-schematics',
    standalone: true,
    templateUrl: './schematics.component.html',
    styleUrl: './schematics.component.scss',
    imports: [HeaderComponent]
})
export class SchematicsComponent {

}
