import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'section[slide3_3]',
    templateUrl: './slide.component.html',
    styleUrls: ['./slide.scss'],
})
export class Slide3_3Component implements OnInit {

    private code = `
&lt;html&gt;
&lt;head&gt;
    &lt;script&gt;
    &#x2F;&#x2F; initial script
    &lt;&#x2F;script&gt;
&lt;&#x2F;head&gt;
&lt;body&gt;
    &#x2F;&#x2F; content
&lt;&#x2F;body&gt;
&lt;&#x2F;html&gt;
    `;

    trustedCode: SafeHtml;

    constructor(sanitize: DomSanitizer) {
        this.trustedCode = sanitize.bypassSecurityTrustHtml(this.code);
    }

    ngOnInit(): void { }
}
