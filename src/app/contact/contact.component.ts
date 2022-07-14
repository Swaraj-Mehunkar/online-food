import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IContact } from '../Interface/icontact';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  name:FormControl = new FormControl();
  email:FormControl = new FormControl();
  message:FormControl = new FormControl();
  contactForm: FormGroup;

  constructor(private formBuilder:FormBuilder, private router:Router,private service:ContactService) { 
    this.contactForm=this.formBuilder.group({
      name:new FormControl(["",Validators.required,  Validators.minLength(3), Validators.maxLength(10),
      Validators.pattern("[a-zA-Z].*")]),
      email: new FormControl(["",Validators.required, Validators.email]),
      address: new FormControl(["",Validators.required,Validators.minLength(6), Validators.maxLength(30),
      Validators.pattern("[a-zA-Z].*")]),
    });
    }

save(){ 
      let contact: IContact = {
        name:this.name.value,
        email:this.email.value,
        message:this.message.value,
      };

      this.service.addcontact(contact);
      alert("Contact Data saved Successfully");
    }

  ngOnInit(): void {
  }

}
