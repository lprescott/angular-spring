import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Note } from '../../models/Note';
import { NoteService} from '../../services/note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  @Input() note: Note;
  @Output() deleteNote: EventEmitter<Note> = new EventEmitter<Note>();
  @Output() updateNote: EventEmitter<Note> = new EventEmitter<Note>();

  title: string;
  text: string;

  constructor(private noteService: NoteService) { }

  ngOnInit() {
  }

  onDelete(note) {
    this.deleteNote.emit(note);
  }

  onSubmit(newId: string, newText: string, newTitle: string) {
    const note = {
      id: Number(newId),
      title: newTitle,
      text: newText
    };

    this.noteService.updateNote(note).subscribe();

  }
}
