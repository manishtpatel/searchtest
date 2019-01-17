import 'jasmine'
import axios from 'axios'
import * as elasticSetup from './../../src/test_helper'

const test_server_url = 'http://localhost:3000'

describe("search should", () => {
    beforeAll(async done => {
        await elasticSetup.setup_test_data()
        
        done()
    })

    it('should return data', async done => {
        let res = await axios.post(test_server_url + "/search", {
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
