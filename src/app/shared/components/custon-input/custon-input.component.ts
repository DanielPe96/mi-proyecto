import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-custon-input',
  templateUrl: './custon-input.component.html',
  styleUrls: ['./custon-input.component.scss'],
  standalone: false 
})
export class CustonInputComponent  implements OnInit {

    @Input () control!: FormControl;
    @Input () type!: string;
    @Input() label!: string;
    @Input() autocomplete!:string;
    @Input() icon!: string;

    isPassword!: boolean;
    hide: boolean= true;
  constructor() { }

  ngOnInit() {
    if (this.type == 'password') this.isPassword= true;
  }

    showOrHidePassword(){
      this.hide= !this.hide;
      if (this.hide) this.type = 'password';
      else this.type= 'text';
    }
}
