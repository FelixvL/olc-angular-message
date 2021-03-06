import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Message } from "./message";
import { Persoon } from "./persoon";

@Injectable()
export class MessageService {


    constructor(private http: HttpClient){}

    verwerkVerbinding(bericht : string, tweede : string ){
        console.log("checkit"+bericht);
        console.log("even laten zien "+ tweede);
    }
// POST
    getMessages(): Observable<Message> {
        console.log("in get messages");
        return this.http.get<Message>("https://catfact.ninja/facts")

    }
    getPersoon(): Observable<Persoon> {
        console.log("in get messages");
        return this.http.get<Persoon>("http://localhost:8000")

    }

}