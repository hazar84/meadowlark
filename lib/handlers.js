import { getFortune } from './fortune.js';

export const home = (req, res) => res.render('home');
export const about = (req, res) => res.render('about');
export const fortune = (req, res) => res.render('fortune', { fortune: getFortune() });
export const notFound = (req, res) => res.render('404');
export const serverError = (err, req, res, next) => res.render('500');