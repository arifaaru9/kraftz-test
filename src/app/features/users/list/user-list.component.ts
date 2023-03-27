import { Component, OnInit } from '@angular/core';

import { UserService } from '../services';

import {MatTableDataSource} from '@angular/material/table';
import { IUser } from '../models';


export interface PeriodicElement {
  id: string;
  name: number;
  tasks: number;
  email: string;
  department: string;
  salary:string;
}


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.scss']
})
export class UserListComponent implements OnInit {

  private allUsersChecked: boolean = false;

  displayedColumns: string[] = ['id', 'name', 'tasks', 'email', 'department', 'salary', 'edit', 'delete'];
  dataSource:MatTableDataSource<IUser> = new MatTableDataSource();

  users!: Array<any>;
  isAdvancedSearchEnabled: boolean = false;
  email!: string;
  startDate: Date | null = null;
  endDate: Date | null = null;
  state!: string;
  states = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
    'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
    'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
    'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
    'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];
  deleteById: any;

  constructor(private service: UserService) { }

  ngOnInit() {
    this.loadUsers();
  }

  private loadUsers(): void {
    this.service.getUsers().subscribe(data => {
      console.log(data)
      this.users = data;
      this.dataSource = new MatTableDataSource(data)
    });
  }

  onRefresh() {
    this.users = [];

    this.loadUsers();
  }

  checkAll() {
    this.allUsersChecked = !this.allUsersChecked;
    for (let i in this.users) {
      this.users[i].selected = this.allUsersChecked;
    }
  }

  filterEmail(event:any){
//  const mailId= event.target.value
//   this.deleteById = this.users.filter((ele)=>{
//     return ele.email === mailId
//   })
  // console.log(this.filteredData)
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteUserById(id:any){
    this.service.deleteUser(id)
  }
}
