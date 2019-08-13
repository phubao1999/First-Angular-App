import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { TextInputComponent } from './text-input/text-input.component';
import { StructComponent } from './struct/struct.component';
import { PersonComponent } from './person/person.component';
import { PersonListComponent } from './person-list/person-list.component';
import { ParentComponent } from './parent.component';
import { ChildComponent } from './child.component';
import { LearnPipesComponent } from './learn-pipes/learn-pipes.component';
import { RoundPipe } from './round.pipe';
import { ServiceComponent } from './service/service.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CardsComponent } from './cards/cards.component';
import { FormComponent } from './form/form.component';

const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'struct', component: StructComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'person-list', component: PersonListComponent },
  { path: 'pipe', component: LearnPipesComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'contact-form', component: FormComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TextInputComponent,
    StructComponent,
    PersonComponent,
    PersonListComponent,
    ParentComponent,
    ChildComponent,
    LearnPipesComponent,
    RoundPipe,
    ServiceComponent,
    PageNotFoundComponent,
    HomePageComponent,
    CardsComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }