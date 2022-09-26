import { CustomerValidator } from "../../validators/CustomerValidator";
import { DefaultValues } from "../../utils/defaultValues";

describe("customerValidator tests", () => {
    test('Should not return errors', () => {
        let customer = DefaultValues.getDefaultCustomer();

        const errors = CustomerValidator.validate(customer);

        expect(errors.length).toEqual(0);
    })

  const invalidFirstname = "q".repeat(51);
  test("Should return firstnameLengthLimit error", () => {
    let customer = DefaultValues.getDefaultCustomer();
    customer.firstname = invalidFirstname;

    const errors = CustomerValidator.validate(customer);

    expect(errors).toContain("Firstname is too long");
  });

  const emptyLastname = "";
  test("Should return lastnameEmpty error", () => {
    let customer = DefaultValues.getDefaultCustomer();
    customer.lastname = emptyLastname;

    const errors = CustomerValidator.validate(customer);

    expect(errors).toContain("Lastname can't be empty");
  });

  const invalidLastname = "q".repeat(51);
  test("Should return lastnameLengthLimit error", () => {
    let customer = DefaultValues.getDefaultCustomer();
    customer.lastname = invalidLastname;

    const errors = CustomerValidator.validate(customer);

    expect(errors).toContain("Lastname is too long");
  });

  const emptyAddress = '';
  test('Should return addressEmpty error', () => {
      let customer = DefaultValues.getDefaultCustomer();
      customer.addresses = emptyAddress;

      const errors = CustomerValidator.validate(customer);

      expect(errors).toContain("Address can't be empty");
  })

    const invalidPhone = 'asdasd';
    test('Should return phoneInvalid error', () => {
        let customer = DefaultValues.getDefaultCustomer();
        customer.phone = invalidPhone;

        const errors = CustomerValidator.validate(customer);

        expect(errors).toContain("Phone number has invalid format");
    })

    const invalidEmail = 'asdasd';
    test('Should return emailInvalid error', () => {
        let customer = DefaultValues.getDefaultCustomer();
        customer.email = invalidEmail;

        const errors = CustomerValidator.validate(customer);

        expect(errors).toContain("Email has invalid format");
    })

    const invalidDate = '2019-10-10';
    test('Should return dateInvalid error', () => {
        let customer = DefaultValues.getDefaultCustomer();
        customer.lastPurchaseDate = new Date(invalidDate);

        const errors = CustomerValidator.validate(customer);

        expect(errors).toContain("Date can't be lower than 2020-1-1");
    })

    const emptyNotes = '';
    test('Should return notesEmpty error', () => {
        let customer = DefaultValues.getDefaultCustomer();
        customer.notes = emptyNotes;

        const errors = CustomerValidator.validate(customer);

        expect(errors).toContain("Notes can't be empty");
    })
});
