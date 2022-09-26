import { Customer } from "../entities/Customer";
import { Address } from "../entities/Address";

export class DefaultValues {

  static getDefaultCustomer = () => {
    return new Customer(
      "firstname",
      "lastname",
      "addresses",
      "123456789",
      "email@email.com",
      "notes",
      "totalPurchasesAmount",
      "2022-10-10"
    );
  };

  static getDefaultAddress = () => {
    return new Address(
      "addressLine1",
      "addressLine2",
      1,
      "city",
      "123456",
      "state",
      "United States"
    );
  };
}
