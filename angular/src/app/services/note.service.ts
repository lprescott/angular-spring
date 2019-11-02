import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { Note } from '../models/Note';
import {Observable, throwError} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  notesUrl = '/notes';

  constructor(private http: HttpClient) { }

  // Get Notes
  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.notesUrl);
  }

  // Delete Note
  deleteNote(note: Note): Observable<Note> {
    const url = `${this.notesUrl}/${note.id}`;
    return this.http.delete<Note>(url, httpOptions);
  }

  // Add Note
  addNote(note: Note): Observable<Note> {
    return this.http.post<Note>(this.notesUrl, note, httpOptions);
  }

  // Update Note
  updateNote(note: Note): Observable<Note> {
    const url = `${this.notesUrl}/${note.id}`;
    return this.http.put<Note>(url, note, httpOptions);
  }
}
