import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase,AngularFireList,AngularFireObject } from '@angular/fire/database';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  /*
ListVar!:AngularFireList<any>;
BobjectVar!:AngularFireObject<any>;
*/
/*cuisines:AngularFireList<any>;
resturants:AngularFireList<any>;
 */
cuisines:Observable<any[]>;
resturants:Observable<any[]>;
/*
cuisines!:Observable<any>;
resturants!:Observable<any>;
*/ 


constructor(private db:AngularFireDatabase){
  this.cuisines= this.db.list('/cuisines').valueChanges();
  this.resturants= this.db.list('/restaurants').valueChanges();
 }
ngOnInit(){

}
/*
GetData(){
this.ListVar = this.db.list('/portfolio');
return this.ListVar;
}

CreateData(){
  this.ListVar.push({
    
  })
}
*/
}
