const express = require('express');
// const mongoose = require('mongoose');

const router = express.Router();

const Content = require('../models/audio-content');
const MyVoice = require('../models/my-voice');


// POST

router.post('/my-audios', (req, res, next) => {
  const { audio_one, audio_two, audio_three, audio_four, ella, low, high, breath, strong, light } = req.body;

  const newAudioCollection = new Content({
    audio_one,
    audio_two,
    audio_three,
    audio_four,
    ella,
    low,
    high,
    breath,
    strong,
    light,

  });

  newAudioCollection.save((err) => {
    if (err) {
      res.status(400).json({ message: 'Saving audio-collection to database went wrong.' });
      return;
    }
    res.status(200).json(newAudioCollection);
  });
});


// // GET ALL INITIAL USER INFO
router.get('/my-voice', (req, res, next) => {
  MyVoice.find()
    .then((myVoice) => {
      res.json(myVoice);
    })
    .catch((err) => {
      res.json(err);
    });
});



// // GET AUDIOS 
router.get('/my-audios', (req, res, next) => {
  Content.find()
    .then((audios) => {
      res.json(audios);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
