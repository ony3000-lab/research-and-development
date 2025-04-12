import type { User, UserDetail } from '../../domain/User';

export type UserRepository = {
  getUsers(params?: { search?: string }): Promise<User[]>;
  getUser(id: number): Promise<UserDetail>;
  createUser(user: Omit<User, 'id' | 'createdAt'>): Promise<UserDetail>;
  updateUser(userDetail: UserDetail): Promise<UserDetail>;
  checkDuplicateEmail(email: string): Promise<boolean>;
  sendEmailVerification(email: string): Promise<void>;
};
