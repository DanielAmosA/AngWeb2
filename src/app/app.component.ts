import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DialogService } from './services/dialog.service';
import { SoundComponent } from "./components/shared/sound/sound.component";
import { SoundService } from './services/sound.service';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeDialogComponent } from './pages/employee-dialog/employee-dialog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, SoundComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Learn1';

  constructor(private dialogService: DialogService , private renderer: Renderer2, private soundService: SoundService, public dialog: MatDialog ) {}

  showSuccess(): void {
    this.dialogService
      .openDialog1Options('Success', 'The operation was successful!','Error')
      .then((result) => console.log('Dialog Result:', result));
  }

  showError(): void {
    this.dialogService
      .openDialog2Options('Warning', 'Are you sure you want to continue?','Success')
      .then((result) => console.log('Dialog Result:', result));
  }

  //#region Web Sound
  @ViewChild('mainAppDiv', { static: false }) mainAppDiv!: ElementRef;
  isFirstClicked = false;

  ngAfterViewInit() {
    // We will play the sound on the first interaction with the website, then remove the listener.
    if (!this.isFirstClicked) {
      const clickListener = this.renderer.listen(this.mainAppDiv.nativeElement, 'click', () => {
        this.soundService.playSound();
        this.isFirstClicked = true;
        clickListener();
      });
    }
  }
  //#endregion

  currentEmployee = {
    fullName: 'John Doe',
    phone: '123456789',
    email: 'john.doe@example.com'
  };

  // פונקציה לפתיחת הדיאלוג
  openDialog() {
    this.dialog.open(EmployeeDialogComponent, {
      data: this.currentEmployee // העברת נתונים לדיאלוג
    });
  }

}
