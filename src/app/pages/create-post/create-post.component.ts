import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.scss'
})
export class CreatePostComponent {
  title = '';
  body = '';

  constructor(private apiService: ApiService, private router: Router) {}

  createPost(): void {
    const newPost = { title: this.title, body: this.body };
    this.apiService.createPost(newPost).subscribe((response) => {
      console.log('Post created:', response);
      this.router.navigate(['/']); // חזרה לדף הבית
    });
  }
}
