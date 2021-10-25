const express = require('express')
const connection = require('../db/connection')


const router=new express.Router()


// Post method

router.post('/gallery',(req, res)=>{
   //res.send("Center Created")

   // request the body
   const gallery = req.body
   
   //request for params
   const {center_id,image,description} = req.body
   
    // checking for connection
        console.log(gallery)
        const sql=`insert into gallery values (null,'${center_id}', '${image}','${description}')`
        connection.query(sql, (error, results)=>{
            if(error){
                return res.status(400).send(error)
            }
            gallery.id=results.insertId
            res.status(201).send(gallery)
        })
    })

router.post('/upload', (req,res)=>{
    if(req.files == null){
        return res.status(400).json({msg: "No file uploaded"})
    }

    const file = req.files.file;
    const desc = req.body.description;
    const centerId = req.body.centerId;

    file.mv(`${__dirname}/../../uploads/${file.name}`, err=>{
        if(err){
        console.error(err)
        return res.status(500).send(err)
    }
    const sql=`insert into gallery values(null, ${centerId}, '${file.name}','${desc}')`
    connection.query(sql, (error,results)=>{
        if(error){
            return res.status(400).send(error)
        }
        res.json({fileName : file.name, filePath : `/uploads/${file.name}`})
    })
     
  })
})

// Put method

router.put('/gallery/:id',(req, res)=>{
    const _id=req.params.id
    const {center_id,image,description}=req.body
   
        const sql=`update gallery set center_id='${center_id}', image='${image}', description='${description}' where id=${_id}`
        console.log(sql)
        connection.query(sql, (error, results)=>{
            if(error){
                return res.status(400).send(error)
            }
            res.status(200).send(results)
        })
    })



// Get method

router.get('/gallery/:id',(req, res)=>{
    const _id=req.params.id
    
        var sql=`SELECT g.id,g.image, g.description, c.name FROM center c,gallery g WHERE g.center_id=c.id`
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

router.get('/parents-gallery',(req, res)=>{
        //const _id=req.params.id
        
            const sql=`SELECT image from gallery`
            console.log(sql)
            connection.query(sql, (error, results)=>{
                if(error){
                    return res.status(400).send(error)
                }
                res.status(200).send(results)
            })
        })


// Delete method
router.delete('/gallery/:id', (req, res)=>{
    const _id=req.params.id
    //res.send(`Delete gallery with ID ${_id}`)
    
        const sql = `delete from gallery where gallery.id = ${_id}`
        connection.query(sql, (error,results) => {
           if(error){
               return res.status(400).send(error)
            }
        res.status(200).send(results)
        
        })
    })

module.exports = router