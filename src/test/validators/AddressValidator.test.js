import { AddressValidator } from "../../validators/AddressValidator";
import { DefaultValues } from "../../utils/defaultValues";

describe("AddressValidator tests", () => {
  test("Should not return errors", () => {
    let address = DefaultValues.getDefaultAddress();

    const errors = AddressValidator.validate(address);

    expect(errors.length).toEqual(0);
  });

  const countryValidValues = [
    "United States",
    "united states",
    "Canada",
    "canada",
  ];
  test.each(countryValidValues)(
    "Should not return country errors",
    (country) => {
      let address = DefaultValues.getDefaultAddress();
      address.country = country;

      const errors = AddressValidator.validate(address);

      expect(errors.length).toEqual(0);
    }
  );

  const invalidAddressLine1 = "q".repeat(101);
  test("Should return addressLine1LengthLimit error", () => {
    let address = DefaultValues.getDefaultAddress();
    address.addressLine1 = invalidAddressLine1;

    const errors = AddressValidator.validate(address);

    expect(errors).toContain("AddressLine1 is too long");
  });

  const emptyAddressLine1 = "";
  test("Should return addressLine1Empty error", () => {
    let address = DefaultValues.getDefaultAddress();
    address.addressLine1 = emptyAddressLine1;

    const errors = AddressValidator.validate(address);

    expect(errors).toContain("AddressLine1 can't be empty");
  });

  const invalidAddressLine2 = "q".repeat(101);
  test("Should return addressLine2LengthLimit error", () => {
    let address = DefaultValues.getDefaultAddress();
    address.addressLine2 = invalidAddressLine2;

    const errors = AddressValidator.validate(address);

    expect(errors).toContain("AddressLine2 is too long");
  });

  const emptyAddressType = "";
  test("Should return addressTypeEmpty error", () => {
    let address = DefaultValues.getDefaultAddress();
    address.addressType = emptyAddressType;

    const errors = AddressValidator.validate(address);

    expect(errors).toContain("Address type can't be empty");
  });

  const invalidAddressType = 3;
  test("Should return addressTypeInvalid error", () => {
    let address = DefaultValues.getDefaultAddress();
    address.addressType = invalidAddressType;

    const errors = AddressValidator.validate(address);

    expect(errors).toContain(
      "Address type accepts only 1 (Shipping) or 2 (Billing)"
    );
  });

  const emptyCity = "";
  test("Should return cityEmpty error", () => {
    let address = DefaultValues.getDefaultAddress();
    address.city = emptyCity;

    const errors = AddressValidator.validate(address);

    expect(errors).toContain("City can't be empty");
  });

  const invalidCity = "q".repeat(51);
  test("Should return cityLengthLimit error", () => {
    let address = DefaultValues.getDefaultAddress();
    address.city = invalidCity;

    const errors = AddressValidator.validate(address);

    expect(errors).toContain("City is too long");
  });

  const emptyPostalCode = "";
  test("Should return postalCodeEmpty error", () => {
    let address = DefaultValues.getDefaultAddress();
    address.postalCode = emptyPostalCode;

    const errors = AddressValidator.validate(address);

    expect(errors).toContain("Postal code can't be empty");
  });

  const invalidPostalCode = "1".repeat(7);
  test("Should return postalCodeLengthLimit error", () => {
    let address = DefaultValues.getDefaultAddress();
    address.postalCode = invalidPostalCode;

    const errors = AddressValidator.validate(address);

    expect(errors).toContain("Postal code is too long");
  });

  const emptyState = "";
  test("Should return stateEmpty error", () => {
    let address = DefaultValues.getDefaultAddress();
    address.state = emptyState;

    const errors = AddressValidator.validate(address);

    expect(errors).toContain("State can't be empty");
  });

  const invalidState = "q".repeat(21);
  test("Should return stateLengthLimit error", () => {
    let address = DefaultValues.getDefaultAddress();
    address.state = invalidState;

    const errors = AddressValidator.validate(address);

    expect(errors).toContain("State is too long");
  });

  const emptyCountry = "";
  test("Should return countryEmpty error", () => {
    let address = DefaultValues.getDefaultAddress();
    address.country = emptyCountry;

    const errors = AddressValidator.validate(address);

    expect(errors).toContain("Country can't be empty");
  });

  const invalidCountry = "asdasd";
  test("Should return countryInvalid error", () => {
    let address = DefaultValues.getDefaultAddress();
    address.country = invalidCountry;

    const errors = AddressValidator.validate(address);

    expect(errors).toContain("Country accepts United States or Canada only");
  });
});
