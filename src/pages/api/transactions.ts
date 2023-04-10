import { use, Middleware } from "next-api-route-middleware";
import {
  AuthMiddleware,
  IAuthReq,
} from "./modules/auth/middleware/auth.middleware";
import { CreateTransactionService } from "./modules/transactions/services/create-transaction.service";
import { GetTransactionsService } from "./modules/transactions/services/get-transaction.service";
import { CreateTransactionDto } from "./modules/transactions/interfaces/dtos/create-transaction.dto";
import { DeleteTransactionService } from "./modules/transactions/services/delete-transaction.service";
import { UpdateTransactionService } from "./modules/transactions/services/update-transaction.service";
import { UpdateTransactionDTO } from "./modules/transactions/interfaces/dtos/update-transaction.dto";

const createTransactionService = new CreateTransactionService();
const getTransactionsService = new GetTransactionsService();
const deleteTransactionService = new DeleteTransactionService();
const updateTransactionService = new UpdateTransactionService();

const handler: Middleware<IAuthReq> = async (req, res) => {
  if (req.method === "DELETE") {
    try {
      const { id } = req.query;
      const result = await deleteTransactionService.execute(id as string);
      res.status(200).json(result);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  if (req.method === "PUT") {
    try {
      const { id } = req.query;
      const data = req.body as UpdateTransactionDTO;
      const result = await updateTransactionService.execute(id as string, {
        ...data,
        user_id: req.user.id,
      });
      res.status(200).json(result);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  if (req.method === "GET") {
    try {
      const result = await getTransactionsService.execute(req.user.id);
      res.status(200).json(result);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  if (req.method === "POST") {
    try {
      const data = req.body as CreateTransactionDto;
      const result = await createTransactionService.execute({
        ...data,
        user_id: req.user.id,
      });
      res.status(201).json(result);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
};

export default use(AuthMiddleware(), handler);
