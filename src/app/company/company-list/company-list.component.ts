import { Component, Input, OnInit } from '@angular/core';
import { Company } from '../company.model';

@Component({
  selector: 'tr[app-company-list]',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  @Input() company:Company;
  @Input() index: number;

  ngOnInit(): void {
    console.log("compa ",this.company);
    
  }

}
