import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  answer = "";
  genders = ['male', 'female'];
  checked = true;
  defaultQuestion: string = "pet";

  suggestedName = "";

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  onSubmit(form: NgForm) {
    console.log(form)
  }

  onSuggest() {
    this.suggestedName = "Superuser";
  }
}
