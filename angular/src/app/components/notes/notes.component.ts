import { Component, OnInit } from '@angular/core';
import { NoteService} from '../../services/note.service';

import { Note } from '../../models/Note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  notes: Note[];

  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.noteService.getNotes().subscribe(notes => {
      this.notes = notes;
    });
  }

  deleteNote(note: Note) {
    // Remove from UI
    this.notes = this.notes.filter(t => t.id !== note.id);

    // Remove from server
    this.noteService.deleteNote(note).subscribe();
  }

  addNote(note: Note) {
    this.noteService.addNote(note).subscribe(note => {
      this.notes.push(note);
    });
  }
}
