import { Component, OnInit } from '@angular/core';
import { Coach } from "../../models/coach";
import { CoachService } from "../../services/coach.service";
import { User } from "../../models/user";
import { AuthService } from 'src/app/auth/auth.service';
import { Topic } from 'src/app/models/topic';
import { TopicService } from 'src/app/services/topic.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-coach-list',
  templateUrl: './coach-list.component.html',
  styleUrls: ['./coach-list.component.css']
})
export class CoachListComponent implements OnInit {

  private _coaches: User[];
  private _isAuthenticated: boolean;
  private _userId: string;
  private _topics: Topic[];

  constructor(private coachService: CoachService, private _authService: AuthService,
    private topicService: TopicService, private _formBuilder: FormBuilder) {
  }

  private _filterForm = this._formBuilder.group({
    topic: [""]
  });

  ngOnInit(): void {
    this.getCoaches();
    this._isAuthenticated = this._authService.isAuthenticated();
    this.getCurrentUserId();
    this.getTopics();
  }

  getCoaches(): void {
    this.coachService.getCoaches().subscribe(coaches => this._coaches = coaches);
  }

  getTopics(): void {
    this.topicService.getTopics().subscribe(topics => this._topics = topics);
  }


  get coaches() {
    return this._coaches;
  }

  get topics() {
    return this._topics;
  }

  get filterForm() {
    return this._filterForm;
  }

  get isAuthenticated() {
    return this._isAuthenticated;
  }

  get userId(): string {
    return this._userId;
  }

  getCurrentUserId(): void {
    this._userId = this._authService.getCurrentUserId();
  }

}
