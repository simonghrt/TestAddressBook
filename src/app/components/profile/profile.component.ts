import { Component }      from '@angular/core';
import { Contact } from '../../models/contact';
import { ListService } from '../../services/list.service';
import { Router } from '@angular/router';

declare const __moduleName: string;

@Component({
  moduleId: __moduleName,
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: [ './profile.component.css' ]
})

export class ProfileComponent {
  contact: Contact;

  constructor(
    private listService: ListService,
    private router: Router
  ) {}

  ngOnInit() {
    this.contact = this.listService.getListDefault()[0];
  }
}
