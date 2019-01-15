import express from 'express'

const app = express()
var router = express.Router()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


// 
// Search filters (SortBy, keyword, page, hitsperpage, refinements)
// autocomplete filters (keyword, refinements)
// result (hits)
const abstract_parameters = (req: express.Request) => {

}

// a middleware sub-stack shows request info for any type of HTTP request to the /user/:id path
router.use('/search', function (req, res, next) {
    console.log('Request URL:', req.originalUrl)
    next()
  }, function (req, res, next) {
    console.log('Request Type:', req.method)
    next()
  })

router.get('/search', (req, res) => {
    res.send('search result2')
})

// mount the router on the app
app.use('/', router)



// TEST SEARCH CALL

