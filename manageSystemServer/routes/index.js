var express = require('express');
var router = express.Router();

//测试接口
router.post('/login',function (req, res, next) {
    return res.json({
        code:0,
        data: 'test success!'
    })
})

module.exports = router;
