import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'section[slide3_12]',
    templateUrl: './slide.component.html',
    styleUrls: ['./slide.scss'],
})
export class Slide3_12Component implements OnInit {

    private code = `
// 开发环境:
window.postMessage();
// 用于视图层之间接收消息
window.addEventListener('massage', messageHandler);

// IOS环境, 通过WKWebview:
window.webkit.messageHandlers.invokeHandler.postMessage();
// 用于视图层之间接收消息
window.webkit.messageHandlers.publishHandler.postMessage();

// 安卓环境
WeixinJSCore.invokeHandler();
// 用于视图层之间接收消息
WeixinJSCore.publishHandler();
    `;

    trustedCode: SafeHtml;

    constructor(sanitize: DomSanitizer) {
        this.trustedCode = sanitize.bypassSecurityTrustHtml(this.code.trim());
    }

    ngOnInit(): void { }
}
