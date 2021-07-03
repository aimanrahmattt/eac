import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  selectedMenu: string = '';

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  scrollToTarget(target): void {
    const element = document.querySelector(target);
    this.scrollTo(element);
  }

  scrollTo(el: Element): void {
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  menuClicked(menu, target) {
    this.selectedMenu = menu;

    setTimeout(() => {
      this.scrollToTarget(target);
    }, 250);
  }

}
