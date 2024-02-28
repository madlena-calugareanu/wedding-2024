import { Component } from '@angular/core';
import { InvitationDataService } from '../services/invitation-data';

interface ConfirmationObject {
  name: string;
  plusOne: string;
  presence: string[];
  drinks: string[];
  accomodation: boolean;
  allergies: string;
}

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
})
export class ConfirmationComponent {
  presence = 'niciuna';
  name = null;
  plusOne = null;
  drinks = null;
  accomodation = null;
  allergies = null;
  showMandatoryFields = false;
  formSent: boolean = false;
  detailsAllergies = null;
  moreDrinks = null;
  drinkCheckOptions = [
    {
      label: 'Vin',
      value: 'vin',
      checked: true,
    },
    { label: 'Rom', value: 'rom' },
    { label: 'Bere', value: 'bere' },
    { label: 'Sampanie', value: 'sampanie' },
    { label: 'Gin', value: 'gin' },
    { label: 'Altceva', value: 'altceva' },
  ];

  altcevaActive = false;

  constructor(private invitationDataService: InvitationDataService) {}

  ngOnInit() {}

  log(value: object[]): void {
    console.log(value);
  }

  newId() {
    return (Math.random() * Date.now() * 10000).toString();
  }

  drinkChecked(drink: any) {
    let altceva = drink.filter((el: any) => el.label === 'Altceva');

    if (altceva[0].checked === true) {
      this.altcevaActive = true;
    }
  }

  sendConfirmation() {
    let drinkOptions: any[] = [];
    for (let drink of this.drinkCheckOptions) {
      drink.checked ? drinkOptions.push(drink.value) : null;
    }

    let confirmationForm = {
      id: this.newId(),
      presence: this.presence,
      name: this.name,
      plusOne: this.plusOne,
      drinks: drinkOptions,
      accomodation: this.accomodation,
      allergies: this.allergies,
      detailsAllergies: this.detailsAllergies,
      detailsDrinks: this.moreDrinks,
    };

    if (
      (this.name === null ||
        this.plusOne === null ||
        drinkOptions.length == 0 ||
        this.accomodation === null ||
        this.allergies === null) &&
      this.presence !== 'niciuna'
    ) {
      this.showMandatoryFields = true;
    } else if (this.name === null && this.presence == 'niciuna') {
      this.showMandatoryFields = true;
    } else {
      this.invitationDataService.postInvitationForm(confirmationForm);
      this.showMandatoryFields = false;
      this.formSent = true;
    }
  }
}
