import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms'
import { SelectedItemsService } from 'src/app/selected-items.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent{
  itemsList: string[] = [
    'Changjinhu (2021)',
    'Dune (2021)',
    'Shang-Chi and the Legend of the Ten Rings (2021)',
    'Free Guy (2021)',
    'The Many Saints of Newark (2021)',
    'Finch (2021)',
    'Candyman (2021)',
    'No Time to Die (2021)',
    'Halloween Kills (2021)',
  ]

  reactiveForm: FormGroup;

  constructor(private fb: FormBuilder, private selectedItemsService: SelectedItemsService) {
    this.createForm()
  }

  createForm() {
    const formControls = this.itemsList.map(() => this.fb.control(false));
    this.reactiveForm = this.fb.group({
      selectAll: false,
      items: this.fb.array(formControls)
    })
  }

  onCheckboxChange(index: number) {
    const items = this.reactiveForm.get('items') as FormArray;
    const selectAll = this.reactiveForm.get('selectAll')
    const allSelected = items.value.every((value) => value === true);
    selectAll.patchValue(allSelected, {emitEvent: false})
    console.log(items.at(index).value)
    if(!items.at(index).value) {
      this.selectedItemsService.selectedItems.push(this.itemsList[index])
    } else {
      const itemIndex = this.selectedItemsService.selectedItems.indexOf(this.itemsList[index])
      this.selectedItemsService.selectedItems.splice(itemIndex, 1)
    }
    console.log(this.selectedItemsService.selectedItems)
  }

  onSelectAllChange() {
    const items = this.reactiveForm.get('items') as FormArray;
    const selectAll = this.reactiveForm.get('selectAll').value;
    items.controls.forEach(control => {
      control.patchValue(selectAll, { emitEvent: false });
    });

    console.log(selectAll)

    if(selectAll) {
      this.selectedItemsService.selectedItems.splice(0,this.selectedItemsService.selectedItems.length)
      this.selectedItemsService.selectedItems.push(...this.itemsList)
    } else {
      this.selectedItemsService.selectedItems.splice(0, this.selectedItemsService.selectedItems.length)
    }
    console.log(this.selectedItemsService.selectedItems)
  }



}
