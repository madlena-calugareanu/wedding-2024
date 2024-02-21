import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class InvitationDataService {
  server =
    'https://personal-2024-65d36-default-rtdb.europe-west1.firebasedatabase.app/';
  constructor(private http: HttpClient) {}

  postInvitationForm(form: any) {
    this.http
      .put(
        form.presence === 'niciuna'
          ? this.server + 'revocations/' + `${form.id}.json`
          : this.server + 'confirmations/' + `${form.id}.json`,
        form
      )
      .subscribe((response) => {
        console.log(response);
      });
  }

  getAllConfirmations() {
    return this.http
      .get<any[]>(
        'https://travel-app-38f5e-default-rtdb.europe-west1.firebasedatabase.app/confirmations.json'
      )
      .pipe(
        map((result) => {
          console.log(result);
        })
      );
  }

  getAllRevocations() {
    return this.http
      .get<any[]>(
        'https://travel-app-38f5e-default-rtdb.europe-west1.firebasedatabase.app/revocations.json'
      )
      .pipe(
        map((result) => {
          console.log(result);
        })
      );
  }
}
