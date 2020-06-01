import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DiaryService {

  static releaseUrl = "/api/v2/github/service/getRelease";

  constructor( private http: HttpClient) { }

  getRelease() {
    return this.http.get(DiaryService.releaseUrl);
  }
}
