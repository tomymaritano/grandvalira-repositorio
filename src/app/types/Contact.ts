export type Contact = {
  id: string;
  name: string;
  email: string;
  status: 'ACTIVE' | 'BANNED';
  phone?: string;
  photoUrl?: string;
  createdAt?: string;
  updatedAt?: string;
};