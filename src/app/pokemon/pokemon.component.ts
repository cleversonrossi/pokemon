import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pokemon } from '../pokemon';

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  public tableData: TableData;
  selectedPokemon: Pokemon;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.tableData = {
      headerRow: ['Nome'],
      dataRows: []
    };

    this.getHeroes();
  }

  getHeroes() {
    const url = 'https://desafio-super-herois.herokuapp.com/herois';

    this.http.get(url).subscribe(res => {
      const response = Object.keys(res).map(key => {
        return [res[key].idheroi, res[key].nome, res[key].flagfavorito];
      });

      this.tableData = {
        headerRow: ['Nome', 'Favoritar'],
        dataRows: response
      };
    });
  }

  favoritar(heroi) {
    const id = heroi[0];
    const isFavorito = heroi[2];
    const newFlagFavorito = !isFavorito;

    this.http
      .put(
        `https://desafio-super-herois.herokuapp.com/herois/${id}/flagfavorito`,
        newFlagFavorito.toString(),
        {
          headers: new HttpHeaders().set('Content-Type', 'application/json')
        }
      )
      .subscribe(res => {
        window.location.reload();
      });
  }
}
