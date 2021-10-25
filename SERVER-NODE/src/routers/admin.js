const express = require('express')
const connection = require('../db/connection')

const router=new express.Router()


// Post method

router.post('/admin',(req, res)=>{
   //res.send("Center Created")

   // request the body
   const admin = req.body
   
   //request for params
   const {username,password } = req.body
   
    // checking for connection
    
        const sql=`insert into admin values (null, '${username}', '${password}')`
        connection.query(sql, (error, results)=>{
            if(error){
                return res.status(400).send(error)
            }
            admin.id=results.insertId
            res.status(201).send(admin)
        })
    })


 // Put method

router.put('/admin',(req, res)=>{
    const _id=req.params.id
    const {username,password}=req.body
    connection.connect((error)=>{
        if(error){
            return res.status(400).send(error)
        }
        const sql=`update admin set username='${username}', password='${password}' where id=${_id}`
        console.log(sql)
        connection.query(sql, (error, results)=>{
            if(error){
                return res.status(400).send(error)
            }
            res.status(200).send(results)
        })
    })
})




router.post('/adminlogin',(req, res)=>{
    
    const {username,password}=req.body
   
    const sql=`select * from admin where username='${username}' and password='${password}'`
    connection.query(sql, (error, results)=>{
        if(error){
            return res.status(400).send(error)
        }
        if(results.length>0) res.status(200).send(results[0])
        else res.status(400).send({msg : "Incorrect username or password"})
    })
   
})

router.post('/admin-register',(req,res)=>{
    const admin = req.body
    const {full_name, username, password}=req.body

    const sql=`insert into admin values (null, '${full_name}', '${username}', '${password}')`
    
    connection.query(sql, (error, results)=>{
        if(error){
            return res.status(400).send(error)
        }
        admin.id=results.insertId
        res.status(201).send(admin)
    })
})



module.exports = router