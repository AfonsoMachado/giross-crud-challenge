import { faker } from '@faker-js/faker/locale/pt_BR';

export function generateUser() {
  return {
    name: faker.name.fullName(),
    email: faker.internet.email().toLocaleLowerCase(),
    password: faker.random.alphaNumeric(8),
    sex: faker.name.sex(),
    phone: faker.phone.number(),
  };
}
