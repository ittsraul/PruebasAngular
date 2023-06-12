/* import { Component, OnInit } from '@angular/core';
import { RandomJoke } from './chuckRandom.interface';
import { ChuckService } from './chuck.service';

@Component({
  selector: 'app-content-chuck',
  templateUrl: './content-chuck.component.html',
  styleUrls: ['./content-chuck.component.css']
})
export class ContentChuckComponent implements OnInit {
  jokes: RandomJoke[] = [];

  constructor(private chuck: ChuckService) {}

  ngOnInit() {
    this.getChuckJokes();
  }

  getChuckJokes() {
    this.chuck.getJokes().subscribe((response) => {
      this.jokes = response.result;
    });
  }
}
 */