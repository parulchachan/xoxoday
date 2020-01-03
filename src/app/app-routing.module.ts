import { CreateBudgetComponent } from './CompanyFolder/AwardsFolder/manage-budgets/create-budget-folder/create-budget/create-budget.component';
import { AddGiftComponent } from './CompanyFolder/AwardsFolder/automated-greeting/greeting-automation-folder/add-gift/add-gift.component';
import { AddEmployeeComponent } from './CompanyFolder/AdminFolder/UM/add-employee/add-employee.component';
import { DomainTownhallComponent } from './CompanyFolder/groupsFolder/domain-townhall/domain-townhall.component';
import { AutomatedGreetingComponent } from './CompanyFolder/AwardsFolder/automated-greeting/automated-greeting.component';
import { AwardListComponent } from './CompanyFolder/AwardsFolder/award-list/award-list.component';
import { ManageBudgetsComponent } from './CompanyFolder/AwardsFolder/manage-budgets/manage-budgets.component';
import { UserManagementComponent } from './CompanyFolder/AdminFolder/user-management/user-management.component';
import { BillingInfoComponent } from './CompanyFolder/AdminFolder/billing-info/billing-info.component';
import { BusinessInfoComponent } from './CompanyFolder/AdminFolder/business-info/business-info.component';
import { AuthNavComponent } from './authFolder/auth-nav/auth-nav.component';
import { TeamOnBoardComponent } from './authFolder/team-on-board/team-on-board.component';
import { SetPasswordComponent } from './authFolder/set-password/set-password.component';
import { VerificationComponent } from './authFolder/verification/verification.component';
import { SignupComponent } from './authFolder/signup/signup.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyDetailComponent } from './authFolder/company-detail/company-detail.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { MainNavComponent } from './CompanyFolder/main-nav/main-nav.component';
import { PlatformSettingsComponent } from './CompanyFolder/AdminFolder/platform-settings/platform-settings.component';
import { PointAdministrationComponent } from './CompanyFolder/AdminFolder/point-administration/point-administration.component';
import { GiveAwardComponent } from './CompanyFolder/AwardsFolder/give-award/give-award.component';
import { ReportsComponent } from './CompanyFolder/reportsFolder/reports/reports.component';
import { LeaderboardComponent } from './CompanyFolder/LeaderboardFolder/leaderboard/leaderboard.component';
import { SiteInfoComponent } from './CompanyFolder/AdminFolder/site-info/site-info.component';
import { AuthGaurdService } from './services/auth-gaurd.service';
import { AddAwardComponent } from './CompanyFolder/AwardsFolder/award-list/add-award/add-award.component';



const routes: Routes = [
  { path: '', redirectTo: '/domain', pathMatch: 'full' },
  { 
    path: 'auth', 
    component: AuthNavComponent,
    children:[
      { path: 'signup', component: SignupComponent },
      { path: 'verification', component: VerificationComponent },
      { path: 'setPassword', component: SetPasswordComponent },
      { path: 'companyDetail', component: CompanyDetailComponent },
      { path: 'teamOnBoard', component: TeamOnBoardComponent }
    ]
  },
  { path: 'signin', component: SignInComponent },
  { 
    path: 'domain', 
    component: MainNavComponent,
    canActivate:[AuthGaurdService],
    children:[
      { path: '', component: DomainTownhallComponent},
    
    ]
  },
  { 
    path: 'admin', 
    component: MainNavComponent,
    canActivate:[AuthGaurdService],
    children:[
      { path: 'userInfo', component: BusinessInfoComponent },
      { path: 'userInfo/site', component: SiteInfoComponent },
      { path: 'platform', component: PlatformSettingsComponent },
      { path: 'billingInfo', component: BillingInfoComponent },
      { path: 'userManagement', component: UserManagementComponent},
      { path: 'add_employee', component: AddEmployeeComponent},
      { path: 'pointAdministration', component: PointAdministrationComponent },
    ]
  },
  { 
    path: 'award', 
    canActivate:[AuthGaurdService],
    component: MainNavComponent,
    children:[
      { path: 'appreciatelist', component: GiveAwardComponent },
      { path: 'budget', component: ManageBudgetsComponent },
      { path: 'create-budget', component: CreateBudgetComponent},
      { path: 'awards', component: AwardListComponent},
      { path: 'add-award', component: AddAwardComponent},
      { path: 'giftslist', component: AutomatedGreetingComponent},
      { path: 'gifts', component: AddGiftComponent},
    ]
  },
  { 
    path: 'leaderboard',
    canActivate:[AuthGaurdService], 
    component: MainNavComponent,
    children:[
      { path: '', component: LeaderboardComponent }
    ]
  },
  { 
    path: 'reports',
    canActivate:[AuthGaurdService], 
    component: MainNavComponent,
    children:[
      { path: '', component: ReportsComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
