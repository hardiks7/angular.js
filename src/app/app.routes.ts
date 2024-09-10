import { Routes } from '@angular/router';
import { HeroeDetailComponent } from '../app/components/hero-detail/hero-detail.component';
import { MessagesComponent } from '../app/components/messages/messages.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroFormComponent } from './components/hero-form/hero-form.component';
import { InterviewFormComponent } from './interview-form/interview-form.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ProductsComponent } from './products/products.component';
import { BlogComponent } from './blog/blog.component';
import { CareersComponent } from './careers/careers.component';
import { ContactComponent } from './contact/contact.component';
import { HelpComponent } from './help/help.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'msg', component: MessagesComponent },
    { path: 'app-dashboard', component: HeroeDetailComponent },
    { path: 'hero_form', component: HeroFormComponent },
    { path: 'interview-form', component: InterviewFormComponent },
    { path: 'header', component: HeaderComponent },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'careers', component: CareersComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'help', component: HelpComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: '' }
];

