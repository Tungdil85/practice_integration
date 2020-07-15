import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'julien-chieze-website';

  public isDarkMode: boolean = true;

  constructor() {}
  ngOnInit(): void {
    this.initMode();
  }

  public initMode() {}

  public changeMode(p_isDarkMode) {
    this.isDarkMode = p_isDarkMode;

    let switchLabel = document.getElementById('switchMode');
    let position: DOMRect = switchLabel.getBoundingClientRect();

    if (this.isDarkMode) {
      let darModeDiv: any = document.getElementsByClassName('dark-bg')[0];
      darModeDiv.style['z-index'] = '0';
      darModeDiv.style['top'] = position.top + 'px';
      darModeDiv.style['left'] = position.left + 'px';

      let whiteModeDiv: any = document.getElementsByClassName('white-bg')[0];
      whiteModeDiv.style['z-index'] = '-1';

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
        'rgb(255, 255, 255)'
      );
      document.documentElement.style.setProperty(
        '--secondary-color',
        'rgb(0, 0, 0)'
      );
    } else {
      let darModeDiv: any = document.getElementsByClassName('white-bg')[0];
      darModeDiv.style['z-index'] = '-1';
      darModeDiv.style['top'] = position.top + 'px';
      darModeDiv.style['left'] = position.left + 'px';

      let whiteModeDiv: any = document.getElementsByClassName('white-bg')[0];
      whiteModeDiv.style['z-index'] = '0';
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
