import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() changeMode = new EventEmitter<boolean>();
  constructor() { }

  public isBgBlack: boolean = true;

  ngOnInit(): void {
  }

  public colorBgChange() {
    this.isBgBlack = !this.isBgBlack;
    this.changeMode.emit(this.isBgBlack);
  }

  public getLogoSrc() {
    if(this.isBgBlack) {
      return "../../../assets/julien-chieze-logo-white.svg"
    } else {
      return "../../../assets/julien-chieze-logo-back.svg"

    }
  }
  public getYoutubeSrc() {
    if(this.isBgBlack) {
      return "../../../assets/youtube-white.svg"
    } else {
      return ".../../../assets/youtube-black.svg"

    }
  }
  public getInstaSrc() {
    if(this.isBgBlack) {
      return "../../../assets/instagram-white.svg"
    } else {
      return ".../../../assets/instagram-blakc.svg"

    }
  }
  public getTwitterSrc() {
    if(this.isBgBlack) {
      return "../../../assets/twitter-white.svg"
    } else {
      return ".../../../assets/twitter-black.svg"

    }
  }
  public getFacebookSrc() {
    if(this.isBgBlack) {
      return "../../../assets/facebook-white.svg"
    } else {
      return ".../../../assets/facebook-black.svg"

    }
  }
}
