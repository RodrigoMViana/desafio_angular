import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ResponseUser, RequestUser } from '../user.model'

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  id: string;
  request: ResponseUser;
  constructor(private userService: UserService, private route: ActivatedRoute, private _route: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.userService.getUser(this.id).subscribe(res => {
      this.request = res;
    });
  }

  delete() {
    this.userService.deleteUser(this.id).subscribe(res => {
    })
    alert('Removido com Sucesso')
    this._route.navigate(['/users']);

    
  }
  cancel() {
    this._route.navigate(['/users']);
  }

  save() {

  }
}


