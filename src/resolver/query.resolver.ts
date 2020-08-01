import { bookData } from '../../data';
import { Book } from '../types/types';

const getBooks = (): Book[] => bookData;

export { getBooks };
