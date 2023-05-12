import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-responsesbox',
  templateUrl: './responsesbox.component.html',
  styleUrls: ['./responsesbox.component.css']
})
export class ResponsesboxComponent {

  @Input() q:any;
}
