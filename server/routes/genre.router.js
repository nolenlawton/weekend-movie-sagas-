const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
  console.log('ID IS ', req.params.id)

  const query = `
    SELECT "movies".title, JSON_AGG("genres".name) AS genres
    FROM "movies_genres"
    JOIN "movies" ON "movies".id = "movies_genres".movie_id
    JOIN "genres" ON "genres".id = "movies_genres".genre_id
    WHERE "movies".id = $1
    GROUP BY "movies".title;
  `;
  const params = [req.params.id]

  pool.query(query, params)
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500)
    })
});

module.exports = router;