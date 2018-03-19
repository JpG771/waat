import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

import { AppState } from '../app.service';

@Component({
  styleUrls: [ './create-alarm.component.scss' ],
  templateUrl: './create-alarm.component.html'
})
export class CreateAlarmComponent implements OnInit {
  public alarmForm: FormGroup;

  public get whos(): FormArray{
    return <FormArray> this.alarmForm.get('whos');
  }
  public get wheres(): FormArray{
    return <FormArray> this.alarmForm.get('wheres');
  }

  constructor(private fb: FormBuilder) { }

  public ngOnInit() {
    this.alarmForm = this.fb.group({
      me: this.buildContact(),
      contact: this.buildContact(),
      whos: this.fb.array([ this.buildWho() ]),
      wheres: this.fb.array([ this.buildWhere() ]),
      alarmDate: '',
      alarmTime: ''
    });
  }

  public save() {
    if (this.alarmForm.valid) {
      // TODO : save form
    }
  }
  public cancel() {
    this.resetForm();
  }

  public validateFirstName(): boolean {
    return true;
    // return this.firstName.valid || this.firstName.untouched;
  }
  public validateLastName(): boolean {
    return true;
    // return this.lastName.valid || this.lastName.untouched;
  }

  public addWho() {
    this.whos.push(this.buildWho());
  }
  public addWhere() {
    this.wheres.push(this.buildWhere());
  }

  private resetForm() {
    // TODO : reset all input
  }

  private setDefaultValue() {
    this.alarmForm.patchValue({
      
    });
  }

  private buildContact(): FormGroup {
    return this.fb.group({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    });
  }
  private buildWho(): FormGroup {
    return this.fb.group({
      name: '',
      contactInfo: '',
      age: 0,
      sexe: 'M',
      relationship: 'Friend',
      description: ''
    });
  }
  private buildWhere(): FormGroup {
    return this.fb.group({
      type: 'car',
      startDate: '',
      endDate: '',
      startTime: '',
      endTime: '',
      house: this.fb.group({
        nbFloor: 1,
        color: '',
        houseDescription: '',
        address: '',
        city: '',
      }),
      car: this.fb.group({
        make: '',
        model: '',
        year: '',
        color: '',
        travelFrom: '',
        travelTo: '',
      }),
      business: this.fb.group({
        name: '',
        address: '',
        city: '',
      }),
      forest: this.fb.group({
        name: '',
        entrance: '',
        exit: '',
        address: '',
        city: '',
      }),
      other: this.fb.group({
        description: '',
      }),
    });
  }
}
