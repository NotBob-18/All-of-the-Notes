import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NotesPageComponent } from './pages/notes-page/notes-page.component';

@Component({
  selector: 'app-root',
<<<<<<< HEAD
  standalone: true, 
=======
  standalone: true,
>>>>>>> 0d1b0de36ba1e69efbd5e17e1b154a2cc827d7c9
  imports: [RouterOutlet, NotesPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'allOfTheNotes';
}