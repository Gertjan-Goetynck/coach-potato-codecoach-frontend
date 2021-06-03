import { Component, OnInit } from '@angular/core';
import {User} from "../../models/user";
import {CoachService} from "../../services/coach.service";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-coach-information',
  templateUrl: './edit-coach-information.component.html',
  styleUrls: ['./edit-coach-information.component.css']
})
export class EditCoachInformationComponent implements OnInit {

  private _coach: User;

  constructor(private _coachService: CoachService, private _activatedRoute: ActivatedRoute, private _formBuilder: FormBuilder) { }

  private _editCoachInformationForm;

  ngOnInit(): void {
    this.getCoach();
  }

  get coach(): User {
    return this._coach;
  }

  getCoach() {
    this._coachService.getCoachById(this._activatedRoute.snapshot.params.id).subscribe(user => {
      this._coach = user;
      this.initialiseEditProfileForm();
    });
  }

  initialiseEditProfileForm(){
    this._editCoachInformationForm = this._formBuilder.group({
      availability: [this._coach.coachProfile.availability],
      introduction: [this._coach.coachProfile.introduction]
    })
  }

  editCoachInformation(){
    this._coachService.editCoachProfileInformation(this._activatedRoute.snapshot.params.id, this._editCoachInformationForm.value);
  }

}
