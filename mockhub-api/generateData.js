import { faker } from '@faker-js/faker';
import fs from 'node:fs/promises';

const NUM_USERS = 30;

// Generate users with a real-world schema
const users = Array.from({ length: NUM_USERS }).map((_, i) => ({
  id: i + 1,
  name: faker.person.fullName(),
  username:
    faker.person.firstName().toLowerCase() +
    faker.number.int({ min: 1, max: 99 }),
  email: faker.internet.email(),
  phone: faker.phone.number(),
  address: {
    street: faker.location.streetAddress(),
    city: faker.location.city(),
    zip: faker.location.zipCode(),
    country: faker.location.country(),
  },
  company: faker.company.name(),
  createdAt: faker.date.past().toISOString(),
}));

await fs.writeFile('./data/users.json', JSON.stringify(users, null, 2));

console.log('users.json generated successfully!');
