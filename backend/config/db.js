import 'dotenv/config';
import sql from 'mssql';

const config = {
    user : process.env.USER,
    password : process.env.PASSWORD,
    server: process.env.SERVER,
    database: process.env.DATABASE,
    options: {
        encrypt: process.env.ENCRYPT === 'true',
        trustServerCertificate: process.env.TRUST_SERVER_CERTIFICATE === 'true',
        enableArithAbort: true
    }
};

export const poolPromise = new sql.ConnectionPool(config)
.connect()
.then(pool => {
    console.log('Connected to Azure DB');
    return pool;
})
.catch(err => {
    console.log('Error connecting to Azure DB : ' , err);
});