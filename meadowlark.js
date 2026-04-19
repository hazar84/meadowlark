const express = require('express');
const expressHandlebars = require('express-handlebars');
const fortune = require('./lib/fortune');

const app = express();

// Настройка механизма представлений Handlebars
app.engine('handlebars', expressHandlebars.engine({
    defaultLayout: 'main',
}));

app.set('view engine', 'handlebars');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/fortune', (req, res) => {
    res.render('fortune', {fortune: fortune.getFortune()});
});

// Пользовательская страница 404
app.use((req, res) => {
    res.status(404).render('404');
});

// Пользовательская страница 500
app.use((err, req, res, next) => {
    console.error(err.message);
    res.status(500).render('500');
});

app.listen(port, () => {
    console.log(
        `Express запущен на http://localhost:${port}; ` + 
        `нажмите Ctrl+C для завершения.`
    )
});