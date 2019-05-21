var express = require('express');
var router = express.Router();
// 引入mysql数据库连接
var connection = require('./conn')
// 链接数据库
connection.connect(() => {
    console.log('数据库连接成功！')
})
//测试接口
router.post('/login', function (req, res, next) {
    //拿到用户名密码
    let {username, password} = req.body
    //查询数据库
    var querystr = `select * from user where username='${username}' and password='${password}'`
    connection.query(querystr, [username, password], (err, data) => {
        //查找失败
        if (err) throw err;
        //查询成功
        if (data) {
            res.send(data)
        }
    })
})
//获取用户列表
router.get('/user/list', function (req, res, next) {
    //查询数据库
    var querystr = `select * from user`
    connection.query(querystr, (err, data) => {
        //查找失败
        if (err) throw err;
        //查询成功
        if (data) {
            res.send(data)
        }
    })
})

module.exports = router;
