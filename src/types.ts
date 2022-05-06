export interface AuthBody {
  email: string;
  password: string;
  name?: string;
  lastName?: string;
}
export interface CategoryType {
  _id?: string;
  categoryName: string;
  img: string;
}
