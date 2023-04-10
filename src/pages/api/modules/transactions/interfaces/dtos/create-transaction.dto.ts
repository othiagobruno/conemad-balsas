import { TransactionType } from "@prisma/client";

export class CreateTransactionDto {
  title: string;
  is_expense?: boolean;
  paid?: boolean;
  type?: TransactionType;
  date: string | Date;
  installments?: number;
  amount: number;
  category_id: string;
  user_id: string;
}
