import { ChangeDetectorRef, Component, OnChanges, OnInit } from '@angular/core';
import { InvitationDataService } from '../services/invitation-data';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent implements OnInit, OnChanges {
  wishlist: any = [];
  wishlistElements: any;
  numeSelectat = null;
  isSelected = false;
  wishObject: any;
  wishlistElementSent = false;

  constructor(
    private invitationDataService: InvitationDataService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.getAllWishlistElements();
  }

  ngOnChanges() {}

  getAllWishlistElements() {
    this.invitationDataService
      .getAllWishlistElements()
      .subscribe((res: any) => {
        this.wishlist = [...res];
        this.wishlistElements = this.wishlist;
        this.cdr.detectChanges();
      });
  }

  confirmSelection(event: any) {
    this.wishlistElements = [event];
    this.isSelected = true;
    this.wishObject = event;
  }

  newId() {
    return Math.floor(Math.random() * Date.now() * 10000).toString();
  }

  sendElement() {
    this.wishObject.persoana = this.numeSelectat;
    this.wishObject.chosen = true;
    this.invitationDataService.updateWishlistElement(this.wishObject);
    this.wishlistElementSent = true;
    setTimeout(() => {
      this.getAllWishlistElements();
      this.isSelected = false;
      this.wishObject = null;
      this.numeSelectat = null;
    }, 200);

    this.cdr.detectChanges();
  }

  goBack() {
    this.isSelected = false;
    this.wishObject = null;
    this.numeSelectat = null;
    this.wishlistElements = this.wishlist;
    this.cdr.detectChanges();
  }
}
