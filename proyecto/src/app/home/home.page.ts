import { Component, ElementRef, ViewChild } from '@angular/core';
import screenfull from 'screenfull'; 
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [ScreenOrientation]
})
export class HomePage {
  selectedItem: number | null = null; 
  videoUrls: { [key: number]: string } = {
    1: 'assets/videos/Sistema binario.mp4', 
    2: 'assets/videos/video-decimal.mp4',
    3: 'assets/videos/video-octal.mp4',
    4: 'assets/videos/video-hexa.mp4',
    5: 'assets/videos/video-maya.mp4',
  };

  @ViewChild('videoElement') videoElement!: ElementRef<HTMLVideoElement>;

  handleItemClick(itemId: number) {
    this.selectedItem = this.selectedItem === itemId ? null : itemId;
  }

  getVideoUrl(itemId: number): string {
    return this.videoUrls[itemId] || '';
  }

  toggleFullscreen(video: HTMLVideoElement) {
    if (!document.fullscreenElement) {
      video.requestFullscreen().catch(err => {
        console.log(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
      });
    } else {
      document.exitFullscreen();
    }
  }

  isMobile(): boolean {
    return window.innerWidth <= 768; // Considerar como móvil si el ancho de la ventana es menor o igual a 768px
  }
}
