import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { UserListComponent } from './list/user-list.component';
import { CreateEditUserComponent } from './create-edit-user/create-edit-user.component';
import { UserDetailsComponent } from './details/user-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { UserService } from './services';


const routes: Routes = [
  { 
    path: '', component: UsersComponent,
    
      children: [
        // { path: 'home', component: HomeComponent, data: { title: 'Dashboard' } },
        { path: '', component: UserListComponent, data: { title: 'Users' } },
        { path: 'new', component: CreateEditUserComponent, data: { title: 'New user' } },
        { path: 'edit/:id', component: CreateEditUserComponent, data: { title: 'Edit user' } },
        { path: 'details/:id', component: UserDetailsComponent, data: { title: 'User details' } },
        
      ]}
];

@NgModule({
  declarations: [
    UsersComponent,
    UserListComponent,
    CreateEditUserComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatIconModule,
    MatSlideToggleModule,
    MatCardModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatRadioModule,
    MatListModule,
    MatGridListModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatTabsModule,
    MatChipsModule,
    MatInputModule,
    MatTableModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers:[UserService]
})
export class UsersModule { }
