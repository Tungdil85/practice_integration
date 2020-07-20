import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscriber } from 'rxjs';
import { TechnicalService } from '../technical/technical.service';
import { YoutubeVideo } from 'src/app/components/models/video.model';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  private API_KEY = 'AIzaSyBGawEPRIam84DxkSV5Prqh54YeZmdj6Vo';
  private channelId = "UCRXcryyD7dzNQzd0Zkbj3ug";

  constructor(
    @Inject(HttpClient) private _http: HttpClient,
    private _technical: TechnicalService,
    ) {}

  public getYoutubeChannelByName(p_name: string): Observable<any> {
    return this._http.get(
      `https://www.googleapis.com/youtube/v3/search?key=${this.API_KEY}&part=snippet&type=channel&q=${p_name}`
    );
  }
  public async getYoutubeVideosJC() {
    let listYoutube = JSON.parse(this._technical.getObjectInSessionStorage("LIST_VIDEO"));
    if(listYoutube) {
      return listYoutube;
    } else {
      let data: any = await this._http.get(
        `https://www.googleapis.com/youtube/v3/search?key=${this.API_KEY}&channelId=${this.channelId}&part=snippet,id&order=date&maxResults=13`
        // `https://www.googleapis.com/youtube/v3/videos?key=${this.API_KEY}&channelId=${this.channelId}&part=snippet,id&order=date&maxResults=13`
      ).toPromise();
      listYoutube = data.items;
      this._technical.setObjectInSessionStorage("LIST_VIDEO", JSON.stringify(listYoutube));
      return listYoutube;
    }
    
  } 

  public async getYoutubeVideoByIdVideo(p_id: string) {
    let video: any = await this._http.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${p_id}&key=${this.API_KEY}`).toPromise(); 
    return video.items[0];
  }
}
