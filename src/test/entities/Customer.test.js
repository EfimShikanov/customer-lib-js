import { Customer } from "../../entities/Customer";
import {defaultCustomer} from "../../utils/defaultValues";

test("Should be able to create customer", () => {
  let customer = new Customer(
    defaultCustomer.firstname,
    defaultCustomer.lastname,
    defaultCustomer.addresses,
    defaultCustomer.phone,
    defaultCustomer.email,
    defaultCustomer.notes,
    defaultCustomer.totalPurchasesAmount,
    defaultCustomer.lastPurchaseDate
  );

  expect(customer.firstname).toBe(defaultCustomer.firstname);
  expect(customer.lastname).toBe(defaultCustomer.lastname);
  expect(customer.addresses).toBe(defaultCustomer.addresses);
  expect(customer.phone).toBe(defaultCustomer.phone);
  expect(customer.email).toBe(defaultCustomer.email);
  expect(customer.notes).toBe(defaultCustomer.notes);
  expect(customer.totalPurchasesAmount).toBe(
    defaultCustomer.totalPurchasesAmount
  );
  expect(customer.lastPurchaseDate).toStrictEqual(
    new Date(defaultCustomer.lastPurchaseDate)
  );
});
