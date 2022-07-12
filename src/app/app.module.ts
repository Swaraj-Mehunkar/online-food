import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { VegComponent } from './veg/veg.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { NonvegComponent } from './nonveg/nonveg.component';
import { FilterPipe } from './filter.pipe';
import { FamousDishesComponent } from './famous-dishes/famous-dishes.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { CheckoutComponent } from './checkout/checkout.component';


@NgModule({
  declarations: [
    AppComponent,
   HomeComponent,
   FooterComponent,
   AboutComponent,
   ContactComponent,
   AdminLoginComponent,
   VegComponent,
   AdminPanelComponent,
   CartComponent,
   NonvegComponent,
   FilterPipe,
   FamousDishesComponent,
   GalleryComponent,
   SigninComponent,
   SignupComponent,
   ThankyouComponent,
   CheckoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
