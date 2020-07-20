import { Component, OnInit } from '@angular/core';
import { YoutubeService } from './services/youtube/youtube.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'julien-chieze-website';

  public isDarkMode: boolean = true;

  constructor(
    private _youtube: YoutubeService
  ) {}
  ngOnInit(): void {
  }

  public changeMode(p_isDarkMode) {
    this.isDarkMode = p_isDarkMode;

    let switchLabel = document.getElementById('switchMode');
    let position: DOMRect = switchLabel.getBoundingClientRect();

    if (this.isDarkMode) {
      let darModeDiv: any = document.getElementsByClassName('dark-bg')[0];
      darModeDiv.style['z-index'] = '-100';
      darModeDiv.style['top'] = position.top + 'px';
      darModeDiv.style['left'] = position.left + 'px';

      let whiteModeDiv: any = document.getElementsByClassName('white-bg')[0];
      whiteModeDiv.style['z-index'] = '-101';

      darModeDiv.children[0].animate(
        [
          // keyframes
          {
            height: '0vw',
            width: '0vw',
          },
          {
            height: '250vw',
            width: '250vw',
          },
        ],
        500
      );

      //changement main et secondary color

      document.documentElement.style.setProperty(
        '--main-color',
        'rgb(255, 255, 255)' //blanc
      );
      document.documentElement.style.setProperty(
        '--secondary-color',
        'rgb(0, 0, 0)' //noir
      );
    } else {
      let darModeDiv: any = document.getElementsByClassName('white-bg')[0];
      darModeDiv.style['z-index'] = '-101';
      darModeDiv.style['top'] = position.top + 'px';
      darModeDiv.style['left'] = position.left + 'px';

      let whiteModeDiv: any = document.getElementsByClassName('white-bg')[0];
      whiteModeDiv.style['z-index'] = '-100';
      whiteModeDiv.children[0].animate(
        [
          // keyframes
          {
            height: '0vw',
            width: '0vw',
          },
          {
            height: '250vw',
            width: '250vw',
          },
        ],
        500
      );

      //changement main et secondary color
      document.documentElement.style.setProperty(
        '--main-color',
        'rgb(0, 0, 0)'
      );
      document.documentElement.style.setProperty(
        '--secondary-color',
        'rgb(255, 255, 255)'
      );
    }
  }
}
