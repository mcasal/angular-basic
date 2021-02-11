import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  /* contactForm = new FormGroup({
    nombre: new FormControl(''),
    email: new FormControl(''),
    asunto: new FormControl(''),
    mensaje: new FormControl('')
  }); */

  // FormBuilder és syntax sugar de FormControl i FormGroup, fa lo mateix i no piques tan codi 
  contactForm = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]], // aquí es poden posar valors per defecte. +1 validador []
    email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9·-]+.[a-z]{2,4}$')]],
    asunto: ['', [Validators.required, Validators.minLength(3)]],
    mensaje: ['', [Validators.required, Validators.minLength(25)]]
  })

  constructor(private fb: FormBuilder, private metaService: Meta, private titleService: Title) {
    //this.titleService.setTitle('Contact me // Marta Casal Portfolio');
    //this.addTags();
  }

  ngOnInit(): void {
    //this.metaService.addTag({ name: 'description', content: "Article Description" });
  }

  onSubmit() {
    //console.log('Aquí aniria un metode per enviar tota la info del form');
    alert('Good! Your message is arriving somewhere :)');
  }

  isValidInput(name: string): boolean {
    const inputName: any = this.contactForm.get(name);
    return inputName.touched && inputName.invalid
  }

  /*addTags() {
    this.metaService.addTags([
      { name: 'description', content: `Send me a message and we will be in touch!` },
      { name: 'robots', content: 'index,follow' },
      { name: 'keywords', content: 'Frontend Developer, Angular, UX/UI, Web Design, HTML, CSS, JS' },
      { name: 'author', content: 'Marta Casal' },
      { property: 'og:title', content: 'Content Title for social media' }
    ]);
  }*/
}

/* ALTRES EXEMPLES DE METODES */
  // injecta valors per defecte
/* onSetDefault() {
  const contact = {
    nombre: 'Caca',
    email: 'arroba@arroba.es',
    asunto: 'covid',
    mensaje: 'ssdfdsdfdsfsdfsdfdfd'
  }
  this.contactForm.setValue(contact); // setValue canvia TOTS els values del form
}

onReset() {
  this.contactForm.reset();
}

onPatchValue() { // canvia el value d'UN input en concret
  this.contactForm.patchValue({ email: 'conosia@mundia.com' });
} */
