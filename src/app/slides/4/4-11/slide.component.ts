import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'section[slide4_11]',
    templateUrl: './slide.component.html',
    styleUrls: ['./slide.scss'],
})
export class Slide4_11Component implements OnInit {

    private codeJava = `
class JsObject {
    // 这里只能是基本类型
    @JavascriptInterface
    public String toString() { return "injectedObject"; }
}
webview.getSettings().setJavaScriptEnabled(true);
webView.addJavascriptInterface(new JsObject(), "injectedObject");
webView.loadData("", "text/html", null);
webView.loadUrl("javascript:alert(injectedObject.toString())");
    `;

    private codeJavaScript = `
console.log(injectedObject.toString());
// 控制台输出'injectedObject'
    `;

    trustedCodeJava: SafeHtml;
    trustedCodeJavaScript: SafeHtml;

    constructor(sanitize: DomSanitizer) {
        this.trustedCodeJava = sanitize.bypassSecurityTrustHtml(this.codeJava);
        this.trustedCodeJavaScript = sanitize.bypassSecurityTrustHtml(this.codeJavaScript);
    }

    ngOnInit(): void { }
}
