export class CustomerValidator {
  static restrictions = {
    nameMaxLength: 50,
    phoneRegex: /^[1-9+]+/,
    emailRegex: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
    dateLowestValue: new Date("2020-1-1"),
  };

  static errorsList = {
    firstnameLengthLimit: "Firstname is too long",
    lastnameLengthLimit: "Lastname is too long",
    lastnameEmpty: "Lastname can't be empty",
    addressEmpty: "Address can't be empty",
    phoneInvalid: "Phone number has invalid format",
    emailInvalid: "Email has invalid format",
    dateInvalid: "Date can't be lower than 2020-1-1",
    notesEmpty: "Notes can't be empty",
  };

  static validate(customer) {
    let errors = [];

    if (
      customer.firstname.length &&
      customer.firstname.length > this.restrictions.nameMaxLength
    ) {
      errors.push(this.errorsList.firstnameLengthLimit);
    }

    if (!customer.lastname) {
      errors.push(this.errorsList.lastnameEmpty);
    }

    if (
      customer.lastname.length &&
      customer.lastname.length > this.restrictions.nameMaxLength
    ) {
      errors.push(this.errorsList.lastnameLengthLimit);
    }

    if (customer.phone && !customer.phone.match(this.restrictions.phoneRegex)) {
      errors.push(this.errorsList.phoneInvalid);
    }

    if (!customer.addresses || customer.addresses.length === 0) {
      errors.push(this.errorsList.addressEmpty);
    }

    if (customer.email && !customer.email.match(this.restrictions.emailRegex)) {
      errors.push(this.errorsList.emailInvalid);
    }

    if (
      customer.lastPurchaseDate !== null &&
      customer.lastPurchaseDate < this.restrictions.dateLowestValue
    ) {
      errors.push(this.errorsList.dateInvalid);
    }

    if (!customer.notes || customer.notes.length === 0) {
      errors.push(this.errorsList.notesEmpty);
    }

    return errors;
  }
}
