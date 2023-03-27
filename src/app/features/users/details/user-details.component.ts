import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from '../services';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls:['./user-details.scss']
})
export class UserDetailsComponent implements OnInit {
  user: any;

  constructor(private route: ActivatedRoute, private service: UserService, private dialog: MatDialog) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
        let id = params['id'];
        this.getUser(id);
    });
  }

  private getUser(id: any){
    this.user = this.service.getUser(id);
  }

}
