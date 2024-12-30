import { CommonModule } from '@angular/common';
import { SoundService } from './../../../services/sound.service';
import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-sound',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sound.component.html',
  styleUrl: './sound.component.scss',
})
export class SoundComponent {

  isPlay: boolean = false;

  constructor(private soundService:SoundService){}

  ngOnInit() {
    // Listener for changes in the `isPlay$` property.
    this.soundService.isPlay$.subscribe(status => {
      this.isPlay = status; // מעדכן את הסטטוס של הסאונד כאשר משתנה
    });
  }

  playSound() {
    this.soundService.playSound();
  }

  stopSound() {
    this.soundService.stopSound();
  }
}
