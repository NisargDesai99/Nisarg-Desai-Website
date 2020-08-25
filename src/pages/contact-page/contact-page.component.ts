import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/services/contact/contact.service';

// import { NgbModule, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.less']
})
export class ContactPageComponent implements OnInit {

  name: string;
  email: string;
  message: string;

  constructor(
    private contactService: ContactService
  ) { }

  ngOnInit() {
  }

  onSend() {
    // var name = <HTMLInputElement>(document.querySelector("#name"));
    // var email = <HTMLInputElement>(document.querySelector("#email"));
    // var message = <HTMLInputElement>(document.querySelector("#message"));

    if (this.name == undefined || this.email == undefined || this.message == undefined
      || this.name == "" || this.email == "" || this.message == "") {
      alert("Please enter all empty fields");
    } else {
      // console.log(`Name: ${name.value}`);
      // console.log(`Email: ${email.value}`);
      // console.log(`Message: ${message.value}`);

      var indexOfAtSign = this.email.indexOf("@");
      if (indexOfAtSign == -1 || this.email.lastIndexOf(".") == -1) {
        alert("The email you entered is invalid.");
        return;
      }

      this.contactService.sendContactRequest(this.name, this.email, this.message)
        .then(res => {
          /*do something here....
          maybe clear the form or give a success message*/
          // this.name = "";
          // this.email = "";
          // this.message = "";
          // console.log("hello, world");
        });

        // alert(`${this.name}\n${this.email}\n${this.message}`);

        this.name = "";
        this.email = "";
        this.message = "";
        alert("Message Sent!");

      // this.contactService.sendContactRequest(name.value, email.value, message.value);
    }

    // contactService.sendContactRequest();
  }

}
