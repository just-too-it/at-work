export interface User {
  id: number;
  username: string;
  city: string;
  company: string;
  img: string;
  isActive: boolean;
}

export interface UserProfile extends User {
  name: string;
  email: string;
  phone: string;
}
