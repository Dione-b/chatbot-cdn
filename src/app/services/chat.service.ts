// chat.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';


@Injectable({
 providedIn: 'root'
})
export class ChatService {
 private apiUrl = environment.apiURL;

 constructor(private http: HttpClient) {}

 sendMessage(question: string): Observable<any> {
    return this.http.post(this.apiUrl, { question });
 }
}
