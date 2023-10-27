import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-genero',
  templateUrl: './genero.page.html',
  styleUrls: ['./genero.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class GeneroPage implements OnInit {
  name: string = '';
  gender: string = '';

  predictGender() {
    fetch(`https://api.genderize.io/?name=${this.name}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.gender) {
          this.gender = data.gender;
        } else {
          this.gender = 'Desconocido';
        }
      })
      .catch((error) => {
        console.error('Error al obtener datos de género:', error);
      });
  }
  ngOnInit() {
  }

}
