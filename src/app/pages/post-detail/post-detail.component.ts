import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.scss'
})
export class PostDetailComponent implements OnInit {
  post: any;
  postId: number | null = null;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    // קבלת הפרמטר מה-URL
    this.route.paramMap.subscribe((params) => {
      this.postId = Number(params.get('id'));

      // קריאה ל-API כדי לקבל את הפוסט לפי ID
      if (this.postId) {
        this.apiService.getPostById(this.postId).subscribe((data) => {
          this.post = data;
        });
      }
    });

      // קבלת Query Parameters
    this.route.queryParamMap.subscribe((queryParams) => {
      console.log('Query Params:', queryParams.get('source'));
    });
  }

}
