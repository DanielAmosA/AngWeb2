import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { PostItemComponent } from "../../components/shared/post-item/post-item.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, PostItemComponent,
    RouterLink
  ],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent implements  OnInit {
  posts: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getPosts().subscribe((data) => {
      this.posts = data.slice(0, 5); // הצגת 5 פוסטים ראשונים
    });
  }

  handleDelete(postId: number): void {
    // הסרת הפוסט מהרשימה
    this.posts = this.posts.filter((post) => post.id !== postId);
    console.log('Post deleted:', postId);
  }

  handleUpdate(updatedPost: any): void {
    // עדכון הפוסט ברשימה
    const index = this.posts.findIndex((post) => post.id === updatedPost.id);
    if (index !== -1) {
      this.posts[index] = updatedPost;
      console.log('Post updated:', updatedPost);
    }
  }
}

