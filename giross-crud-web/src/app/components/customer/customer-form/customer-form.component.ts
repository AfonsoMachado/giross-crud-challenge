import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Customer } from '../customer.model';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css'],
})
export class CustomerFormComponent implements OnInit {
  constructor() {}

  @Input() customer: Customer = {
    email: '',
    name: '',
    phone: '',
    sex: '',
  };

  @Input() formType: 'create' | 'update' | 'delete' | '' = '';

  ngOnInit(): void {}

  @Output() nameChange = new EventEmitter();

  nameChanging() {
    this.nameChange.emit(this.customer);
  }
}
