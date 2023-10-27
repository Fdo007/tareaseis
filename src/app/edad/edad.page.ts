import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-edad',
  templateUrl: './edad.page.html',
  styleUrls: ['./edad.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class EdadPage implements OnInit {

  personName: string = '';
  age: number = 0;
  ageMessage: string = '';
  ageImage: string = '';

  constructor() {}

  determineAge() {
    if (this.personName) {
      fetch(`https://api.agify.io/?name=${this.personName}&country_id=US`)
        .then((response) => response.json())
        .then((data) => {
          this.age = data.age;
          this.setAgeMessage();
        })
        .catch((error) => {
          console.error('Error al obtener datos de edad:', error);
        });
    }
  }

  setAgeMessage() {
    if (this.age < 18) {
      this.ageMessage = 'Es joven';
      this.ageImage = 'assets/imagenes/joven.jpg';
    } else if (this.age >= 18 && this.age < 55) {
      this.ageMessage = 'Es un adulto';
      this.ageImage = 'assets/imagenes/adulto.jpg';
    } else {
      this.ageMessage = 'Es un anciano';
      this.ageImage = 'assets/imagenes/vieja.jpg';
    }
  }

  ngOnInit() {
  }

}
