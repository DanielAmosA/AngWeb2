import { Component } from '@angular/core';
import { PostService } from '../../../../services/post.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-source',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './source.component.html',
  styleUrl: './source.component.scss'
})
export class SourceComponent {
  message = '';

  constructor(private apiService: PostService) {}

  sendMessage(): void {
    this.apiService.updateSharedData(this.message);
  }
}
