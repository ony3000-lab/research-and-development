import type { NextApiRequest, NextApiResponse } from 'next';
import type { User } from '@/layers/domain/User';
import { mockUserDB } from '@/mocks/users';

export default function handler(req: NextApiRequest, res: NextApiResponse<User[]>) {
  const { search } = req.query;
  const users = mockUserDB
    .getAll()
    .filter(({ name, email }) => {
      if (typeof search !== 'string') {
        return true;
      }

      return (
        name.toLowerCase().includes(search.toLowerCase()) ||
        email.toLowerCase().includes(search.toLowerCase())
      );
    })
    .map<User>(({ id, name, email }) => ({ id, name, email }));

  res.status(200).json(users);
}
