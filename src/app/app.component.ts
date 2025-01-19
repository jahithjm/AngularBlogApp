import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./layouts/header/header.component";
import { CatNavbarComponent } from "./layouts/cat-navbar/cat-navbar.component";
import { FooterComponent } from "./layouts/footer/footer.component";
import { PostcardComponent } from "./layouts/postcard/postcard.component";
import { SubscriptionsComponent } from "./subscriptions/subscriptions.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, CatNavbarComponent, FooterComponent, PostcardComponent, SubscriptionsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blogApp';
}
