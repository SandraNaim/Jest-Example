const googleSearch = require('./script');

dbMock = [
    'dog.com',
    'cheese.com',
    'disney.com',
    'dogpicture'
];

describe('googleSearch', () => {
    it('is searching google', () => {
        expect(googleSearch('testest', dbMock)).toEqual([]);
        expect(googleSearch('dog', dbMock)).toEqual(['dog.com', 'dogpicture']);
    })
    
    it('work with undefined and null input', () => {
        expect(googleSearch(undefined, dbMock)).toEqual([]);
        expect(googleSearch(null, dbMock)).toEqual([]);
    })
    
    it('does not return more than 3 matches', () => {
        expect(googleSearch('.com', dbMock).length).toEqual(3);
    })
})
