const express = require('express');
const Account = require('./account-model');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const data = await Account.get();
        res.json(data);
    } catch (err) {
        next(err);
    }
})

router.get('/:id', checkId, async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = await Account.getById(id);
        res.json(data);
    } catch (err) {
        next(err);
    }
})

router.post('/', checkPayload, async (req, res, next) => {
    try {
        const Account = req.body;
        const data = await Account.create(account);
        res.json(data);
    } catch (err) {
        next(err);
    }
})

router.put('/:id', checkId, async (req, res, next) => {
    try {
        const { id } = req.params;
        const changes = req.body;
        const data = await Account.update(id, changes);
        res.json(data);
    } catch (err) {
        next(err);
    }
})

router.delete('/:id', checkId, checkPayload, async (req, res, next) => {
    try {
        const { id } = req.params;
        await Account.remove(id);
        res.json({ message: `The account with id ${id} was deleted` });
    } catch (err) {
        next(err);
    }
})

router.use((err, req, res, next) => {
    res.status(500).json({ message: err.message, stack: err.stack });
})

function checkId(req, res, next) {
    next();
}

function checkPayload(req, res, next) {
    next();
}

module.exports = router;