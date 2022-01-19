import { Component } from '@angular/core'
import { MessageService } from './message.service'

@Component({
    selector:'my-messages',
    templateUrl:'message.component.html',
    providers:[ MessageService ]
})
export class MessageComponent{
    bericht : string = ""

    constructor( private messageService : MessageService ){}

    verstuurBericht(){
        console.log("in verstuur bericht " + this.bericht);
        this.messageService.verwerkVerbinding(this.bericht);
        this.messageService.getMessages();
    }
}