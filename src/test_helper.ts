import * as elasticsearch from 'elasticsearch'

const client = new elasticsearch.Client({
  host: 'localhost:9200',
  // log: 'trace'
});

const indicesName = "testindex"

export const setup_test_data = async () => {
  if (await client.indices.exists({ index: indicesName })) {
    // delete index if exists
    await client.indices.delete({
      index: indicesName,
    })
  }

  // create index
  await client.indices.create({
    index: indicesName,
  })

  // insert data
  for (let i = 0; i < 10; i++) {
    let body = getData("keyword", i, new Date(), [], {} )

    let result = await client.create({
      index: indicesName,
      id: i + "",
      type: "testdocs",
      body
    })
  }

  console.log('documents count: ' + (await client.count({index: indicesName, type: "testdocs"})).count)
}

const getData = (stringData: string, numberData: number, dateData: Date, arrayData: string[], nestedData: any) => {
  return {
    stringData,
    numberData,
    dateData,
    arrayData,
    nestedData
  }
}