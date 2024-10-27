import mysql from 'mysql2';
import { MYSQL_HOST, MYSQL_DB, MYSQL_USER, MYSQL_PASSWORD } from './config';

export default mysql.createPool({
    host: MYSQL_HOST,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_DB
});