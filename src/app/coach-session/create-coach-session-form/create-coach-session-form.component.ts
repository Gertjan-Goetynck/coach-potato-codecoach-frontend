import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { CoachingSessionService } from "../../services/coaching-session.service";
import { AuthService } from "../../auth/auth.service";
import { NgbDate } from "@ng-bootstrap/ng-bootstrap";
import { CoachService } from "../../services/coach.service";

@Component({
  selector: 'app-create-coach-session-form',
  templateUrl: './create-coach-session-form.component.html',
  styleUrls: ['./create-coach-session-form.component.css']
})
export class CreateCoachSessionFormComponent implements OnInit {

  private _coach;

  public today = { year: new Date().getFullYear(), month: new Date().getMonth() + 1, day: new Date().getDate() };

  constructor(private _formBuilder: FormBuilder, private _coachSessionService: CoachingSessionService,
    private _authService: AuthService, private _coachService: CoachService,
    private _activatedRoute: ActivatedRoute, private _router: Router) {
  }

  private _requestSessionForm = this._formBuilder.group({
    topicId: ['', Validators.required],
    date: ['', Validators.required],
    time: ['', Validators.required],
    location: ['', Validators.required],
    remarks: ['']
  })

  ngOnInit(): void {
    this.getCoach();
    this._requestSessionForm.patchValue({
      date: this.today
    })
  }

  onSubmit(): void {

    this._coachSessionService.organiseCoachSession({
      ...this._requestSessionForm.value,
      coacheeId: this._authService.getCurrentUserId(),
      coachId: this._activatedRoute.snapshot.params.id,
      time: `${('0' + this._requestSessionForm.value.time.hour).slice(-2)}:${('0' + this._requestSessionForm.value.time.minute).slice(-2)}:${('0' + this._requestSessionForm.value.time.second).slice(-2)}`,

      date: `${this._requestSessionForm.value.date.year}-${('0' + this._requestSessionForm.value.date.month).slice(-2)}-${('0' + this._requestSessionForm.value.date.day).slice(-2)}`

    }).subscribe(coachSession => {
      this._router.navigate([`/users/${this._authService.getCurrentUserId()}`])
    })
  }

  get requestSessionForm() {
    return this._requestSessionForm;
  }

  getCoach() {
    this._coachService.getCoachById(this._activatedRoute.snapshot.params.id).subscribe(coach => {
      this._coach = coach;
      this._requestSessionForm.patchValue({
        topicId: this.coach.coachProfile.coachTopics[0].topic.id
      })
    });
  }

  get coach() {
    return this._coach;
  }
}
