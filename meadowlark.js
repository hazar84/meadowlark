const express = require('express');
const expressHandlebars = require('express-handlebars');

const fortunes = [
    "победи свои страхи, или они победят тебя.",
    "рекам нужны истоки.",
    "не бойся неведомого.",
    "тебя ждет приятный сюрприз.",
    "будь проще везде, где только можно.",
];

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
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    res.render('fortune', {fortune: randomFortune});
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