import { Component, OnInit } from '@angular/core';
import {DateUtilsService} from '../date-utils.service';

@Component({
  selector: 'app-timelines',
  templateUrl: './timelines.component.html',
  styleUrls: ['./timelines.component.scss']
})
export class TimelinesComponent implements OnInit {
output = '';
  constructor(private dateUtilService: DateUtilsService) { }

  ngOnInit() {
  }
onChange(value) {
    this.output = this.dateUtilService.getDiffToNow(value);
}
}
