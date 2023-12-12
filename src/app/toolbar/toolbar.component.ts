import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MatToolbarModule,MatButtonModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
})
export class ToolbarComponent {

  @Output() showHomeScreenCall = new EventEmitter();
  @Output() showFeedBackScreenCall = new EventEmitter();


  Home(){
    this.showHomeScreenCall.emit(true);
  }

  FeedBack(){
    this.showFeedBackScreenCall.emit(true);
  }

}
