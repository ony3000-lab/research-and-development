type UserBase = {
  id: number;
  objectId: string;
  avatarUrl: string;
  name: string;
  email: string;
  company: string;
};

export type ClientUser = UserBase & {
  createdAt: Date;
  updatedAt: Date;
};

export type ServerUser = UserBase & {
  createdAt: string;
  updatedAt: string;
};
