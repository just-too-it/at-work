export interface UserDTO {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    city: string;
  };
  phone: string;
  company: {
    name: string;
  };
}
