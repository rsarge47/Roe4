import express from 'express';
const router = express.Router();

import db from '../models';

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/buyer', (req, res) => {
    res.render('buyerProfile');
});

router.get('/vendor', (req, res) => {
    res.render('farmerProf');
});

router.get('/vendor/manageproducts', (req, res) => {
    res.render('farmerEdit');
});

router.get('/buyer/search', (req, res) => {
    res.render('buyerSearch');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});

export default router;