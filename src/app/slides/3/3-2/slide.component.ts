import { Component, OnInit } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'section[slide3_2]',
    templateUrl: './slide.component.html',
    styleUrls: ['./slide.scss'],
})
export class Slide3_2Component implements OnInit {
    constructor() { }

    ngOnInit(): void { }

    switchTo(path) {
        alert(2);
        if (!path) {
            return;
        }
    }
}
