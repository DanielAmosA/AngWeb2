import { ManagerDataService } from './../../services/manager-data.service';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { KindLoadDataComponent } from "../../components/shared/kind-load-data/kind-load-data.component";
import { TKindLoad } from '../../types/global.types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manager-data',
  standalone: true,
  imports: [KindLoadDataComponent,CommonModule],
  templateUrl: './manager-data.component.html',
  styleUrl: './manager-data.component.scss'
})
export class ManagerDataComponent implements OnInit {
  managerEmployeeData: any[] = [];
  kindLoadData: TKindLoad = 'Wait';

  @ViewChild('successTemplate', { static: true }) successTemplate!: TemplateRef<any>;
user: any;

  constructor(private managerDataService: ManagerDataService) {}

  ngOnInit(): void {
    // this.loadManagerData('user-id', 'user-token');
    this.loadManagerData();
  }

  // loadManagerData(userId: string, token: string): void {
  //   this.kindLoadData = 'Wait';

  //   this.managerDataService.getManagerEmployeeData(userId, token).subscribe({
  //     next: (response) => {
  //       if (response.success) {
  //         this.managerEmployeeData = response.data;
  //         this.kindLoadData = 'Success'; // אין שגיאה
  //       } else {
  //         this.kindLoadData = 'Error';
  //       }
  //     },
  //     error: () => {
  //       this.kindLoadData = 'Error';
  //     },
  //   });
  // }
  loadManagerData(): void {
    this.kindLoadData = 'Wait';

    this.managerDataService.getManagerEmployeeData().subscribe({
      next: (response) => {
        console.log(response);
        if (response && response.length > 0) {
          this.managerEmployeeData = response;
          this.kindLoadData = 'Success'; // אין שגיאה
        } else {
          this.kindLoadData = 'Error';
        }
      },
      error: () => {
        this.kindLoadData = 'Error';
      },
    });
  }
}
