import { home, about, fortune, notFound, serverError } from "../handlers.js";

test('рендеринг домашней страницы', () => {
    const req = {};
    const res = {
        render: jest.fn()
    };
    home(req, res);
    expect(res.render.mock.calls[0][0]).toBe('home');
})

test('рендеринг страницы О нас', () => {
    const req = {};
    const res = {
        render: jest.fn()
    };
    about(req, res);
    expect(res.render.mock.calls.length).toBe(1);
    expect(res.render.mock.calls[0][0]).toBe('about');
})

test('рендеринг страницы C предсказанием', () => {
    const req = {};
    const res = {
        render: jest.fn()
    };
    fortune(req, res);
    expect(res.render.mock.calls.length).toBe(1);
    expect(res.render.mock.calls[0][0]).toBe('fortune');
    expect(res.render.mock.calls[0][1])
        .toEqual(expect.objectContaining({ 
            fortune: expect.stringMatching(/\W/), }));
})

test('рендеринг обработчика ошибки 404', () => {
    const req = {};
    const res = {
        render: jest.fn()
    };
    notFound(req, res);
    expect(res.render.mock.calls.length).toBe(1);
    expect(res.render.mock.calls[0][0]).toBe('404');
})

test('рендеринг обработчика ошибки 500', () => {
    const err = new Error('Some error');
    const req = {};
    const res = {
        render: jest.fn()
    };
    const next = jest.fn();
    serverError(err, req, res, next);
    expect(res.render.mock.calls.length).toBe(1);
    expect(res.render.mock.calls[0][0]).toBe('500');
})