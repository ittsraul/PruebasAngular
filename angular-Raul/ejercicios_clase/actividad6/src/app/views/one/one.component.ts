import { Component } from '@angular/core';
import { Profile, Response } from 'src/app/views/one/github.interface';
import { OneService } from './one.service';
@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent {
  public username: string = "";
  public profiles: Profile[] = [];

  constructor(private one : OneService){}

  QueryResults(){
    this.one.getUser(this.username).subscribe(response => {
      this.profiles = response.items;
    });
  }

  
}
