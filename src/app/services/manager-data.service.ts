import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManagerDataService {

  // private apiUrl = 'your-api-url'; // החלף בכתובת ה-API שלך

  private apiUrl = 'https://jsonplaceholder.typicode.com';
  constructor(private http: HttpClient) {}

  // getManagerEmployeeData(userId: string, token: string): Observable<any> {
  //   const params = new HttpParams().set('id', userId);
  //   const headers = { Authorization: `Bearer ${token}` };

  //   return this.http.get(`${this.apiUrl}/ManagerFullDataSelectByID`, {
  //     headers,
  //     params,
  //   });
  // }

  getManagerEmployeeData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/users`);
  }
}
