import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { FamousDishesComponent } from './famous-dishes/famous-dishes.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { NonvegComponent } from './nonveg/nonveg.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { VegComponent } from './veg/veg.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'footer',component:FooterComponent},
  {path:'about',component:AboutComponent},
  {path:'cart',component:CartComponent},
  {path:'contact',component:ContactComponent},
  {path:'admin-login',component:AdminLoginComponent},
  {path:'veg',component:VegComponent},
  {path:'admin-panel',component:AdminPanelComponent},
  {path:'nonveg',component:NonvegComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'signin',component:SigninComponent},
  {path:'signup',component:SignupComponent},
  {path:'thankyou',component:ThankyouComponent},
  {path:'famous-dishes',component:FamousDishesComponent},
  {path:'checkout',component:CheckoutComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
