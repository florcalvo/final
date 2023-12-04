import { BooksModel } from "./bookMd.js";

export class SearchCt {
    static async searchByTitle(req, res) {
        const { title } = req.query;

        if (!title) {
            return res.status(400).json({ message: "Missing search criteria" });
        }

        const books = await BooksModel.searchByTitle(title);

        if (!books || books.length === 0) {
            return res.status(404).json({ message: "No books found" });
        }

        res.status(200).json(books);
    }
}
