import { Component, OnInit } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private metaService: Meta, private titleService: Title) {
    //this.titleService.setTitle('About me // Marta Casal Portfolio');
    //this.addTags();
  }

  ngOnInit(): void {
    //this.metaService.addTag({ name: 'description', content: "Article Description" });
  }

  /*addTags() {
    this.metaService.addTags([
      { name: 'description', content: `Hi there! I'm Marta Casal, nice to meet you!` },
      { name: 'robots', content: 'index,follow' },
      { name: 'keywords', content: 'Frontend Developer, Angular, UX/UI, Web Design, HTML, CSS, JS' },
      { name: 'author', content: 'Marta Casal' },
      { property: 'og:title', content: 'Content Title for social media' }
    ]);
  }*/

}
