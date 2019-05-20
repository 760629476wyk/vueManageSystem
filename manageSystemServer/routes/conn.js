// 引入mysql
const mysql = require('mysql');
// 创建链接
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'personnel',
    useConnectionPooling: true
});
// 暴露mysql
module.exports = connection;
