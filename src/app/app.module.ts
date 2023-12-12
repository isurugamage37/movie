import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

import { AppComponent } from './app.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { MovieService } from './movie.service'; // Make sure to import your service
import { MovieItemComponent } from './movie-item/movie-item.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms'; 
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from "./toolbar/toolbar.component";


@NgModule({
    declarations: [
        AppComponent,
        MovieSearchComponent,
        MovieDetailsComponent,
        FeedbackComponent,
        MovieItemComponent
    ],
    providers: [MovieService],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule,
        MatToolbarModule,
        MatButtonModule,
        BrowserAnimationsModule,
        ToolbarComponent
    ]
})
export class AppModule { }