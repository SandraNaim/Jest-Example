const fetch = require('node-fetch');
const swapi = require('./script2');

it('calls swapi to get people with await', () => {
    expect.assertions(1)
    return swapi.getPeopleAwait(fetch).then(data => {
        expect(data.count).toEqual(82);
    })
})

it('calls swapi to get people with promise', () => {
    expect.assertions(2)                            // to make sure how many expect tests are running in this test
    return swapi.getPeoplePromise(fetch).then(data => {
        expect(data.count).toEqual(82);
        expect(data.results.length).toBeGreaterThan(5)
    })
})