const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080

app.get('/', (req, res) => {
   console.log(process.pid)
   res.send('ok')
})

app.get('api/randoms', (req, res)=>{
    const cant = parseInt(req.query.cant) || 100000000
    const valores = {}
      for (let i = 0; i < cant; i++) {
          const num = getRandomInt()
   
          if(num in valores) valores[num]++
          else valores[num] = 1
      }
          return res.json(valores)
      
  
})

app.listen(PORT, () => {
    console.log(`Running in port ${PORT}... `)
})