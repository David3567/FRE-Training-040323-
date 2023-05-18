import { Injectable } from '@angular/core';
import { Note } from '../note';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesServiceService {

  selectedNoteSubject: BehaviorSubject<Note> = new BehaviorSubject<Note>({title: '', content: ''});

  get selectedNote$() {
    return this.selectedNoteSubject.asObservable()
  }

  setSelectedNote(note: any) {
    this.selectedNoteSubject.next(note)
  }


  private notes: Note[] = [
    {
      title:  '1',
      content: 'asdfad'
    },
    {
      title: '2',
      content: 'asdffsd'
    }
  ]
  constructor() { }

  getNotes() {
    return this.notes;
  }

  addToNote(note: Note) {
    const existingNoteIndex = this.notes.findIndex(item => item.title === note.title);

  if (existingNoteIndex > -1) {
    this.notes[existingNoteIndex] = note;
  } else {
    this.notes.push(note);
  }
  }

  deleteNote(note: Note) {
    const title = note.title;
    const index = this.notes.findIndex(item => item.title === title)
    if (index > -1) {
      this.notes.splice(index, 1)
    }
  }
}
