import { Component } from '@angular/core';
import { PostcardComponent } from "../../layouts/postcard/postcard.component";

@Component({
  selector: 'app-home',
  imports: [PostcardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
