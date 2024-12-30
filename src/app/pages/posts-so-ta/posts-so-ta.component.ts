import { Component } from '@angular/core';
import { SourceComponent } from "./components/source/source.component";
import { TargetComponent } from "./components/target/target.component";

@Component({
  selector: 'app-posts-so-ta',
  standalone: true,
  imports: [SourceComponent, TargetComponent],
  templateUrl: './posts-so-ta.component.html',
  styleUrl: './posts-so-ta.component.scss'
})
export class PostsSoTaComponent {

}
