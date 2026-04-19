const fortuneCookies = [
    "победи свои страхи, или они победят тебя.",
    "рекам нужны истоки.",
    "не бойся неведомого.",
    "тебя ждет приятный сюрприз.",
    "будь проще везде, где только можно.",
];

export const getFortune = () => {
    const index = Math.floor(Math.random() * fortuneCookies.length);
    return fortuneCookies[index];
};