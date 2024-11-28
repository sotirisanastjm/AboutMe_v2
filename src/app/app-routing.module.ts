import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectItemComponent } from './projects/project-item/project-item.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'contact/:submit', component: ContactComponent },
  { path: 'projects', component: ProjectsComponent }, 
  { path: 'projects/:id', component: ProjectItemComponent }, 
  { path: '', redirectTo: '', pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: '' } 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled', // Enables scroll position restoration
      anchorScrolling: 'enabled' // Optional: Enables scrolling to anchor links
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
