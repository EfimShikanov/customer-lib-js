import { Person } from "./Person";

export class Customer extends Person {
  constructor(
    firstname,
    lastname,
    addresses,
    phone,
    email,
    notes,
    totalPurchasesAmount,
    lastPurchaseDate
  ) {
    super(firstname, lastname);
    this.addresses = addresses;
    this.phone = phone;
    this.email = email;
    this.notes = notes;
    this.totalPurchasesAmount = totalPurchasesAmount.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    this.lastPurchaseDate = new Date(lastPurchaseDate);
  }
}
