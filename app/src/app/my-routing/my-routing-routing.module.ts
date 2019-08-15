import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from '../app.component';
import { TextInputComponent } from '../text-input/text-input.component';
import { StructComponent } from '../struct/struct.component';
import { PersonComponent } from '../person/person.component';
import { PersonListComponent } from '../person-list/person-list.component';
import { ParentComponent } from '../parent.component';
import { ChildComponent } from '../child.component';
import { LearnPipesComponent } from '../learn-pipes/learn-pipes.component';
import { RoundPipe } from '../round.pipe';
import { ServiceComponent } from '../service/service.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { HomePageComponent } from '../home-page/home-page.component';
import { CardsComponent } from '../cards/cards.component';
import { FormComponent } from '../form/form.component';
import { TodoListComponent } from '../todo-list/todo-list.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'struct', component: StructComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'person-list', component: PersonListComponent },
  { path: 'pipe', component: LearnPipesComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'contact-form', component: FormComponent },
  { path: 'todo-list', component: TodoListComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule , RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyRoutingRoutingModule { }
