import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MediaComponent } from './media/media.component';
import { HeroImageComponent } from './hero-image/hero-image.component';
import { HorizonHeaderComponent } from './horizon-header/horizon-header.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { TechSkillsComponent } from './tech-skills/tech-skills.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    NavigationComponent,
    MediaComponent,
    HeroImageComponent,
    HorizonHeaderComponent,
    TestimonialComponent,
    TechSkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
