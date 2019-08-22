import { BottomComponent } from './pages/bottom/bottom.component';
import { EnvoiEmailComponent } from './pages/envoi-email/envoi-email.component';
import { MesServicesComponent } from './pages/mes-services/mes-services.component';
import { InfoPersoComponent } from './pages/info-perso/info-perso.component';
import { FormationsComponent } from './pages/formations/formations.component';
import { CompetencesComponent } from './pages/competences/competences.component';
import { AProposComponent } from './pages/a-propos/a-propos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { SoftSkillsComponent } from './pages/soft-skils&langues/soft-skills/soft-skills.component';
import { LanguesComponent } from './pages/soft-skils&langues/langues/langues.component';
import { ParcoursProComponent } from './pages/parcours-pro/parcours-pro.component';

const routes: Routes = [
  {path: '', component: AccueilComponent },
  {path: 'accueil', component: AccueilComponent },
  {path: 'info-perso', component: InfoPersoComponent },
  {path: 'a-propos', component: AProposComponent },
  {path: 'competences', component: CompetencesComponent },
  {path: 'soft-skills', component: SoftSkillsComponent },
  {path: 'langues', component: LanguesComponent },
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
