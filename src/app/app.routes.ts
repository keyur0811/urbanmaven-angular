import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { BookingComponent } from './booking/booking.component';
import { WalletComponent } from './wallet/wallet.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommitmentComponent } from './commitment/commitment.component';
import { HowitworksComponent } from './howitworks/howitworks.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, //default route
  { path: 'services', component: ServicesComponent }, 
  { path: 'about', component: AboutComponent }, 
  { path: 'booking', component: BookingComponent }, 
  { path: 'wallet', component: WalletComponent }, 
  { path: 'contact-us', component: ContactComponent }, 
  { path: 'commitment', component: CommitmentComponent }, 
  { path: 'how-it-works', component: HowitworksComponent }, 
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }