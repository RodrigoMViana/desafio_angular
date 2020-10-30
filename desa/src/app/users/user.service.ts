import { Injectable } from '@angular/core';
import { RequestCreate, RequestUpdate, ResponseCreate, ResponseUser, ResponseUsers, ResponseUpdate } from './user.model';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  [x: string]: any;

  public url = "https://combustivelapp.herokuapp.com/api/usuarios";

  constructor(private http: HttpClient) { }

getUsers(): Observable<ResponseUsers> {

  return this.http.get<ResponseUsers>(this.url);

}

createUser(request: RequestCreate): Observable<ResponseCreate>{
  return this.http.post<ResponseCreate>(this.url, request);
}

getUser(id:string): Observable<ResponseUser> {
  const _url = '${this.url}/${id}';
  return this.http.get<ResponseUser>(_url)

}

updateUsers(id: string, request): Observable<ResponseUpdate> {
  const _url = '${this.url}/${id}';
  return this.http.put<ResponseCreate>(_url, request);
}

deleteUser(id: string): Observable<any> {
  const _url = '${this.url}/${id}';
  return this.http.delete<ResponseCreate>(_url);
}

}
