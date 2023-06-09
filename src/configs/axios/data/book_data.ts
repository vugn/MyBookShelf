import axios from 'axios'
import { BookModel } from '../../../models/BookModel'

export default {
    getBooksData: () =>
    axios<BookModel[]>({
        'method':'GET',
        'url':'https://643e8199c72fda4a0bf883df.mockapi.io/api/v1/books',
    })
}
