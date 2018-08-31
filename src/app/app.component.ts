import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    Reveal.initialize({
      controls: true,
      progress: true,
      history: true,
      center: true,
      transition: 'convex',  // none/fade/slide/convex/concave/zoom
      dependencies: [
        { src: 'plugin/markdown/marked.js' },
        { src: 'plugin/markdown/markdown.js' },
        { src: 'plugin/notes/notes.js', async: true },
        { src: 'plugin/zoom-js/zoom.js', async: true },
        { src: 'plugin/highlight/highlight.js', async: true, callback: function() { 
          window['hljs'].initHighlightingOnLoad();
        } }
      ]
    });
  }

  title = 'app';
}
