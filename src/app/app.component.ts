import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { helpOutline, helpSharp, accessibilityOutline, accessibilitySharp, newspaperOutline, newspaperSharp,cloudyNightSharp, cloudyNightOutline,flagSharp, flagOutline, maleFemaleOutline, maleFemaleSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet],
})
export class AppComponent {
  public appPages = [
    { title: 'Genero', url: '/genero', icon: 'male-female' },
    { title: 'Edad', url: '/edad', icon: 'accessibility' },
    { title: 'Pais', url: '/pais', icon: 'flag' },
    { title: 'Clima', url: '/clima', icon: 'cloudy-night' },
    { title: 'Wordpress', url: '/wordpress', icon: 'newspaper' },
    { title: 'Acerca', url: '/acercade', icon: 'help' }, ];
  constructor() {
    addIcons({ helpOutline, helpSharp, accessibilityOutline, accessibilitySharp, newspaperOutline, newspaperSharp, cloudyNightSharp, cloudyNightOutline, flagSharp, flagOutline, maleFemaleOutline, maleFemaleSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp });
  }
}
