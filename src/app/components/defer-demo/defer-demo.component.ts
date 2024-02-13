import { Component, signal } from '@angular/core';
import { C1Component } from './c1.component';
import { DemoServicesService } from '../demo-services.service';

@Component({
  selector: 'app-defer-demo',
  standalone: true,
  imports: [C1Component],
  templateUrl: './defer-demo.component.html',
  styleUrl: './defer-demo.component.scss'
})
export class DeferDemoComponent {
  isCheckedDefer = signal(false);
  user:any;
  constructor(private _services:DemoServicesService){
    this._services.getUserData().subscribe((res:any)=>{
      // console.log(res)
      this.user = res?.users
    })
  }
}
