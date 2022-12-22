import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Company } from "./company.model";

@Injectable()
export class CompanyService {
    companies: Company[] = [];
    companiesChanged = new Subject<Company[]>();

    constructor(private http: HttpClient) {
        
    }

    getCompanies() {
        return this.companies.slice();
    }

    setCompanies(companies: Company[]) {
        this.companies = companies;
        this.companiesChanged.next(this.companies.slice());
    }
}