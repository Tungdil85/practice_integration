import { Component, OnInit } from '@angular/core';
import { YoutubeService } from 'src/app/services/youtube/youtube.service';
import { YoutubeVideo } from '../../components/models/video.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private _youtube: YoutubeService) {}

  public listVideos: YoutubeVideo[];
  async ngOnInit() {
    this.listVideos = await this._youtube.getYoutubeVideosJC();
    console.log(this.listVideos);
  }

  public getDayVideo(video: YoutubeVideo): string {
    let date: Date = new Date(video.snippet.publishedAt);
    return date.getDate() + ' ' + this.numberToMonth( date.getMonth() );
  }
  public getYearVideo(video: YoutubeVideo): string {
    let date: Date = new Date(video.snippet.publishedAt);
    return date.getFullYear().toString();
  }

  private numberToMonth(numberMonth: number): string {
    let retour: string;
    switch (numberMonth) {
      case 0:
        retour = 'Janvier';
        break;
      case 1:
        retour = 'Février';
        break;
      case 2:
        retour = 'Mars';
        break;
      case 3:
        retour = 'Avril';
        break;
      case 4:
        retour = 'Mai';
        break;
      case 5:
        retour = 'Juin';
        break;
      case 6:
        retour = 'Juillet';
        break;
      case 7:
        retour = 'Aout';
        break;
      case 8:
        retour = 'Saptembre';
        break;
      case 9:
        retour = 'Octobre';
        break;
      case 10:
        retour = 'Novembre';
        break;
      case 11:
        retour = 'Décembre';
        break;
    }
    return retour;
  }


}
