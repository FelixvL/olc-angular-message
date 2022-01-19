import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class MessageService {


    constructor(private http: HttpClient){}

    verwerkVerbinding(bericht : string ){
        console.log("checkit"+bericht);
    }

    getMessages(): void {
        console.log("in get messages");
        this.http.get<object[]>("https://catfact.ninja/facts")
        .forEach(
            h => {
                console.log(h);
            }
        )
      }

}