import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
import { SvgListComponent } from './svg-list/svg-list.component';
import { FooterComponent } from './footer/footer.component';
import { BannerProductComponent } from './banner-product/banner-product.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectItemComponent } from './projects/project-item/project-item.component';
import { BannerFocusComponent } from './banner-focus/banner-focus.component';
import { BannerGradientComponent } from './banner-gradient/banner-gradient.component';
import { HeroComponent } from './hero/hero.component';
import { BannerActionComponent } from './banner-action/banner-action.component';
import { ProgressCardComponent } from './progress-card/progress-card.component';

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
    TechSkillsComponent,
    SvgListComponent,
    FooterComponent,
    BannerProductComponent,
    ProjectsComponent,
    ProjectItemComponent,
    BannerFocusComponent,
    BannerGradientComponent,
    HeroComponent,
    BannerActionComponent,
    ProgressCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
