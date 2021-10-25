const express = require('express')
const connection = require('../db/connection')

const router=new express.Router()


// Post method

router.post('/parents',(req, res)=>{
   //res.send("Center Created")

   // request the body
   const parents = req.body
   console.log(parents)
   //request for params
   const { center_id,parents_profile, description, full_name, email, contact, ID_proof, ID_number, address, country, state, city_or_village, zip_code, profession, username, password } = req.body
   
   
        const sql=`insert into parents values (null,'${center_id}', '${parents_profile}', '${description}', '${full_name}','${email}', '${contact}', '${ID_proof}', '${ID_number}', '${address}', '${country}', '${state}', '${city_or_village}', '${zip_code}', '${profession}', '${username}', '${password}')`
        connection.query(sql, (error, results)=>{
            if(error){
                console.log(error)
                return res.status(400).send(error)
            }
            parents.id=results.insertId
            res.status(201).send(parents)
        })
    })

router.post('/host-register',(req, res)=>{
    const parents = req.body
    const {full_name, email, password}=req.body
    console.log(parents)
    const sql=`insert into parents (full_name, email, password) values ('${full_name}', '${email}','${password}')`
         connection.query(sql, (error, results)=>{
             if(error){
                 console.log(error)
                 return res.status(400).send(error)
                 
             }
             parents.id=results.insertId
             res.status(201).send(parents)
         })
     })
 

router.post('/parentslogin',(req,res)=>{
        const {email, password} = req.body
       
        const sql =`select * from parents where email='${email}' and password='${password}'`
        connection.query(sql, (error,results)=>{
            if(error){
            return res.status(400).send(error)
            }
            if(results.length>0) res.status(200).send(results[0])
            else res.status(400).send({msg :"Incorrect Username or Password"})
        })
       })
// Put method

router.put('/parents/:id',(req, res)=>{
    const _id=req.params.id
    const { center_id, full_name, email, contact, ID_proof, ID_number, address, country, state, city_or_village, zip_code, profession, username} = req.body
   
        const sql=`update parents set center_id='${center_id}', full_name='${full_name}', email='${email}', contact='${contact}', ID_proof='${ID_proof}', ID_number='${ID_number}', address='${address}', country='${country}', state='${state}', city_or_village='${city_or_village}', zip_code='${zip_code}', profession='${profession}', username='${username}' where id=${_id}`
        console.log(sql)
        connection.query(sql, (error, results)=>{
            if(error){
                return res.status(400).send(error)
            }
            res.status(200).send(results)
        })
    })

router.post('/parents-upload', (req,res)=>{
        if(req.files == null){
            return res.status(400).json({msg: "No file uploaded"})
        }
    
        const file = req.files.file;
        const desc = req.body.description;
        const parentId = req.body.parentId
        
    
        file.mv(`${__dirname}/../../uploads/${file.name}`, err=>{
            if(err){
            console.error(err)
            return res.status(500).send(err)
        }
        const sql=`update parents set parents_profile='${file.name}', description='${desc}' where id=${parentId}`
        console.log(sql)
        connection.query(sql, (error,results)=>{
            if(error){
                console.log(error)
                return res.status(400).send(error)
            }
            res.json({fileName : file.name, filePath : `/uploads/${file.name}`})
        })
         
      })
    })
    


// Get method

router.get('/parents',(req, res)=>{
    //const _id=req.params.id
   
        const sql=`select * from parents`
        connection.query(sql, (error, results)=>{
            if(error){
                return res.status(400).send(error)
            }
            res.status(200).send(results)
        })
    })


// Delete method
router.delete('/parents/:id', (req, res)=>{
    const _id=req.params.id
    //res.send(`Delete Center with ID ${_id}`)
    
        const sql = `delete from parents where parents.id = ${_id}`
        connection.query(sql, (error,results) => {
           if(error){
               return res.status(400).send(error)
            }
        res.status(200).send(results)
        
        })
    })



module.exports = router