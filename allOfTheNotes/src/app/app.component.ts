import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NotesPageComponent } from './pages/notes-page/notes-page.component';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [RouterOutlet, NotesPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'allOfTheNotes';
}
