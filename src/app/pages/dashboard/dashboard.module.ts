import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartModule } from 'primeng/chart';
import { TodosService } from 'src/app/shared/todos.service';

import { DashboardComponent } from './dashboard.component';
import { GoalsDashboardComponent } from '../../dashboard-pages/goals-dashboard/goals-dashboard.component';
import { SettingsComponent } from '../../dashboard-pages/settings/settings.component';
import { MainDashboardComponent } from '../../dashboard-pages/main-dashboard/main-dashboard.component';
import { GoalFormComponent } from '../../dashboard-pages/goals-dashboard/goal-form/goal-form.component';
import { GoalsDisplayComponent } from '../../dashboard-pages/goals-dashboard/goals-display/goals-display.component';
import { UebersichtDiagrammComponent } from 'src/app/dashboard-pages/main-dashboard/uebersicht-diagramm/uebersicht-diagramm.component';

@NgModule({
  declarations: [
    DashboardComponent,
    GoalsDashboardComponent,
    SettingsComponent,
    MainDashboardComponent,
    GoalFormComponent,
    GoalsDisplayComponent,
    UebersichtDiagrammComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ChartModule
  ],
  providers: [TodosService]
})
export class DashboardModule { }
