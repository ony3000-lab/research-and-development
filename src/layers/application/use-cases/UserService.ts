import type { User, UserDetail } from '../../domain/User';
import type { UserRepository } from '../ports/UserRepository';

export class UserService {
  constructor(private userRepository: UserRepository) {}

  getUsers(params?: { search?: string }) {
    return this.userRepository.getUsers(params);
  }

  getUser(id: number) {
    return this.userRepository.getUser(id);
  }

  async createUser(user: Omit<User, 'id' | 'createdAt'>) {
    const isDuplicated = await this.userRepository.checkDuplicateEmail(user.email);
    if (isDuplicated) {
      throw new Error('이미 사용 중인 이메일입니다.');
    }
    await this.userRepository.sendEmailVerification(user.email);
    return this.userRepository.createUser(user);
  }

  updateUser(userDetail: UserDetail) {
    return this.userRepository.updateUser(userDetail);
  }
}
