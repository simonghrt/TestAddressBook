import { Component, OnInit }      from '@angular/core';
import { Contact } from '../../models/contact';
import { ListService } from '../../services/list.service';
import { Router } from '@angular/router';

declare const __moduleName: string;

@Component({
  moduleId: __moduleName,
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: [ './list.component.css' ]
})

export class ListComponent {
  listContact: Contact[] = [];

  constructor(
    private listService: ListService,
    private router: Router
  ) {}

  ngOnInit() {
    this.listContact = this.listService.getListDefault();
  }

  goToProfile() {
    this.router.navigateByUrl('/profile');
  }
}
