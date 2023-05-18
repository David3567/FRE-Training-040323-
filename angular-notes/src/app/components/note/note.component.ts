import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotesServiceService } from 'src/app/shared/notes-service.service';
import { Note } from 'src/app/note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  myForm: FormGroup;
  formNote: Note;
  selectedNote: Note;
  isDisabled: boolean = true;

  constructor(private formBuilder: FormBuilder, private notesService: NotesServiceService) {

  }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(1)]],
      content: ['', [Validators.required, Validators.minLength(1)]]
    })

    this.notesService.selectedNote$.subscribe(note => {
      this.selectedNote = note;
      this.setFormValues()
    })

    this.myForm.valueChanges.subscribe(value => {
      console.log(value)
      console.log(this.selectedNote)
      if(JSON.stringify(this.selectedNote) !== JSON.stringify(value) && this.myForm.valid) {
        this.isDisabled = false;
      } else {
        this.isDisabled = true;
      }
    })
  }

  setFormValues() {
    if(this.selectedNote) {
      this.myForm.patchValue({
        title: this.selectedNote.title,
        content: this.selectedNote.content
      })
    }
  }

  submitForm() {
    console.log(this.myForm.value)
    this.formNote = this.myForm.value
    this.notesService.addToNote(this.formNote)
  }

}
