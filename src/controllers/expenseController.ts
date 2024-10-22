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

// function getTotalByDateRange(req: Request, res: Response, next: NextFunction) {
    
//     res.json({ message: 'Total by date range not implemented yet' });
// }


// async function getTotalByCategory(req: Request, res: Response, next: NextFunction) {
//     const { category } = req.query;
//     try {
//         //fetch data dari mock api
//         const response = await axios.get(`${API_URL}`);
//         const data = response.data;

//         //filtering berdasarkan kategori
//         const filteredExpense = data.filter((item: any) => item.category === category);

//         //kalkulasikan total
//         const total = filteredExpense.reduce((acc: number, expense: any) => acc + expense.nominal, 0);

//         res.json({ total });
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         res.status(500).json({ message: 'Error fetching data' });
//     }
// }


export {
    getExpense,
    getExpensesById,
    createNewExpense,
    updateExpense,
    deleteExpense,

}
