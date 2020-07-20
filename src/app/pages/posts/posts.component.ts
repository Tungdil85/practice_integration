import { Component, OnInit } from '@angular/core';
import { YoutubeVideo } from 'src/app/components/models/video.model';
import { YoutubeService } from 'src/app/services/youtube/youtube.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(
    private _youtube: YoutubeService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) { }
  public video: YoutubeVideo;
  public idVideo: string;
  public srcVideo: SafeResourceUrl;

  async ngOnInit() {
    this.idVideo = this.route.snapshot.paramMap.get("id");
    this.video = await this._youtube.getYoutubeVideoByIdVideo(this.idVideo);
    console.log(this.video);
    this.srcVideo = this.sanitizer.bypassSecurityTrustResourceUrl(`http://www.youtube.com/embed/${this.idVideo}?autoplay=1&origin=http://example.com`);
  }

}
