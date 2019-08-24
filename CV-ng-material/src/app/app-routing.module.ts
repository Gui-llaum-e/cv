import { BottomComponent } from './nav/pages/bottom/bottom.component';
import { EnvoiEmailComponent } from './nav/pages/envoi-email/envoi-email.component';
import { MesServicesComponent } from './nav/pages/mes-services/mes-services.component';
import { InfoPersoComponent } from './nav/pages/info-perso/info-perso.component';
import { FormationsComponent } from './nav/pages/formations/formations.component';
import { CompetencesComponent } from './nav/pages/competences/competences.component';
import { AProposComponent } from './nav/pages/a-propos/a-propos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './nav/pages/accueil/accueil.component';
import { ParcoursProComponent } from './nav/pages/parcours-pro/parcours-pro.component';
import { SoftSkillsEtLanguesComponent } from './nav/pages/soft-skills-et-langues/soft-skills-et-langues.component';

const routes: Routes = [
  {path: '', component: AccueilComponent },
  {path: 'accueil', component: AccueilComponent },
  {path: 'info-perso', component: InfoPersoComponent },
  {path: 'a-propos', component: AProposComponent },
  {path: 'competences', component: CompetencesComponent },
  {path: 'soft-skills-et-langues', component: SoftSkillsEtLanguesComponent },
  {path: 'formations', component: FormationsComponent },
  {path: 'parcours-pro', component: ParcoursProComponent },
  {path: 'mes-services', component: MesServicesComponent },
  {path: 'email-me', component: EnvoiEmailComponent },
  {path: 'bottom', component: BottomComponent },
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
