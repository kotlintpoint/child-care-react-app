const express = require('express')
const connection = require('../db/connection')

const router=new express.Router()

router.post('/centerfacility',(req, res)=>{
    //res.send("facility Created")
    const centerfacility = req.body
    const {center_id, facility, description} = req.body
         console.log(centerfacility)
        const sql =`insert into centerfacility values (null ,'${center_id}', '${facility}','${description}')`
        connection.query(sql, (error,results) =>{
            if(error){
                return res.status(400).send(error)
            }
            centerfacility.id = results.insertId
            res.status(201).send(centerfacility)
        })
    })


router.get('/centerfacility/:id',(req, res)=>{
    const _id=req.params.id
       var sql=`SELECT f.id, f.facility, f.description, c.name FROM center c, centerfacility f  WHERE f.center_id=c.id `
       if(_id!=-1){
           sql += `and c.id=${_id}`
       }
        connection.query(sql, (error, results)=>{
            if(error){
                return res.status(400).send(error)
            }
            res.status(200).send(results)
        })
    })


router.put('/centerfacility/:id',(req, res)=>{
    const _id=req.params.id
    //res.send(`facility Details Update with ID ${_id}`)
    const {center_id, facility, description} = req.body
   
        const sql =`update centerfacility set center_id='${center_id}', facility='${facility}', description='${description}'  where id=${_id}`
        connection.query(sql, (error,results) =>{
            if(error){
                return res.status(400).send(error)
            }
            res.status(200).send(results)
        })
    })





router.delete('/centerfacility/:id', (req, res)=>{
    const _id=req.params.id
    //res.send(`Delete facility with ID ${_id}`)
   
        const sql = `delete from centerfacility where centerfacility.id = ${_id}`
        connection.query(sql, (error,results) => {
           if(error){
               return res.status(400).send(error)
            }
        res.status(200).send(results)
        
        })
    })



module.exports = router