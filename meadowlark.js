import express from 'express';
import { engine } from 'express-handlebars';
import { getFortune } from './lib/fortune.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { home, about, fortune, notFound, serverError } from './lib/handlers.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Настройка механизма представлений Handlebars
app.engine('handlebars', engine({
    defaultLayout: 'main',
}));

app.set('view engine', 'handlebars');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// Домашняя страница
app.get('/', home);

// Страница "О Meadowlark Travel"
app.get('/about', about);

// Страница с предсказанием
app.get('/fortune', fortune);

// Пользовательская страница 404
app.use(notFound);

// Пользовательская страница 500
app.use(serverError);

app.listen(port, () => {
    console.log(
        `Express запущен на http://localhost:${port}; ` + 
        `нажмите Ctrl+C для завершения.`
    )
});