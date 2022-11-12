import { internet, random, name, phone } from 'faker/locale/pt_BR';

export function generateUser() {
  return {
    name: name.firstName(),
    email: internet.email().toLocaleLowerCase(),
    password: random.alphaNumeric(8),
    sex: name.sex(),
    phone: phone.phoneNumber(),
  };
}
