const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});




// POST
router.post('/projects', (req, res, next)=> {
  Project.create({
    title: req.body.title,
    description: req.body.description,
    tasks: req.body.tasks,
    owner: req.user._id
  })
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      res.json(err);
    });
});



module.exports = router;
