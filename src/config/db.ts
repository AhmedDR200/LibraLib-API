import { createConnection } from 'typeorm';
import { User } from '../models/user';
import { Book } from '../models/book';
import { Review } from '../models/review';

export const db = createConnection({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'test',
    entities: [User, Book, Review],
    synchronize: true,
}).then((connection) => {
    console.log('Database connection established');
    return connection;
}
).catch((error) => console.log(error));