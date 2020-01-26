import { CharactersService } from './../services/characters.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  characters: any[];

  constructor(private service: CharactersService) {}

  ngOnInit() {
    this.service.getAll()
      .subscribe(characters => this.characters = characters);

  }

}
