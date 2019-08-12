import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { TextInputComponent } from './text-input/text-input.component';
import { StructComponent } from './struct/struct.component';
import { PersonComponent } from './person/person.component';
import { PersonListComponent } from './person-list/person-list.component';
import { ParentComponent } from './parent.component';
import { ChildComponent } from './child.component';
import { CardComponent } from './card.component';
import { LearnPipesComponent } from './learn-pipes/learn-pipes.component';
import { RoundPipe } from './round.pipe';
import { ServiceComponent } from './service/service.component';

@NgModule({
  declarations: [
    AppComponent,
    TextInputComponent,
    StructComponent,
    PersonComponent,
    PersonListComponent,
    ParentComponent,
    ChildComponent,
    CardComponent,
    LearnPipesComponent,
    RoundPipe,
    ServiceComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }