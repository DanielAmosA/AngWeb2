import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../components/shared/dialog/dialog.component';
import { TDialogButtons, TType } from '../types/global.types';



@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) {}

  openDialog(
    title: string,
    desc: string,
    type:TType,
    dialogButtons:TDialogButtons
  ): Promise<string> {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { title, desc, type, dialogButtons },
      width: '400px',
      height: 'auto',
      panelClass: `dialog-${type}`,
      autoFocus: false,
    });

    return dialogRef.afterClosed().toPromise();
  }

  openDialog2Options(title: string, desc: string, type:TType)
  {
    return this.openDialog(title, desc, type, 'YesNo');
  }
  openDialog1Options(title: string, desc: string, type:TType)
  {
    return this.openDialog(title, desc, type, 'Ok');
  }

}
