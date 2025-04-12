export type User = {
  id: number;
  name: string;
  email: string;
};

export type UserDetail = User & {
  contact: string;
  createdAt: string;
  profileImageUrl?: string;
};
