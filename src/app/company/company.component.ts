import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs-compat';
import { CompanyStorageService } from '../shared/company-storage.service';
import { Company } from './company.model';
import { Column } from "./../shared/Column.model";
import { CompanyService } from './company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit, OnDestroy {
  tableColumns: Column[] = [
    {
      columnDef: 'position',
      header: 'Position',
      cell: (element: Record<string, any>) => `${element['position']}`
    },
    {
      columnDef: 'name',
      header: 'Name',
      cell: (element: Record<string, any>) => `${element['name']}`,
      isLink: true,
      url: 'abc'
    },
    {
      columnDef: 'weight',
      header: 'Weight',
      cell: (element: Record<string, any>) => `${element['weight']}`
    },
    {
      columnDef: 'symbol',
      header: 'Symbol',
      cell: (element: Record<string, any>) => `${element['symbol']}`
    }
  ];

  isLoading: boolean = false;
  companies: Company[] = [];
  subscription: Subscription;

  constructor(private companyService: CompanyService,
    private companyStorageService: CompanyStorageService) { }

  ngOnInit(): void {
    this.isLoading = true;

    this.companyStorageService.fetchCompany();
    this.subscription = this.companyService.companiesChanged
      .subscribe(
        (companies: Company[]) => {
          this.companies = companies;
        }
      )

    this.companies = this.companyService.getCompanies();
    console.log("compa => ",this.companies);
    this.isLoading = false;

    
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
