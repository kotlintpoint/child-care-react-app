const express = require('express')
const connection = require('../db/connection')

const router=new express.Router()

router.post('/center',(req, res)=>{
   //res.send("Center Created")
   const center = req.body
   const {center_profile, name, address,city, manager_name, email_id, phone, Timings,Opening_Days, Closing_Days, website, social_media_link, description, password}=req.body
   console.log(center)
   const sql=`insert into center values (null,'${center_profile}', '${name}', '${address}','${city}','${manager_name}', '${email_id}', '${phone}', '${Timings}', '${Opening_Days}', '${Closing_Days}','${website}','${social_media_link}', '${description}', '${password}')`
        connection.query(sql, (error, results)=>{
            if(error){
                console.log(error)
                return res.status(400).send(error)
                
            }
            center.id=results.insertId
            res.status(201).send(center)
        })
    })

router.post('/centerlogin',(req,res)=>{
 const {email_id, password} = req.body

 const sql =`select * from center where email_id='${email_id}' and password='${password}'`
 connection.query(sql, (error,results)=>{
     if(error){
     return res.status(400).send(error)
     }
     if(results.length>0) res.status(200).send(results[0])
     else res.status(400).send({msg :"Incorrect Username or Password"})
 })
})

const fetchFacility=(center)=>{
    return new Promise((resolve, reject)=>{
        sql=`select * from centerfacility where center_id=${center.id}`
        connection.query(sql,(error, facilities)=>{
            if(error) reject(error)
            else resolve(facilities)
        })
    })
}

router.post('/search-center',async (req,res)=>{
    
    // const {city} = req.body
    const body = req.body
    var sql =`select c.id,c.center_profile,c.name,c.address,c.city,c.manager_name,c.email_id,c.phone,c.Timings,c.Opening_Days,c.Closing_Days,c.website,c.social_media_link,c.description , AVG(f.Stars) 'Stars' from center c LEFT JOIN feedback f ON c.id=f.center_id`
    
    if(body.city){
        sql+= ` where city='${body.city}'`
    }
    sql += ' GROUP BY c.id'
    console.log(sql)

    // try{
    //     const results=await connection.query(sql)
    //     console.log(results)
    //     if(results.length>0) 
    //     {
    //         res.status(200).send(results)
    //     }
    //     else res.status(400).send({msg :"No Results Found"})
    // }catch(error){
    //     res.status(400).send({msg :"No Results Found"})
    // }

    connection.query(sql,async (error,results)=>{
        if(error){
            return res.status(400).send(error)
            }
            if(results.length>0) 
            {
                for(i in results){
                    try{
                        
                        
                        //const facilities=await connection.query(results)
                        
                        //console.log(facilities)
                        //results[i].facilities=facilities
                        results[i].facilities=await fetchFacility(results[i])
                        
                    }catch(error){
                        console.log('Error...'+error)
                        results[i].facilities=[]
                    }
                    
                }
                console.log(results)
                res.status(200).send(results)
            }
            else res.status(400).send({msg :"No Results Found"})
    })
})


router.post('/center-register',(req, res)=>{
    const center = req.body
    const {name, email_id, password}=req.body
    console.log(center)
    const sql=`insert into center (name, email_id, password) values ('${name}', '${email_id}','${password}')`
         connection.query(sql, (error, results)=>{
             if(error){
                 console.log(error)
                 return res.status(400).send(error)
                 
             }
             center.id=results.insertId
             res.status(201).send(center)
         })
     })
 
router.post('/center-upload', (req,res)=>{
        if(req.files == null){
            return res.status(400).json({msg: "No file uploaded"})
        }
    
        const file = req.files.file;
        const desc = req.body.description;
        const centerId = req.body.centerId
        
        
    
        file.mv(`${__dirname}/../../uploads/${file.name}`, err=>{
            if(err){
            console.error(err)
            return res.status(500).send(err)
        }
        const sql=`update center set center_profile='${file.name}' where id=${centerId}`
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



router.put('/center/:id',(req, res)=>{
    const _id=req.params.id
    const {name, address, city, manager_name, email_id, phone,Timings, Opening_Days,Closing_Days, website, social_media_link, description, password}=req.body
    
        const sql=`update center set name='${name}', address='${address}', city='${city}', manager_name='${manager_name}', email_id='${email_id}', phone='${phone}', Timings='${Timings}', Opening_Days='${Opening_Days}', Closing_Days='${Closing_Days}', website='${website}', social_media_link='${social_media_link}', description='${description}', password='${password}' where id=${_id}`
        console.log(sql)
        connection.query(sql, (error, results)=>{
            if(error){
                return res.status(400).send(error)
            }
            res.status(200).send(results)
        })
    })


router.get('/center',(req, res)=>{
    //const _id=req.params.id
   
        const sql=`select * from center`
        connection.query(sql, (error, results)=>{
            if(error){
                return res.status(400).send(error)
            }
            res.status(200).send(results)
        })
    })


router.delete('/center/:id', (req, res)=>{
    const _id=req.params.id
    //res.send(`Delete Center with ID ${_id}`)
    
        const sql = `delete from center where center.id = ${_id}`
        connection.query(sql, (error,results) => {
           if(error){
               return res.status(400).send(error)
            }
        res.status(200).send(results)
        
        })
    })


module.exports = router