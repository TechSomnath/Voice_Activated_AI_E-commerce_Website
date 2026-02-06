import express from 'express'
let port = process.env.PORT || 6000
let app = express()

app.listen(port,()=>{
    console.log(`Example app listening on http://localhost:${port}`);
})