import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-clima',
  templateUrl: './clima.page.html',
  styleUrls: ['./clima.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ClimaPage implements OnInit {

  weatherData: any;
  location: string = 'Santo Domingo'; 
  apiKey: string = '1f59aa693cc24728a9c14924232610'; 

  constructor() {}

  ngOnInit() {
    this.getWeatherData();
  }

  getWeatherData() {
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${this.location}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        this.weatherData = data;
      })
  }
}
