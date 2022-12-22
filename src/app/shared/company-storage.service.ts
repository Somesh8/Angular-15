import { HttpClient } from "@angular/common/http";
import { Injectable, ɵisInjectable } from "@angular/core";
import { Company } from "../company/company.model";
import { CompanyService } from "../company/company.service";

@Injectable({
    providedIn: 'root'
})
export class CompanyStorageService {
    constructor(private http:HttpClient,
                private companyService: CompanyService) {
        
    }

    fetchCompany() {
        this.http.get<Company[]>("http://localhost:8081/company/")
            .subscribe(resp => {
                this.companyService.setCompanies(resp);
            })
    }
}