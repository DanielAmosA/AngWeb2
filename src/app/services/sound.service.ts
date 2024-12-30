import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

// A Sound Manager Service that handles sound playback, stopping, and additional settings.
export class SoundService {

  audio!: HTMLAudioElement;

  // Creating a BehaviorSubject with an initial value to track the playback state.
  private isPlaySource = new BehaviorSubject<boolean>(false);

  // An Observable that allows us to track changes.
  isPlay$ = this.isPlaySource.asObservable(); // נוכל להאזין לו

  constructor() {}

  // Playing the player and updating the playback state accordingly.
  playSound(): void {
    if(!this.isPlaySource.value)
    {
      this.audio = new Audio('assets/sounds/webSound.mp3');
      this.audio.play().catch(error => console.error('Error playing sound:', error));
      this.isPlaySource.next(true);
    }
  }

  // Stopping the player and updating the playback state accordingly.
  stopSound(): void {
    if(this.isPlaySource.value)
    {
      if (this.audio) {
        this.audio.pause();
        this.audio.currentTime = 0;
        this.isPlaySource.next(false);
      }
    }

  }

    // ניגון צליל עם אפשרויות נוספות
    playSoundWithOptions(soundPath: string, volume: number = 1, loop: boolean = false): void {
      this.audio = new Audio(soundPath);
      this.audio.volume = volume;
      this.audio.loop = loop;
      this.audio.play().catch(error => console.error('Error playing sound:', error));
    }

  // השהיית הצליל
  pauseSound(): void {
    if (this.audio) {
      this.audio.pause();
    }
  }

  // המשך ניגון
  resumeSound(): void {
    if (this.audio) {
      this.audio.play().catch(error => console.error('Error resuming sound:', error));
    }
  }

  // הגדרת עוצמת שמע
  setVolume(volume: number): void {
    if (this.audio) {
      this.audio.volume = Math.max(0, Math.min(1, volume));
    }
  }

















}
