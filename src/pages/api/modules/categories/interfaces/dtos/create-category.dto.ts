import { Prisma } from "@prisma/client";

export class CreateCategoryDto {
  id?: string;
  name: string;
  icon: string;
  user_id?: string;
}
