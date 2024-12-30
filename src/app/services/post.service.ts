import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private sharedData = new BehaviorSubject<string>('');
  sharedData$ = this.sharedData.asObservable();

  updateSharedData(data: string): void {
    this.sharedData.next(data);
  }

}
