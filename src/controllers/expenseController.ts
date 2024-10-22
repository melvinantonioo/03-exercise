import { Response, Request, NextFunction } from "express";
import axios from "axios";

const API_URL = process.env.MOCK_API_URL;

async function getExpense(req: Request, res: Response, next: NextFunction) {
    try {
        const response = await axios.get(`${API_URL}`);
        res.json(response.data)
    } catch (error) {
        res.status(500).json({ message: 'Error Fetching Data' });
        next(error)
    }
}
async function getExpensesById(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        res.json(response.data)
    } catch (error) {
        res.status(500).json({ message: 'Error Fetching Data' });
        next(error)
    }
}

async function createNewExpense(req: Request, res: Response, next: NextFunction) {
    try {
        const newExpense = req.body;
        const response = await axios.post(`${API_URL}`, newExpense);
        res.json(response.data)
    } catch (error) {
        res.status(500).json({ message: 'Error Create New Data' });
        next(error)
    }
}

async function updateExpense(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params
    try {
        const updateExpense = req.body;
        const response = await axios.put(`${API_URL}/${id}`, updateExpense);
        res.json(response.data)
    } catch (error) {
        res.status(500).json({ message: 'Error Update Data' });
        next(error)
    }
}

async function deleteExpense(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        res.json({ message: 'Expense deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Error Delete Data' });
        next(error)
    }
}

function getTotalByDateRange(req: Request, res: Response, next: NextFunction) {
    // Logic untuk menghitung total berdasarkan rentang tanggal
    res.json({ message: 'Total by date range not implemented yet' });
}
function getTotalByCategory(req: Request, res: Response, next: NextFunction) {
    // Logic untuk menghitung total berdasarkan kategori
    res.json({ message: 'Total by category not implemented yet' });
}


export {
    getExpense,
    getExpensesById,
    createNewExpense,
    updateExpense,
    deleteExpense,
    getTotalByDateRange,
    getTotalByCategory
}
