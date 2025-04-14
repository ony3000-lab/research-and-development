import { faker } from '@faker-js/faker/locale/en';
import type { UserDetail } from '../layers/domain/User';

const nowAsMilliseconds = Date.now();

const oneDayAsMilliseconds = 86400000;

const randomUsers = [...Array(15)].map<UserDetail>((_, index) => {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();

  return {
    id: index + 1,
    name: firstName,
    email: faker.internet.exampleEmail(firstName, lastName),
    contact: faker.phone.number(),
    createdAt: new Date(nowAsMilliseconds + oneDayAsMilliseconds * index).toJSON(),
    profileImageUrl: faker.internet.avatar(),
  };
});

class MockUserDB {
  constructor(private users: UserDetail[]) {}

  getAll() {
    return this.users.slice();
  }

  getOne(userId: number) {
    return this.users.find(({ id }) => id === userId);
  }
}

export const mockUserDB = new MockUserDB(randomUsers);
