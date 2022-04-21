import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductService } from './Client/product.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Client/header/header.component';
import { FooterComponent } from './Client/footer/footer.component';
import { HomeComponent } from './Client/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SubheaderComponent } from './Client/subheader/subheader.component';
import { SlideComponent } from './Client/slide/slide.component';
import { ProductComponent } from './Client/product/product.component';
import { FeedbackComponent } from './Client/feedback/feedback.component';
import { BenefitComponent } from './Client/benefit/benefit.component';
import { NewsletterComponent } from './Client/newsletter/newsletter.component';
import { FormComponent } from './Client/form/form.component';
import { UserListComponent } from './Client/user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SubheaderComponent,
    SlideComponent,
    ProductComponent,
    FeedbackComponent,
    BenefitComponent,
    NewsletterComponent,
    FormComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
