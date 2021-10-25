
const express = require('express')
const connection = require('../db/connection')

const router = new express.Router()

router.post('/feedback', (req,res) =>{
 const _feedback = req.body
 const { center_id, parent_id, feedback, ratings, Stars} = req.body
     
     const sql =`insert into feedback values (null ,'${center_id}','${parent_id}','${feedback}','${ratings}', '${Stars}')`
     connection.query(sql, (error,results)=>{
      if(error){
          console.log(error)
          return res.status(400).send(error)
      }   
      _feedback.id = results.insertId
      res.status(201).send(_feedback)
     })
   })

router.get('/feedback/:id', (req,res)=>{
    const _id=req.params.id
        
        var sql=`select f.id, f.feedback, f.ratings, f.Stars, p.full_name, p.parents_profile, p.description from parents p , feedback f where f.parent_id=p.id`
        if(_id!=-1){
            sql += ` and f.center_id=${_id}`
        }
        console.log(sql)
        connection.query(sql, (error, results)=>{
            if(error){
                return res.status(400).send(error)
            }
            res.status(200).send(results)
        })
    })


router.put('/feedback/:id', (req,res) =>{
    const _id=req.params.id
    const {parent_id,feedback, ratings, Stars}=req.body
    
        const sql=`update feedback set parent_id='${parent_id}', feedback='${feedback}', ratings='${ratings}', Stars='${Stars}'  where id=${_id}`

        connection.query(sql, (error, results)=>{
            if(error){
                return res.status(400).send(error)
            }
            res.status(200).send(results)
        })
    })


router.delete('/feedback/:id', (req,res)=>{
    const _id=req.params.id
    
        const sql = `delete from feedback where feedback.id = ${_id}`
        connection.query(sql, (error,results) => {
           if(error){
               return res.status(400).send(error)
            }
        res.status(200).send(results)
        
        })
    })


module.exports = router

