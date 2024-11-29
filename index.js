import express from 'express'

const app = express()
app.use(express.json())

app.get('/json-test', (req, res) =>  {
    res.json({
        message:'json test ok'})
} )

app.listen(3002, () => {
    console.log('Server started')
})
