import { Component } from '@angular/core'
import { Message } from './message';
import { MessageService } from './message.service'
import { Persoon } from './persoon';

@Component({
    selector:'my-messages',
    templateUrl:'message.component.html',
    providers:[ MessageService ]
})
export class MessageComponent{
    bericht : string = "";
    gebruiker : string = "vul hier in";

    ffkort : Message = new Message();

    persoon1 : Persoon = new Persoon();

    constructor( private messageService : MessageService ){}

    verstuurBericht(){
        console.log("in verstuur bericht " + this.bericht);
        this.messageService.verwerkVerbinding(this.bericht, this.gebruiker);
        this.messageService.getMessages().subscribe(
            jojo => {  //lambda
                console.log("hoi");
                jojo.first_page_url = jojo.first_page_url + " extra tekst";
                console.log(jojo.first_page_url);
                this.ffkort = jojo;
            }
        );
    }

    zoekPersoon(){
        this.messageService.getPersoon().subscribe(
            p=>{
                console.log(p.voornaam);
                this.persoon1 = p;
            }
        );
    }

}
