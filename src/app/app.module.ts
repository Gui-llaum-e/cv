import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
// tslint:disable-next-line: max-line-length
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { AccueilComponent } from './nav/components/accueil/accueil.component';
import { InfoPersoComponent } from './nav/components/info-perso/info-perso.component';
import { AProposComponent } from './nav/components/a-propos/a-propos.component';
import { CompetencesComponent } from './nav/components/competences/competences.component';
import { SoftSkillsComponent } from './nav/components/soft-skills-et-langues/soft-skills/soft-skills.component';
import { LanguesComponent } from './nav/components/soft-skills-et-langues/langues/langues.component';
import { ParcoursProComponent } from './nav/components/parcours-pro/parcours-pro.component';
import { FormationsComponent } from './nav/components/formations/formations.component';
import { MesServicesComponent } from './nav/components/mes-services/mes-services.component';
import { EnvoiEmailComponent } from './nav/components/envoi-email/envoi-email.component';
import { BottomComponent } from './nav/components/bottom/bottom.component';
import { ErrorComponent } from './nav/components/error/error.component';
import { SoftSkillsEtLanguesComponent } from './nav/components/soft-skills-et-langues/soft-skills-et-langues.component';
import { HeadComponent } from './nav/components/accueil/head/head.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { LoaderComponent } from './nav/components/loader/loader.component';

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
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
