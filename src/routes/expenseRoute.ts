import { Router } from "express";
import {
    getExpense,
    getExpensesById,
    createNewExpense,
    updateExpense,
    deleteExpense,
    getTotalByDateRange,
    getTotalByCategory
} from '../controllers/expenseController';

const router = Router();

router.get('/', getExpense);
router.get('/:id', getExpensesById);
router.post('/', createNewExpense);
router.put('/:id', updateExpense);
router.delete('/:id', deleteExpense);
router.get('/total/date-range', getTotalByDateRange);
router.get('/total/category', getTotalByCategory);

export default router;