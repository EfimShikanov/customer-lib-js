import { Address } from "../../entities/Address";
import {defaultAddress} from "../../utils/defaultValues";


test("Should be able to create address", () => {
  let address = new Address(
    defaultAddress.addressLine1,
    defaultAddress.addressLine2,
    defaultAddress.addressType,
    defaultAddress.city,
    defaultAddress.postalCode,
    defaultAddress.state,
    defaultAddress.country
  );
  expect(address.addressLine1).toBe(defaultAddress.addressLine1);
  expect(address.addressLine2).toBe(defaultAddress.addressLine2);
  expect(address.addressType).toBe(defaultAddress.addressType);
  expect(address.city).toBe(defaultAddress.city);
  expect(address.postalCode).toBe(defaultAddress.postalCode);
  expect(address.state).toBe(defaultAddress.state);
  expect(address.country).toBe(defaultAddress.country);
});
