import { BottomComponent } from './nav/components/bottom/bottom.component';
import { EnvoiEmailComponent } from './nav/components/envoi-email/envoi-email.component';
import { MesServicesComponent } from './nav/components/mes-services/mes-services.component';
import { InfoPersoComponent } from './nav/components/info-perso/info-perso.component';
import { FormationsComponent } from './nav/components/formations/formations.component';
import { CompetencesComponent } from './nav/components/competences/competences.component';
import { AProposComponent } from './nav/components/a-propos/a-propos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './nav/components/accueil/accueil.component';
import { ParcoursProComponent } from './nav/components/parcours-pro/parcours-pro.component';
import { SoftSkillsEtLanguesComponent } from './nav/components/soft-skills-et-langues/soft-skills-et-langues.component';

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
