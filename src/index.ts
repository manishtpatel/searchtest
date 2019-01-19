import express from 'express'
import body_parser from 'body-parser'
import { stringify } from 'querystring';

const app = express()
var router = express.Router()
const port = 3000

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// 
// Search filters (SortBy, keyword, page, hitsperpage, refinements)
// autocomplete filters (keyword, refinements)
// result (hits, refinements, count)
const abstract_parameters = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.log(req.body)

  try {
    let sortBy = req.body.sortBy
    let keyword = req.body.keyword
    let needHits = !!req.body.hits
    let hitsPerPage: number | null = null
    let hitsPage: number | null = null
    let autocomplete: boolean = req.body.autocomplete

    if (needHits) {
      hitsPerPage = req.body.hits.hitsPerPage
      hitsPage = req.body.hits.hitsPage
    }

    // Type Checking
    if (
      (typeof sortBy !== 'string') ||
      (typeof keyword !== 'string') ||
      (typeof needHits !== 'boolean') ||
      (typeof autocomplete !== 'boolean')
    ) {
      throw "Invalid type"
    }

    if(needHits) {
      if (
        (typeof hitsPerPage !== 'number') ||
        (typeof hitsPage !== 'string')
      ) {
        throw "Invalid type"
      }
    }
  } catch (e) {
    next(Error("Invalid Request Params"))
  }
}

// app.get('/', (req, res) => res.send('Hello World!'))

// a middleware sub-stack shows request info for any type of HTTP request to the /user/:id path
router.use('/search', body_parser.json(), function (req, res, next) {
  abstract_parameters(req, res, next)
  next()
})

router.post('/search', (req, res) => {
  res.send('search result2')
})

// mount the router on the app
app.use('/', router)