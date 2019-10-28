import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatPaginatorModule,
  MatSidenavModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  ErrorStateMatcher,
  ShowOnDirtyErrorStateMatcher,
} from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AProposComponent } from './nav/components/a-propos/a-propos.component';
import { AccueilComponent } from './nav/components/accueil/accueil.component';
import { HeadComponent } from './nav/components/accueil/head/head.component';
import { BottomComponent } from './nav/components/bottom/bottom.component';
import { CompetencesComponent } from './nav/components/competences/competences.component';
import { EnvoiEmailComponent } from './nav/components/envoi-email/envoi-email.component';
import { ErrorComponent } from './nav/components/error/error.component';
import { FormationsComponent } from './nav/components/formations/formations.component';
import { InfoPersoComponent } from './nav/components/info-perso/info-perso.component';
import { LoaderComponent } from './nav/components/loader/loader.component';
import { MesServicesComponent } from './nav/components/mes-services/mes-services.component';
import { ParcoursProComponent } from './nav/components/parcours-pro/parcours-pro.component';
import { LanguesComponent } from './nav/components/soft-skills-et-langues/langues/langues.component';
import { SoftSkillsEtLanguesComponent } from './nav/components/soft-skills-et-langues/soft-skills-et-langues.component';
import { SoftSkillsComponent } from './nav/components/soft-skills-et-langues/soft-skills/soft-skills.component';
import { NavComponent } from './nav/nav.component';


// tslint:disable-next-line: max-line-length

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AccueilComponent,
    InfoPersoComponent,
    AProposComponent,
    CompetencesComponent,
    SoftSkillsComponent,
    LanguesComponent,
    ParcoursProComponent,
    FormationsComponent,
    MesServicesComponent,
    EnvoiEmailComponent,
    BottomComponent,
    ErrorComponent,
    SoftSkillsEtLanguesComponent,
    HeadComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSliderModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatInputModule,
    HttpClientModule,
    MatFormFieldModule,
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
