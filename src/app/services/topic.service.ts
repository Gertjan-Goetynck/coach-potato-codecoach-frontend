import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Topic } from '../models/topic';

@Injectable({
  providedIn: 'root'
})
export class TopicService {
  private _topicUrl: string;


  constructor(private _http: HttpClient) {
    this._topicUrl = `${environment.backendUrl}/topics`;
  }

  getTopics(): Observable<Topic[]> {
    return this._http.get<Topic[]>(this._topicUrl);
  }
}
