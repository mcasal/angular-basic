import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home', component: HomeComponent,
    data: {
      title: 'Marta Casal Portfolio',
      descrption: `Hi! I'm looking for a job!`,
      keywords: 'Frontend Developer, Angular, UX/UI, Web Design, HTML, CSS, JS',
      author: 'Marta Casal',
      ogTitle: `Hi there! I'm Marta Casal and this is my personal portfolio!`,
      ogDescription: `I'm a Frontend Developer wannabe who is currently looking for a job. See my stuff made with JS, CSS, HTML, Angular and some Web Design.`,
    }
  },
  {
    path: 'about', component: AboutComponent,
    data: {
      title: 'About me // Marta Casal Portfolio',
      descrption: `Hi there! I'm Marta Casal, nice to meet you!`,
      keywords: 'Frontend Developer, Angular, UX/UI, Web Design, HTML, CSS, JS',
      author: 'Marta Casal',
      ogTitle: `Hi there! I'm Marta Casal and this is my personal portfolio!`,
      ogDescription: `I'm a Frontend Developer wannabe who is currently looking for a job. See my stuff made with JS, CSS, HTML, Angular and some Web Design.`,
    }
  },
  {
    path: 'contact', component: ContactComponent,
    data: {
      title: 'Contact me // Marta Casal Portfolio',
      descrption: 'Send me a message and we will be in touch!',
      keywords: 'Frontend Developer, Angular, UX/UI, Web Design, HTML, CSS, JS',
      author: 'Marta Casal',
      ogTitle: `Hi there! I'm Marta Casal and this is my personal portfolio!`,
      ogDescription: `I'm a Frontend Developer wannabe who is currently looking for a job. See my stuff made with JS, CSS, HTML, Angular and some Web Design.`,
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
