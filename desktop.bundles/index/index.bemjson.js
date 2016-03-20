module.exports = {
    block : 'page',
    title : 'Subscribe page',
    favicon : '/favicon.ico',
    head : [
        { elem : 'meta', attrs : { name : 'description', content : 'Subscribe page' } },
        { elem : 'meta', attrs : { name : 'keywords', content : 'Subscribe page' } },
        { elem : 'meta', attrs : { name : 'author', content : 'Mikhail Makarov' } },
        { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
        { elem : 'css', url : '../../libs/normalize-css/normalize.css' },
        { elem : 'css', url : 'index.min.css' }
    ],
    scripts: [
        { elem : 'js', url : '../../libs/jquery/dist/jquery.min.js' },
        { elem : 'js', url : 'index.min.js' }
    ],
    content : {
        'hello'
    }
};
