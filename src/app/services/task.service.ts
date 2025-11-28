import { Injectable } from '@angular/core';
import { Task } from '../interface/Task';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {


  constructor(
    private http : HttpClient
  ) { }

  url='http://localhost:8080/tasks';

  getData(): Observable<any>{
    return this.http.get(this.url);
  }

 httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

  addData(data:any): Observable<any>{
    
    return this.http.post(this.url,{title:data},this.httpOptions);
  }


   deleteData(id:any):Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }

  // change(id:any): void{
  // const task = this.tasks.find(t => t.id === id);
  // if (task) task.isCompleted = !task.isCompleted;
  // }

   

}
