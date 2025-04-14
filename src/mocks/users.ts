import { faker } from '@faker-js/faker/locale/en';
import type { User, UserDetail } from '../layers/domain/User';

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
  private nextPK: number;

  constructor(private users: UserDetail[]) {
    this.nextPK = users.length + 1;
  }

  getAll() {
    return this.users.slice();
  }

  getOne(userId: number) {
    return this.users.find(({ id }) => id === userId);
  }

  createOne({ name, email }: Omit<User, 'id'>) {
    const newUser: UserDetail = {
      id: this.nextPK,
      name,
      email,
      contact: '',
      createdAt: new Date().toJSON(),
    };

    this.users.push(newUser);
    this.nextPK += 1;

    return newUser;
  }
}

export const mockUserDB = new MockUserDB(randomUsers);
