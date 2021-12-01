import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
  <ul>
    <li *ngFor="let item of portfolio$ | async">
       {{ item | json }}
    </li>
  </ul>
  <ul *ngIf="portfolioitem$ | async as item">
    <li>{{ item.yanabee}}</li>
  </ul>
  `,
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  portfolio$:Observable<any[]>;
  portfolioitem$:Observable<any>;
  constructor(db:AngularFireDatabase){
    this.portfolio$ = db.list('/Portfolio').valueChanges();
    this.portfolioitem$ = db.object('/Portfolio/1').valueChanges();
}

}
