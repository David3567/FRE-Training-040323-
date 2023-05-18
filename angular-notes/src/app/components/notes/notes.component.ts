import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/note';
import { NotesServiceService } from 'src/app/shared/notes-service.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  notes: Note[];

  constructor(private notesService: NotesServiceService) {

  }

  ngOnInit(): void {
    this.notes = this.notesService.getNotes();
  }

  deleteNote(note:Note) {
    this.notesService.deleteNote(note)
  }

  editNote(note: Note) {
    console.log('clicked')
    this.notesService.setSelectedNote(note)
  }

  clearNote() {
    this.notesService.setSelectedNote({title: '', content: ''})
  }

}
