interface book {
    title: string;
    author: string;
}
declare const bookInfo: () => book[];
export { bookInfo };
