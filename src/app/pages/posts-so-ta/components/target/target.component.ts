import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../../services/post.service';

@Component({
  selector: 'app-target',
  standalone: true,
  imports: [],
  templateUrl: './target.component.html',
  styleUrl: './target.component.scss'
})
export class TargetComponent implements OnInit {
  message = '';

  constructor(private apiService: PostService) {}

  ngOnInit(): void {
    this.apiService.sharedData$.subscribe((data) => {
      this.message = data;
    });
  }
}
