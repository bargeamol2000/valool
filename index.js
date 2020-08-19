const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log(req.body)
    res.send('Hello World!')
})

app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });