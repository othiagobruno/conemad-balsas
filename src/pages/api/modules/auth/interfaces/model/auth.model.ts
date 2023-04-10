import { User } from "@prisma/client";

export interface IAuth {
  access_token: string;
  user: User;
}
