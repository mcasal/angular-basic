import { Component, OnInit } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //title = 'Home Component Title';

  constructor(private metaService: Meta, private titleService: Title) {
    //this.titleService.setTitle('Marta Casal Portfolio');
    //this.addTags();
  }

  ngOnInit(): void {
    //this.metaService.addTag({ name: 'description', content: "Article Description" });
  }

  /*addTags() {
    this.metaService.addTags([
      { name: 'description', content: `I'm Marta Casal and this is my personal portfolio.` },
      { name: 'robots', content: 'index,follow' },
      { name: 'keywords', content: 'Frontend Developer, Angular, UX/UI, Web Design, HTML, CSS, JS' },
      { name: 'author', content: 'Marta Casal' },
      { property: 'og:title', content: 'Content Title for social media' }
    ]);
  }*/

}
