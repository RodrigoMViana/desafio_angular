import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestCreate } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  request: RequestCreate = {
    email:'',
    login:'',
    nome:'',
    senha:''
  }

  constructor(private userService: UserService, private _route: Router) { }

  ngOnInit(): void {
  }

  save() {
    this.userService.createUser(this.request).subscribe(res=> {
      this._route.navigate(['/users']);
    });
  }

}

