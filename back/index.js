const express = require('express')
const mongoose = require('mongoose');
var cors = require('cors')
const app = express()
const port = 3000
app.use(express.json())
app.use(cors())
const finalSchema = new mongoose.Schema({
    img: String,
    title: String,
    price: Number
  });

  const final = mongoose.model('final', finalSchema)



app.get('/', async (req, res) => {
    const getAll = await final.find({})
  res.send(getAll)
})

app.get('/:id', async (req, res) => {
  let {id} = req.params
    const getById = await final.findById(id)
  res.send(getById)
})

app.delete('/:id', async (req, res) => {
    let {id} = req.params
    const obj = req.body
    const deleteData = await final.findByIdAndDelete(id,obj)
  res.send(deleteData)
})

app.post('/', async(req, res) => {
    const obj = req.body
    const postedData =  new final(obj)
    await postedData.save()

    res.send(postedData)
  })



mongoose.connect('mongodb+srv://emin:emin@emsolqaqa.djlcltz.mongodb.net/')
  .then(() => console.log('Connected!'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})