import {Component, Input, OnInit} from '@angular/core';
import {ManufacturerModel} from '../../Models/manufacturerModel';
import {ManufacturerServiceService} from '../../services/manufacturer-service.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-manufacturer-view',
  templateUrl: './manufacturer-view.component.html',
  styleUrls: ['./manufacturer-view.component.scss']
})
export class ManufacturerViewComponent implements OnInit {
  manufacturer: ManufacturerModel;
  @Input()
  name: string;
  constructor(private manufacturerService: ManufacturerServiceService) { }

  ngOnInit() {
      this.manufacturerService.getManufacturerInfo(this.name).subscribe((result) => {
        this.manufacturer = result[0];
        const parts = this.manufacturer.resource.split('/');
        this.manufacturer.resource = parts[parts.length - 1];
      });
  }
}
