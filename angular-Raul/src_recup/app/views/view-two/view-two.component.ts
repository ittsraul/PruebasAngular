import { Component } from '@angular/core';
import { Character } from 'src/app/interfaces/response';
import { DataService } from 'src/app/services/data.service';
import { Result } from 'src/app/interfaces/response';
@Component({
  selector: 'app-view-two',
  templateUrl: './view-two.component.html',
  styleUrls: ['./view-two.component.css']
})
export class ViewTwoComponent {
  constructor(public service: DataService) {}
  public resp: Result[] = [];
  public two : string = "two";


}
