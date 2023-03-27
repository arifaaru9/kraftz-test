import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpService } from './services';


import { NavBarComponent } from './components/shared/navbar/navbar.component';
import { ToolbarComponent } from './components/shared/toolbar/toolbar.component';
import { AppComponent } from './components/app/app.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { LoginComponent } from './components/login/login.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
// import { UserService } from './components/users/services';

const appRoutes: Routes = [
  
  {
    path: 'login',
    component: LoginLayoutComponent,
    children: [
      {
        path: '',
        component: LoginComponent
      }
    ]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'users', 
  component:MainLayoutComponent,
  children:[{
    path:'',
    loadChildren: () => import('./features/users/users.module').then(m => m.UsersModule)
  }]

},
  { path: '**', redirectTo: 'login' }

];

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    NavBarComponent,
    MainLayoutComponent,
    LoginLayoutComponent,
    LoginComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    
  ],
  providers: [
    HttpService,
    Title,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
