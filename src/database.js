import mysql from 'mysql2/promise';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'my-secret-pw',
  database: 'buy_and_sell',
  port: 3306
});

export const db = {
    connect: async () => {
        try {
            await connection;
            console.log('Connected to the MySQL database.');
        } catch (err) {
            console.error('Error connecting to the database:', err);
            throw err;
        }
    },
    query: async (queryString, params) => {
        const conn = await connection;
        return conn.query(queryString, params);
    },
    close: () => {
        connection.end((err) => {
            if (err) {
                console.error('Error closing the database connection:', err);
                return;
            }
            console.log('Database connection closed.');
        });
    }       
}