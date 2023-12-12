import { Component, ViewChild } from '@angular/core';
import { FeedbackComponent } from './feedback/feedback.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Movie';
  showFeedback = false;
  showHome = true;
  @ViewChild('toolbar') ToolbarComponent!: ToolbarComponent;

  composeFeedbackEmail() {
    const subject = 'Feedback';
    const developerEmail = 'developer@example.com';

    // Use window.location.href for opening the default email client
    window.location.href = `mailto:${developerEmail}?subject=${subject}`;
  }

  toggleFeedback() {
    this.showFeedback = !this.showFeedback;
  }

  showFeedBackScreenCall(event:any):void{
    this.showFeedback = true;
    this.showHome = false;
  }

  showHomeScreenCall(event:any):void{
    this.showHome = true;
    this.showFeedback = false;
  }
}
