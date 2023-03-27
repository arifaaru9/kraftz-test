import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

import { UserService } from '../services';
import { IUser } from '../models';
import {FormControl, FormGroup, FormArray, Validators} from '@angular/forms';

export enum EditMode {
   Create = 0,
   Edit = 1
}

@Component({
  selector: 'app-create-edit-user',
  templateUrl: './create-edit-user.component.html',
})
export class CreateEditUserComponent implements OnInit {
  user:any;
  editMode: EditMode = EditMode.Create;
  id:string =''
  toppingList = ['EEE', 'CSE', 'ECE', 'IT', 'MECHANICAL', 'EIE'];
  userForm: FormGroup = new FormGroup({});

  constructor(private route: ActivatedRoute,private router:Router, private service: UserService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
       this.id = params['id'];
        if(this.id){
          this.editMode = EditMode.Edit;
          this.getUser(this.id);
        }
        else{
          this.editMode = EditMode.Create;
          this.user = {};
        }
    });

    this.userForm = new FormGroup({
      id: new FormControl('',[Validators.required]),
      name: new FormControl('',[Validators.required]),
      tasks: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required]),
      department: new FormControl('',[Validators.required]),
      salary: new FormControl('',[Validators.required])
 }); 

    console.log('EditMode', EditMode[this.editMode], this.editMode);
  }

  private getUser(id: any){
    this.user = this.service.getUser(id);
  }

  onSave(){
    console.log(this.user);
    console.log(this.userForm.value)
    if(this.id){
      this.service.updateUser(this.userForm.value)

    } else {
      this.service.addUser(this.userForm.value)
    }
    
    this.router.navigateByUrl('/users')
  }
}
