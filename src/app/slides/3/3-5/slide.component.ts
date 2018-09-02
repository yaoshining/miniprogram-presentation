import { Component, OnInit } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'section[slide3_5]',
    templateUrl: './slide.component.html',
    styleUrls: ['./slide.scss'],
})
export class Slide3_5Component implements OnInit {

    private codeHTML = `
&lt;view wx:for=&quot;{{ products }}&quot;
        data-productId=&quot;{{ product.id }}&quot;
        bindtap=&quot;selectProduct&quot;&gt;
    &lt;view&gt; {{ item.name }} &lt;&#x2F;view&gt;
    &lt;view&gt; {{ item.slogan }} &lt;&#x2F;view&gt;
&lt;&#x2F;view&gt;
`;

    private codeJS = `Page({
    data: {
        products: [
            { name: '品牌热推', slogan: '让你的广告上微博热点' },
            { name: '搜索彩蛋', slogan: '让搜索广告迈进富媒体时代' }
        ]
    },
    selectProduct: function(e) {
        e.currentTarget.dataset.productId;
        // do something when selecting the product
    }
})`;

    trustedCodeHTML: SafeHtml;
    trustedCodeJS: SafeHtml;

    constructor(sanitize: DomSanitizer) {
        this.trustedCodeHTML = sanitize.bypassSecurityTrustHtml(this.codeHTML.trim());
        this.trustedCodeJS = sanitize.bypassSecurityTrustHtml(this.codeJS);
    }

    ngOnInit(): void { }
}
