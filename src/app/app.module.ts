import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './authFolder/signup/signup.component';
import { VerificationComponent } from './authFolder/verification/verification.component';
import { SetPasswordComponent } from './authFolder/set-password/set-password.component';
import { CompanyDetailComponent } from './authFolder/company-detail/company-detail.component';
import { TeamOnBoardComponent } from './authFolder/team-on-board/team-on-board.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthNavComponent } from './authFolder/auth-nav/auth-nav.component';
import { MainNavComponent } from './CompanyFolder/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BusinessInfoComponent } from './CompanyFolder/AdminFolder/business-info/business-info.component';
import { PlatformSettingsComponent } from './CompanyFolder/AdminFolder/platform-settings/platform-settings.component';
import { BillingInfoComponent } from './CompanyFolder/AdminFolder/billing-info/billing-info.component';
import { UserManagementComponent } from './CompanyFolder/AdminFolder/user-management/user-management.component';
import { PointAdministrationComponent } from './CompanyFolder/AdminFolder/point-administration/point-administration.component';
import { GiveAwardComponent } from './CompanyFolder/AwardsFolder/give-award/give-award.component';
import { ManageBudgetsComponent } from './CompanyFolder/AwardsFolder/manage-budgets/manage-budgets.component';
import { AwardListComponent } from './CompanyFolder/AwardsFolder/award-list/award-list.component';
import { AutomatedGreetingComponent } from './CompanyFolder/AwardsFolder/automated-greeting/automated-greeting.component';
import { ReportsComponent } from './CompanyFolder/reportsFolder/reports/reports.component';
import { DomainTownhallComponent } from './CompanyFolder/groupsFolder/domain-townhall/domain-townhall.component';
import { LeaderboardComponent } from './CompanyFolder/LeaderboardFolder/leaderboard/leaderboard.component';
import { AddEmployeeComponent } from './CompanyFolder/AdminFolder/UM/add-employee/add-employee.component';
import { AddGiftComponent } from './CompanyFolder/AwardsFolder/automated-greeting/greeting-automation-folder/add-gift/add-gift.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    VerificationComponent,
    SetPasswordComponent,
    CompanyDetailComponent,
    TeamOnBoardComponent,
    SignInComponent,
    AuthNavComponent,
    MainNavComponent,
    BusinessInfoComponent,
    PlatformSettingsComponent,
    BillingInfoComponent,
    UserManagementComponent,
    PointAdministrationComponent,
    GiveAwardComponent,
    ManageBudgetsComponent,
    AwardListComponent,
    AutomatedGreetingComponent,
    ReportsComponent,
    DomainTownhallComponent,
    LeaderboardComponent,
    AddEmployeeComponent,
    AddGiftComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
