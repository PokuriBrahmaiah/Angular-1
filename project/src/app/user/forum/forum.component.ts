import {Component,OnInit} from '@angular/core';
import {ForumService} from 'src/app/services/forum.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  forumlist: any;
  query: any;
  id: any;
  data: any;

  constructor(private fs: ForumService) {
    this.fs.getForum().subscribe({
      next: (data: any) => this.forumlist = data,
      error: () => this.forumlist = []
    })
  }
  ngOnInit(): void {

  throw new Error('Method not implemented.');
  }

  AddQuestion() {
    var f: any = {
      id: this.forumlist.length + 1,
      question: this.query,
      responses: []
    }
    this.fs.postquery(f).subscribe({
      next: (f: any) => {
        alert("question posted");
        location.reload();
      },
      error: (error) => alert("not posted")
    })
  }
}