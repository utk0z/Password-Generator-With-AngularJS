import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'password';
  password = '';
  length : number =0;
  includeLetters: boolean=false;
  includeNumbers: boolean=false;
  includeSymbols: boolean=false;


  modifyLength(value:string){
    const parsedValue = parseInt(value);
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  modifyLetters(){
    this.includeLetters = !this.includeLetters;
  }

  modifyNumbers(){
    this.includeNumbers = !this.includeNumbers;
  }

  modifySymbols(){
    this.includeSymbols = !this.includeSymbols;
  }

  buttonClick(){
    const number='1234567890';
    const letter ='qwertyuıopğüasdfghjklşizxcvbnmöç';
    const symbols ='!@#$%^&*()'

    let validChars = '';

    if(this.includeLetters){
      validChars += letter;
    }

    if(this.includeNumbers){
      validChars += number;
    }
    if(this.includeSymbols){
      validChars += symbols;
    }

    let generatedPassword ='';

    for (let i = 0; i < this.length; i++) {
      const index=Math.floor(Math.random()*validChars.length);
      generatedPassword += validChars[index]
    }
    this.password = generatedPassword;

  }
}
