import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})

export class MessageServiceService {

  private baseUrl = "https://testspring-bwcpe6bfaahbeph0.westeurope-01.azurewebsites.net";

  constructor(private http: HttpClient) {
  }

  getMessage(): Observable<any> {
      return this.http.get<any>(`${this.baseUrl}/api/message`);
    }

}
