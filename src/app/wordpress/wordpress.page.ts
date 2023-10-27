import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-wordpress',
  templateUrl: './wordpress.page.html',
  styleUrls: ['./wordpress.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class WordpressPage implements OnInit {

  noticiasData: any[] = [];
  apiKey: string = '64b50c3a-50a7-46f1-bc90-3e094f19eaae';

  constructor() {}

  ngOnInit() {
    this.getNewsData(1);
  }

  getNewsData(noticiasNumber: number) {
    const apiUrl = `https://content.guardianapis.com/search?api-key=${this.apiKey}&order-by=newest&page-size=1&page=${noticiasNumber}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        this.noticiasData.push(data.response.results[0]);

        if (noticiasNumber < 3) {
          this.getNewsData(noticiasNumber + 1);
        }
      })
      .catch((error) => {
        console.error('Error al obtener datos de noticias:', error);
      });
  }
}