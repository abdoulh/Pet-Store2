import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { CardsComponent } from './components/cards/cards.component';
import { UsersListComponent } from './admin-components/users-list/users-list.component';
import { AdminNavigationBarComponent } from './admin-components/admin-navigation-bar/admin-navigation-bar.component';
import { ProductsListComponent } from './admin-components/products-list/products-list.component';
import { TokenInterceptor } from './service/http-interceptor.service';
import { userRoutingModule } from './routes/routes';


@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    LoginComponent,
    SignupComponent,
    CardsComponent,
    UsersListComponent,
    AdminNavigationBarComponent,
    ProductsListComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    userRoutingModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
