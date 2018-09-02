import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'section[slide4_12]',
    templateUrl: './slide.component.html',
    styleUrls: ['./slide.scss'],
})
export class Slide4_12Component implements OnInit {

    private code = `
// 第一种:
// loadUrl(String url);
webView.loadUrl("javascript:alert(injectedObject.toString())");
// 第二种:
// evaluateJavascript(String script,
//        ValueCallback&lt;String&gt; resultCallback);
webView.evaluateJavascript("alert(injectedObject.toString())");
    `;

    trustedCode: SafeHtml;

    constructor(private sanitize: DomSanitizer) {
        this.trustedCode = sanitize.bypassSecurityTrustHtml(this.code);
    }

    ngOnInit(): void { }
}
