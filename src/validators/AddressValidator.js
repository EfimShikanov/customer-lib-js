export class AddressValidator {
  static errorsList = {
    addressLine1Empty: "AddressLine1 can't be empty",
    addressLine1LengthLimit: "AddressLine1 is too long",
    addressLine2LengthLimit: "AddressLine2 is too long",
    addressTypeEmpty: "Address type can't be empty",
    addressTypeInvalid: "Address type accepts only 1 (Shipping) or 2 (Billing)",
    cityEmpty: "City can't be empty",
    cityLengthLimit: "City is too long",
    postalCodeEmpty: "Postal code can't be empty",
    postalCodeLengthLimit: "Postal code is too long",
    stateEmpty: "State can't be empty",
    stateLengthLimit: "State is too long",
    countryEmpty: "Country can't be empty",
    countryInvalid: "Country accepts United States or Canada only",
  };

  static restrictions = {
    addressMaxLength: 100,
    cityMaxLength: 50,
    postalCodeMaxLength: 6,
    stateMaxLength: 20,
    addressTypes: [1, 2],
    allowedCountries: ["united states", "canada"],
  };

  static validate(address) {
    let errors = [];

    if (!address.addressLine1) {
      errors.push(this.errorsList.addressLine1Empty);
    }

    if (
      address.addressLine1.length &&
      address.addressLine1.length > this.restrictions.addressMaxLength
    ) {
      errors.push(this.errorsList.addressLine1LengthLimit);
    }

    if (
      address.addressLine2.length &&
      address.addressLine2.length > this.restrictions.addressMaxLength
    ) {
      errors.push(this.errorsList.addressLine2LengthLimit);
    }

    if (
      address.addressLine1.length &&
      address.addressLine1.length > this.restrictions.addressMaxLength
    ) {
      errors.push(this.errorsList.addressLine1LengthLimit);
    }

    if (!address.addressType) {
      errors.push(this.errorsList.addressTypeEmpty);
    }

    if (
      address.addressType &&
      !this.restrictions.addressTypes.includes(address.addressType)
    ) {
      errors.push(this.errorsList.addressTypeInvalid);
    }

    if (!address.city) {
      errors.push(this.errorsList.cityEmpty);
    }

    if (address.city && address.city.length > this.restrictions.cityMaxLength) {
      errors.push(this.errorsList.cityLengthLimit);
    }

    if (!address.postalCode) {
      errors.push(this.errorsList.postalCodeEmpty);
    }

    if (
      address.postalCode &&
      address.postalCode.length > this.restrictions.postalCodeMaxLength
    ) {
      errors.push(this.errorsList.postalCodeLengthLimit);
    }

    if (!address.state) {
      errors.push(this.errorsList.stateEmpty);
    }

    if (
      address.state &&
      address.state.length > this.restrictions.stateMaxLength
    ) {
      errors.push(this.errorsList.stateLengthLimit);
    }

    if (!address.country) {
      errors.push(this.errorsList.countryEmpty);
    }

    if (
      address.country &&
      !this.restrictions.allowedCountries.includes(
        address.country.toLowerCase()
      )
    ) {
      errors.push(this.errorsList.countryInvalid);
    }

    return errors;
  }
}
