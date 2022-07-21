import { Component, OnInit } from '@angular/core';
import { GamesService } from './product-list.component.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  games: any;

  gamesService : GamesService;

  constructor( gamesService: GamesService ) {
    this.gamesService = gamesService;
  }

  ngOnInit(): void {

    this.games = this.gamesService.getGames().subscribe((data => {
      this.games = data;
      console.log(this.games);

    }));
  }
}
