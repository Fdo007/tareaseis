import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import axios from 'axios';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.page.html',
  styleUrls: ['./pais.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PaisPage implements OnInit {
  country: string = '';
  universities: any[] = [];
  errorMessage: string = '';

  constructor(private navCtrl: NavController) {}

  ionViewWillLeave() {
    this.clearResults();
  }

  searchUniversities() {
    if (!this.country) {
      this.errorMessage = 'Escribe el nombre de un país antes de buscar.';
      return;
    }

    const apiUrl = `http://universities.hipolabs.com/search?country=${this.country}`;

    axios
      .get(apiUrl)
      .then((response) => {
        this.universities = response.data;

        if (this.universities.length === 0) {
          this.errorMessage = 'No se encontraron universidades para este país.';
        } else {
          this.errorMessage = ''; 
        }
      })
      .catch((error) => {
        console.error('Error al obtener los datos:', error);
        this.errorMessage = 'Hubo un error al hacer la busqueda.';
      });
  }

  clearResults() {
    this.universities = [];
    this.errorMessage = '';
  }
  ngOnInit() {
  }

}
