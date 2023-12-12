
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})

export class FeedbackComponent {
  feedbackForm!: FormGroup; // Use non-null assertion operator

  constructor(private fb: FormBuilder) {
    this.feedbackForm = this.fb.group({
      feedbackText: ['', Validators.required]
    });
  }

  composeFeedbackEmail() {
    const subject = 'Feedback';
    const developerEmail = 'developer@example.com';
    const feedbackText = this.feedbackForm?.get('feedbackText')?.value; // Use safe navigation operator (?)

    window.location.href = `mailto:${developerEmail}?subject=${subject}&body=${feedbackText}`;
    this.feedbackForm?.reset();
  }

  goBack() {
    console.log('Going back or hiding feedback component');
  }
}