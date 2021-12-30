const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.post('/', (req, res) => {
    const feedback = req.body;
    const sqlText = 
        `
            INSERT INTO feedback (feeling, understanding, support, comments )
            VALUES ( $1, $2, $3, $4)
        `;
    pool.query(sqlText, [ feedback.feeling, feedback.understanding, feedback.supported, feedback.comment ])
    .then((result) => {
        console.log(`The following POST is being sent to the db:`, result);
        res.sendStatus(201);
    })
    .catch((error) => {
        console.log('Post sql error', error);
        res.sendStatus(500);
    })
})

router.get('/', (req, res) => {
    let sqlText = `
        SELECT feeling, understanding, support, comments,
        FROM "feedback" `;
    pool.query(sqlText)
    .then(result => {
        console.log('in GET data from DB', result);
        res.send(result.rows);
    })
    .catch(error => {
        console.log('GET Database error', error);
        res.sendStatus(500);
    });
});

module.exports = router ;