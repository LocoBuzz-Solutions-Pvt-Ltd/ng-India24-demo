import { Component } from '@angular/core';
import { DemoServicesService } from '../demo-services.service';

@Component({
  selector: 'app-directives-demo',
  standalone: true,
  imports: [],
  templateUrl: './directives-demo.component.html',
  styleUrl: './directives-demo.component.scss'
})
export class DirectivesDemoComponent {
  users:any;

  userInfo = {
    isLoggedIn: false,
    isAdmin: false,
    name: 'Max'
  }
  user:any;
  constructor(private _services:DemoServicesService){
    this._services.getUserData().subscribe((res:any)=>{
      // console.log(res)
      this.users = res?.users
    })
  }
  color='red'
}
