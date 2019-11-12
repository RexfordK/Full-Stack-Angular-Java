import { TODO_JPA_API_URL, API_URL } from './../../app.constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../../list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http:HttpClient
  ) { }

  
  retrieveAllTodos(username) {
    // let url = `${TODO_JPA_API_URL}/users/${username}/todos`;
    let url = `http://localhost:8080/users/${username}/todos`;
    return this.http.get<Todo[]>(url);
    //console.log("Execute Hello World Bean Service")
  }

  deleteTodo(username, id){
    // return this.http.delete(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`);
    return this.http.delete(`${API_URL}/users/${username}/todos/${id}`);
  }

  retrieveTodo(username, id){
    // return this.http.get<Todo>(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`);
    return this.http.get<Todo>(`${API_URL}/users/${username}/todos/${id}`);
  }

  updateTodo(username, id, todo){
    return this.http.put(
          `${TODO_JPA_API_URL}/users/${username}/todos/${id}`
                , todo);
  }

  createTodo(username, todo){
    return this.http.post(
              `${TODO_JPA_API_URL}/users/${username}/todos`
                , todo);
  }

}
