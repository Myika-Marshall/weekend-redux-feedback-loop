const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// Gets feedback from the db
router.get('/', (req, res) => {
    console.log('in GET /feedback');
    const sqlText = `
        SELECT * FROM "feedback"
        ORDER BY "id" ASC;
    `;
    pool.query(sqlText)
        .then((dbRes) => {
            res.send(dbRes.rows);
        }).catch((err) => {
            console.error('error GET /feedback', err);
            res.sendStatus(500);
        });
});

// adds new feedback to the database
router.post('/', (req, res) => {
    console.log('POST /feedback', req.body);
    const feedback = req.body;
    const sqlText = `
            INSERT INTO "feedback"
                ("feeling", "understanding", "support", "comments")
            VALUES
                ($1, $2, $3, $4)
        `;
    const sqlValues = [
        feedback.feeling,
        feedback.understanding,
        feedback.support,
        feedback.comments
    ];
    console.log(sqlValues);
    pool.query(sqlText, sqlValues)
        .then((res) => {
            res.sendStatus(201);
        }).catch((dbErr) => {
            console.error(dbErr);
            res.sendStatus(500);
        });

});

module.exports = router;