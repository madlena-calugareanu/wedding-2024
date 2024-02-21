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
  ];

  constructor(private invitationDataService: InvitationDataService) {}

  ngOnInit() {}

  log(value: object[]): void {
    console.log(value);
  }

  newId() {
    return (Math.random() * Date.now() * 10000).toString();
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
    };
    console.log('🚀 ~ confirmationForm:', confirmationForm);

    if (
      (this.name === null ||
        this.plusOne === null ||
        drinkOptions.length == 0 ||
        this.accomodation === null ||
        this.allergies === null) &&
      this.presence !== 'niciuna'
    ) {
      this.showMandatoryFields = true;
    } else {
      this.invitationDataService.postInvitationForm(confirmationForm);
      this.showMandatoryFields = false;
      this.formSent = true;
    }
  }
}
