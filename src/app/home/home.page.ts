import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() { }

  endereco = {}

  buscar(formu) {
    let cep = formu.value.cep;
    fetch("http://viacep.com.br/ws/" + cep + "/json")
      .then(function (dados) {
        return dados.json()
      }).then((dadosRetornados) => {
        console.log(dadosRetornados)
        this.endereco = { ...dadosRetornados }
      })
  }
}