import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FeedbackService } from 'src/app/services/feedback.service';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.css']
})
export class FeedbacksComponent {
  feedbacks:any
  
  
        constructor(private fs:FeedbackService, public dialog: MatDialog)  {
           this.fs.getFeedbacks().subscribe(
              {
                  next : (data:any)=> this.feedbacks =data
              }
           )
        }

        openDialog() {
          this.dialog.open(FeedbackFormComponent)
        }
}