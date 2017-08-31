import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'; // reactive extensions for javascript
import { Subject } from 'rxjs/subject';

@Injectable()
export class CribsService {

  public newCribSubject = new Subject<any>();
  constructor(private http: Http) { }

  getAllCribs() {
    return this.http.get('data/cribs.json')
      .map(res => res.json());
  }

  addCrib(data) {
    data.image = 'default-crib';
    this.newCribSubject.next(data);
  }
}
