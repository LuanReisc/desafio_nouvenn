const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;

router.get('/', (req, res, next) =>{
    mysql.getConnection((error,conn) =>
    {
        if(error){
            return res.status(500).send({error:error})
        }
        conn.query('SELECT * FROM book',
        (error, result, fields) =>
        {
            conn.release();
            if(error)
            {
                return res.status(500).send({
                    error:error
                })

            }
            return res.status(200).send({response:result})

        });
    })
});

router.post('/', (req,res,next) => {
    
    mysql.getConnection((error, conn)=>
    {
        if(error){return res.status(500).send({error:error})}
        conn.query('INSERT INTO book(name, id_user_owner) VALUES(?,?)',
        [req.body.name, req.body.id_user_owner] ,
        (error, result, field) =>
        {
                conn.release();
                if(error){return res.status(500).send({error:error})}
                return res.status(200).send({response: result})
               
        });
    })

       
    
} );

module.exports = router;