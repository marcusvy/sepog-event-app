import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {

  form?: FormGroup;

  constructor(private fb:FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [],
      subject: [],
      email: [],
      phone: [],
      message: [],
    })
  }

  onSubmit(event: SubmitEvent) {}
}
