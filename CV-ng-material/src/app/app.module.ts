import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
// tslint:disable-next-line: max-line-length
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { AccueilComponent } from './nav/pages/accueil/accueil.component';
import { InfoPersoComponent } from './nav/pages/info-perso/info-perso.component';
import { AProposComponent } from './nav/pages/a-propos/a-propos.component';
import { CompetencesComponent } from './nav/pages/competences/competences.component';
import { SoftSkillsComponent } from './nav/pages/soft-skills-et-langues/soft-skills/soft-skills.component';
import { LanguesComponent } from './nav/pages/soft-skills-et-langues/langues/langues.component';
import { ParcoursProComponent } from './nav/pages/parcours-pro/parcours-pro.component';
import { FormationsComponent } from './nav/pages/formations/formations.component';
import { MesServicesComponent } from './nav/pages/mes-services/mes-services.component';
import { EnvoiEmailComponent } from './nav/pages/envoi-email/envoi-email.component';
import { BottomComponent } from './nav/pages/bottom/bottom.component';
import { ErrorComponent } from './nav/pages/error/error.component';
import { SoftSkillsEtLanguesComponent } from './nav/pages/soft-skills-et-langues/soft-skills-et-langues.component';

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
    SoftSkillsEtLanguesComponent
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
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
