import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Slide1Component } from './1/slide.component';
import { Slide2Component } from './2';
import { Slide3_1Component } from './3/3-1';
import { Slide3_2Component } from './3/3-2';
import { Slide3_3Component } from './3/3-3';
import { Slide4Component } from './4';
import { Slide5_1Component } from './5/5-1';

@NgModule({
    declarations: [
        Slide1Component,
        Slide2Component,
        Slide3_1Component,
        Slide3_2Component,
        Slide3_3Component,
        Slide4Component,
        Slide5_1Component
    ],
    imports: [ CommonModule ],
    exports: [
        Slide1Component,
        Slide2Component,
        Slide3_1Component,
        Slide3_2Component,
        Slide3_3Component,
        Slide4Component,
        Slide5_1Component
    ],
    providers: [],
})
export class SlidesModule {}