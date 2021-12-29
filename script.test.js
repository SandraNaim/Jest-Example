const googleSearch = require('./script');

dbMock = [
    'dog.com',
    'cheese.com',
    'disney.com',
    'dogpicture'
];

it('is searching google', () => {
    expect(googleSearch('testest', dbMock)).toEqual([])
    expect(googleSearch('dog', dbMock)).toEqual(['dog.com', 'dogpicture'])
})