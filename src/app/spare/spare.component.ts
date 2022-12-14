import { Component } from '@angular/core';
import { Company } from './company.model';

@Component({
  selector: 'app-spare',
  templateUrl: './spare.component.html',
  styleUrls: ['./spare.component.css']
})
export class SpareComponent {
  companies: Company[] = [];
}
