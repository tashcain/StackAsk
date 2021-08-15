import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './services/authguard.guard';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { LoginComponent } from './components/auth/login/login.component';
import { AuthComponent } from './components/auth/auth/auth.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HomeComponent } from './components/main/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostQuesComponent } from './components/main/post-ques/post-ques.component';
import { QuestionsComponent } from './components/main/questions/questions.component';
import { QuestionItemComponent } from './components/main/question-item/question-item.component';
import { CommentsComponent } from './components/main/comments/comments.component';
import { CommItemComponent } from './components/main/comm-item/comm-item.component';
import { AuthHomeComponent } from './components/auth/auth-home/auth-home.component';
import { MyquesComponent } from './components/main/myques/myques.component';

const appRoutes: Routes = [
  { path: '', component: AuthHomeComponent },
  { path: 'login', component: AuthComponent, pathMatch: 'full' },
  { path: 'register', component: RegisterComponent, pathMatch: 'full' },
  {
    path: 'dashboard',
    component: HomeComponent,
    pathMatch: 'full',
    canActivate: [AuthguardGuard],
  },
  {
    path: 'post',
    component: PostQuesComponent,
    pathMatch: 'full',
    canActivate: [AuthguardGuard],
  },
  {
    path: 'question/:id',
    component: CommentsComponent,
    canActivate: [AuthguardGuard],
  },
  {
    path: 'myQues',
    component: MyquesComponent,
    canActivate: [AuthguardGuard],
  },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AuthComponent,
    RegisterComponent,
    HomeComponent,
    NavbarComponent,
    PostQuesComponent,
    QuestionsComponent,
    QuestionItemComponent,
    CommentsComponent,
    CommItemComponent,
    AuthHomeComponent,
    MyquesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
