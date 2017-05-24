import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';

@Injectable()
export class ListService {
  public listDefault: Contact[] = [];

  constructor() {}

  getListDefault(): Contact[] {
    let listDefault = [];
    let contact = new Contact('John', 'Doe', '0123456789', 'pic', 'http://www.skype.com', 'http://www.linkedin.com', 'simon.gheeraert.sg@gmail.com');
    for (let i=0; i<9; i++) {
      listDefault.push(contact);
    }
    return listDefault;
  }
}
