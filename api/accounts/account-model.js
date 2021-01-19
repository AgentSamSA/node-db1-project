const db = require("../../data/db-config");

module.exports = {
    get,
    getById,
    create,
    update,
    remove,
}

function get() {
    return db('accounts');
}

function getById(id) {
    return db('accounts').where('id', id).first();
}

function create(account) {
    return db('accounts').insert(account)
        .then(([id]) => {
            return db('accounts').where('id', id).first();
        });
}

function update(id, account) {
    return db('accounts').where('id', id).update(accounts)
        .then(([id]) => {
            return db('accounts').where('id', id).first();
        });
}

function remove(id) {
    return db('accounts').where('id', id).del();
}