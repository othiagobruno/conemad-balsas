import { Prisma, TransactionType } from "@prisma/client";

export class CreateTransactionDto {
  id?: string | undefined;
  name: string;
  is_expense?: boolean | undefined;
  paid?: boolean | undefined;
  type?: TransactionType | undefined;
  date: string | Date;
  installments?: number | undefined;
  createdAt?: string | Date | undefined;
  updatedAt?: string | Date | undefined;
  user: Prisma.UserCreateNestedOneWithoutTransactionsInput;
  category: Prisma.CategoryCreateNestedOneWithoutTransactionsInput;
  amount: number;
  title: string;
}
