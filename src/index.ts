import express from 'express'

const app = express()
var router = express.Router()
const port = 3000

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// 
// Search filters (SortBy, keyword, page, hitsperpage, refinements)
// autocomplete filters (keyword, refinements)
// result (hits, refinements, count)
const abstract_parameters = (req: express.Request) => {
  console.log(req.body)
}

// app.get('/', (req, res) => res.send('Hello World!'))

// a middleware sub-stack shows request info for any type of HTTP request to the /user/:id path
router.use('/search', function (req, res, next) {
    console.log('Request URL:', req.originalUrl)
    console.log('body:', req.body)
    next()
  }, function (req, res, next) {
    console.log('Request Type:', req.method)
    next()
  })

router.post('/search', (req, res) => {
    res.send('search result2')
})

// mount the router on the app
app.use('/', router)