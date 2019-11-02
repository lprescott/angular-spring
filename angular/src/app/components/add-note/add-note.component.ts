import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {
  @Output() addNote: EventEmitter<any> = new EventEmitter<any>();

  title: string;
  text: string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    const note = {
      title: this.title,
      text: this.text
    };

    this.addNote.emit(note);
  }
}
