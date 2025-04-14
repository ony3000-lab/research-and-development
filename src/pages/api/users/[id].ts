import type { NextApiRequest, NextApiResponse } from 'next';
import type { UserDetail } from '@/layers/domain/User';
import { mockUserDB } from '@/mocks/users';

export default function handler(req: NextApiRequest, res: NextApiResponse<UserDetail | null>) {
  const { id } = req.query;
  const user = mockUserDB.getOne(Number(id));

  res.status(200).json(user ?? null);
}
