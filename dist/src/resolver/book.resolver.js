"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookInfo = void 0;
const data_1 = require("../../data");
const info = () => 'Apollo GraphQL Server';
const resolvers = {
    Query: {
        books: () => data_1.books,
    },
};
const bookInfo = () => data_1.books;
exports.bookInfo = bookInfo;
//# sourceMappingURL=book.resolver.js.map