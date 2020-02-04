import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EntitsptService {

  constructor(private http: HttpClient) { }
  
  getData() {
    return this.http.get('http://localhost:56774/api/EntiteSportive/1');
  }
//  adddata(){
//    this.tab.;
//    this.myTtab={
//     id:this.tab.length +1,
//     title:""
//    }

}
