import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-post-item',
  standalone: true,
  imports: [],
  templateUrl: './post-item.component.html',
  styleUrl: './post-item.component.scss'
})
export class PostItemComponent {
  @Input() post: any;

  @Output() delete = new EventEmitter<number>();

  onDelete(): void {
    // פולט את ID הפוסט בחזרה לאבא
    this.delete.emit(this.post.id);
  }

  @Output() update = new EventEmitter<any>();

  onEdit(): void {
    // עדכון הפרטים (לדוגמה: שינוי הכותרת)
    const updatedPost = { ...this.post, title: this.post.title + ' (Edited)' };
    this.update.emit(updatedPost);
  }
}
