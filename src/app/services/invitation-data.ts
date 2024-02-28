import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class InvitationDataService {
  wishlist: any = new BehaviorSubject<any>([]);
  // wishlist$ = this.wishlist.asObservable();
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
    return this.http.get<any[]>(this.server + 'confirmations.json').pipe(
      map((result) => {
        console.log(result);
      })
    );
  }

  getAllRevocations() {
    return this.http.get<any[]>(this.server + 'revocations.json').pipe(
      map((result) => {
        console.log(result);
      })
    );
  }

  postWishlistElement(form: any) {
    this.http
      .put(this.server + 'wishlist/' + `${form.id}.json`, form)
      .subscribe((response) => {
        console.log(response);
      });
  }

  updateWishlistElement(form: any) {
    this.http
      .put(this.server + 'wishlist/' + `${form.id}.json`, form)
      .subscribe((response) => {
        console.log(response);
      });
  }

  getAllWishlistElements() {
    return this.http.get<any[]>(this.server + 'wishlist.json').pipe(
      map((result) => {
        return result;
      })
    );
  }
}
