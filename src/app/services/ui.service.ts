import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private edit: boolean = false;
  private subject = new Subject<any>();

  constructor() {}

  toggleEdit(): void {
    this.edit = !this.edit;
    this.subject.next(this.edit);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
