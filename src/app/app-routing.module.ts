import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { BuyComponent } from './buy/buy.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { myguardGuard } from './myguard.guard';
import { ParentComponent } from './parent/parent.component';
import { AngFeaturesComponent } from './ang-features/ang-features.component';

const routes: Routes = [
  {
    path:'', component:ProductsComponent
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path:'products', component:ProductsComponent
  },
  {
    path:'register', component:RegisterComponent
  },
  {
    path:'search', component:SearchComponent
  },
  {
    path:'buy', component:BuyComponent, canActivate: [myguardGuard]
  },
  {
    path:'feedback', component:FeedbackComponent
  },
  {
    path:'parent', component:ParentComponent
  },
  {
    path:'ang', component:AngFeaturesComponent
  },
  {
    path:'**', component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
