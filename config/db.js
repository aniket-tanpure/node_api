import mysql from 'mysql2';

const mysqlpool = mysql.createPool({

    host: 'localhost',
    user: 'root',
    password: '',
    database: 'job_portal',

});

export default mysqlpool