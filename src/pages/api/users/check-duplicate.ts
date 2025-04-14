import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ isDuplicated: boolean }>,
) {
  res.status(200).json({ isDuplicated: false });
}
