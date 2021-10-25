const express = require('express')
const connection = require('../db/connection')

const router = new express.Router()

router.post('/children', (req,res)=>{
    const children = req.body
    const {center_id, parent_id, firstname, middlename, lastname, age} = req.body
    
        const sql=`insert into children values (null , '${center_id}','${parent_id}', '${firstname}','${middlename}', '${lastname}', '${age}')`
        connection.query(sql, (error, results)=>{
            if(error){
                console.log(error)
                return res.status(400).send(error)
            }
            children.id=results.insertId
            res.status(201).send(children)
        })
    })


router.get('/children/:id', (req,res)=>{
    const _id=req.params.id
        var sql=`Select c.id, c.center_id, c.firstname, c.middlename, c.lastname,c.age, p.address, p.city_or_village, p.contact, p.email,p.parents_profile, p.description, p.full_name, p.username,  p.ID_proof, p.ID_number, p.profession, p.country, p.state,p.zip_code  FROM children c, parents p
        where c.parent_id=p.id `
        if(_id!=-1){
       sql += `and c.center_id=${_id}`
        }
        console.log(sql)
        connection.query(sql, (error, results)=>{
            if(error){
                return res.status(400).send(error)
            }
            res.status(200).send(results)
        })
    })



router.put('/children/:id', (req,res) =>{
    const _id=req.params.id
    const {center_id , parent_id,firstname, middlename, lastname, age}=req.body
    
        const sql=`update children set center_id='${center_id} ', parent_id='${parent_id}', firstname='${firstname}', middlename='${middlename}', lastname='${lastname}', age='${age}' where id=${_id}`

        connection.query(sql, (error, results)=>{
            if(error){
                return res.status(400).send(error)
            }
            res.status(200).send(results)
        })
    })


router.delete('/children/:id', (req,res)=>{
    const _id=req.params.id

    const Sql= `delete from parents where id=(select parent_id from children where id=${_id})`
    connection.query(Sql, (error,results) => {
       if(error){
           return res.status(400).send(error)
       }
    // res.status(200).send(results)
    const sql = `delete from children where children.id = ${_id}`
        connection.query(sql, (error,results) => {
           if(error){
               return res.status(400).send(error)
            }
        res.status(200).send(results)
        
        })
    
    })
    
        

       
    })


module.exports = router