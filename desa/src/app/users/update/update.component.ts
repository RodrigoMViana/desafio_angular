import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { RequestUpdate, ResponseUpdate, RequestUser } from '../user.model';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id: string;
  request: RequestUpdate;

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit()  {
    this.id = this.route.snapshot.paramMap.get('id');
        this.userService.getUser(this.id).subscribe(res => {
        this.request =   res
        });
      }
    
    update() {
      this.userService.updateUser(this.id, Request).subscribe(res => {
        this.request = res
      });
      

}
}
