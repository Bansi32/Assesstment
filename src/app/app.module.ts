import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import modules
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//components
import { NavbarComponent } from './shared/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { FormComponent } from './form/form.component';
import { CategoriesComponent } from './categories/categories.component';
import { CaeComponent } from './cae/cae.component';
import { EseComponent } from './ese/ese.component';

//Material UI 
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule,} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    CategoriesComponent,
    FormComponent,
    CategoriesComponent,
    CaeComponent,
    EseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   FormsModule,
   BrowserAnimationsModule,
   MatToolbarModule,
   MatButtonModule,
   MatIconModule,
   MatButtonToggleModule,
   MatFormFieldModule,
   MatInputModule,
   ReactiveFormsModule,
   MatCheckboxModule,
   HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
