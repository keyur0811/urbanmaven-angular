import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { WalletComponent } from "./wallet/wallet.component";
import { BookingComponent } from "./booking/booking.component";
import { ProfileComponent } from "./profile/profile.component";
import { ServicesComponent } from "./services/services.component";
import { CommitmentComponent } from "./commitment/commitment.component";
import { HowitworksComponent } from "./howitworks/howitworks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AboutComponent, ContactComponent, HomeComponent, WalletComponent, BookingComponent, ProfileComponent, ServicesComponent, CommitmentComponent, HowitworksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'urbanmaven';
}
