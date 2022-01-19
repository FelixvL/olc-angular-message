import { Component } from '@angular/core'
import { MessageService } from './message.service'

@Component({
    selector:'my-messages',
    templateUrl:'message.component.html',
    providers:[ MessageService ]
})
export class MessageComponent{
    constructor( private messageService : MessageService ){}

    verstuurBericht(){
        console.log("in verstuur bericht")
    }
}