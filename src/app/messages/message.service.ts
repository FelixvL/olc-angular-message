import { Injectable } from "@angular/core";

@Injectable()
export class MessageService {

    verwerkVerbinding(bericht : string ){
        console.log("checkit"+bericht);
    }

}