import type { User, UserDetail } from '../../domain/User';
import type { UserRepository } from '../../application/ports/UserRepository';
import { api } from './base';

export const userApi: UserRepository = {
  async getUsers(params) {
    const res = await api.get<User[]>('/users', {
      params,
    });
    return res.data;
  },
  async getUser(id) {
    const res = await api.get<UserDetail>(`/users/${id}`);
    return res.data;
  },
  async createUser(user) {
    const res = await api.post<UserDetail>('/users', user);
    return res.data;
  },
  async updateUser(userDetail) {
    const res = await api.patch(`/users/${userDetail.id}`, userDetail);
    return res.data;
  },
  async checkDuplicateEmail(email: string) {
    const res = await api.get<{ isDuplicated: boolean }>('/users/check-duplicate', {
      params: { email },
    });
    return res.data.isDuplicated;
  },
  async sendEmailVerification(email: string) {
    await api.post('/users/send-verification', { email });
  },
};
