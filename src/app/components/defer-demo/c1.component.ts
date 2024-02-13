import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-c1',
  standalone: true,
  imports: [],
  template: `<table class="table table-bordered table-hover">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Blood Group</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    
   @for (item of users; track item.id) {
    <tr>
      <th scope="row">{{item?.id}}</th>
      <td><img [src]="item?.image" class="img-fluid img-thumbnail img" alt="Sheep"> {{item.firstName +' '+ item.lastName}}</td>
      <td>{{item?.email}}</td>
      <td>{{item?.bloodGroup}}</td>
      <td>{{'@'+item?.username}}</td>
    </tr>
   }
  </tbody>
</table>`,
  styles: `
  .table-image {
  td, th {
    vertical-align: middle;
  }
}

.img {
  height: 50px;
  width: 50px;
  border-radius: 50%
}`,
})
export class C1Component {
  @Input() users: any;
}
