import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
// tslint:disable-next-line: max-line-length
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { MenuComponent } from './shared/menu/menu.component';
import { InfoPersoComponent } from './pages/info-perso/info-perso.component';
import { AProposComponent } from './pages/a-propos/a-propos.component';
import { CompetencesComponent } from './pages/competences/competences.component';
import { SoftSkillsComponent } from './pages/soft-skils&langues/soft-skills/soft-skills.component';
import { LanguesComponent } from './pages/soft-skils&langues/langues/langues.component';
import { ParcoursProComponent } from './pages/parcours-pro/parcours-pro.component';
import { FormationsComponent } from './pages/formations/formations.component';
import { MesServicesComponent } from './pages/mes-services/mes-services.component';
import { EnvoiEmailComponent } from './pages/envoi-email/envoi-email.component';
import { BottomComponent } from './pages/bottom/bottom.component';
import { ErrorComponent } from './pages/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AccueilComponent,
    MenuComponent,
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
    ErrorComponent
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
