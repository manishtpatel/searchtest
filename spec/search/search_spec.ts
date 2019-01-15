import 'jasmine'
import axios from 'axios'

const test_server_url = 'http://localhost:3000'

describe("search should", () => {
    it('should return data', async done => {
        let res = await axios.post(test_server_url, {
            sortBy: 'name',
            keyword: 'search on me',
            page: 1,
            hitsPerPage: 20,
            refinements: {
                ref1: ['test1', 'test2'],
            }
        })
        
        console.log(res.data)
        done()
    })
})
