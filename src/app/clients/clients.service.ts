import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  authUrl = 'https://web.fixitkb.com/api/';

  constructor(private http: HttpClient) {}

  // Get Clients
  getClients() {
    return this.http.get<any>(this.authUrl + 'clients');
  }

  findOne(username: any) {
    return this.http.get<any>(this.authUrl + username);
  }

  // Delete Client
  deleteC(username: any) {
    return this.http.delete<any>(this.authUrl + 'clients/' + username);
  }
}
