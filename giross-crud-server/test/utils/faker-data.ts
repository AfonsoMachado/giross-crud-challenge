import { internet, random, name, phone } from 'faker/locale/pt_BR';

export function generateUser() {
  return {
    name: name.firstName(),
    email: internet.email().toLocaleLowerCase(),
    password: random.alphaNumeric(8),
    gender: name.gender(),
    phone: phone.phoneNumber(),
  };
}
