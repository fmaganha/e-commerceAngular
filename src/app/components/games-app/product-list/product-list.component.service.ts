import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()

export class GamesService {
  private url = 'http://localhost:3100/api/products';

  httpOptions = {
    Headers: new HttpHeaders({ 'content-Type': 'application/json'})
  }

  constructor(private http: HttpClient){}

  getGames(){
    return this.http.get(this.url)
  }
}
