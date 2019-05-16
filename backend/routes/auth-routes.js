
const express = require('express');

const authRoutes = express.Router();

const passport = require('passport');
const bcrypt = require('bcryptjs');

// require the user model !!!!
const MyVoice = require('../models/my-voice');


// authRoutes.post('/logout', (req, res, next) => {
//   // req.logout() is defined by passport
//   req.logout();
//   res.status(200).json({ message: 'Log out success!' });
// });


// authRoutes.get('/loggedin', (req, res, next) => {
//   // req.isAuthenticated() is defined by passport
//   if (req.isAuthenticated()) {
//     res.status(200).json(req.MyVoice);
//     return;
//   }
//   res.status(403).json({ message: 'Unauthorized' });
// });


// authRoutes.post('/login', (req, res, next) => {
//   passport.authenticate('local', (err, theMyVoice, failureDetails) => {
//     if (err) {
//       res.status(500).json({ message: 'Something went wrong authenticating MyVoice' });
//       return;
//     }

//     if (!theMyVoice) {
//       // "failureDetails" contains the error messages
//       // from our logic in "LocalStrategy" { message: '...' }.
//       res.status(401).json(failureDetails);
//       return;
//     }

//     // save MyVoice in session
//     req.login(theMyVoice, (err) => {
//       if (err) {
//         res.status(500).json({ message: 'Session save went bad.' });
//         return;
//       }

//       // We are now logged in (that's why we can also send req.MyVoice)
//       res.status(200).json(theMyVoice);
//     });
//   })(req, res, next);
// });


// SIGN UP ROUTE

authRoutes.post('/signup', (req, res, next) => {
  const { level, range, intensity, air, style, record, artist, wishes, email, name, username, password } = req.body;
  

  if (!username || !password) {
    res.status(400).json({ message: 'Provide username and password' });
    return;
  }

  if (password.length < 7) {
    res.status(400).json({ message: 'Please make your password at least 8 characters long for security purposes.' });
    return;
  }

  MyVoice.findOne({ username }, (err, foundMyVoice) => {
    if (err) {
      res.status(500).json({ message: 'Username check went bad.' });
      return;
    }

    if (foundMyVoice) {
      res.status(400).json({ message: 'Username taken. Choose another one.' });
      return;
    }

    const salt = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(password, salt);

    const aNewVoice = new MyVoice({
      username,
      password: hashPass,
      email,
      level,
      range,
      intensity,
      record,
      air,
      style,
      artist,
      wishes,
      name,
    });

    aNewVoice.save((err) => {
      if (err) {
        res.status(400).json({ message: 'Saving user to database went wrong.' });
        return;
      }
      
      // Automatically log in user after sign up
      // .login() here is actually predefined passport method
      req.login(aNewVoice, (err) => {
        if (err) {
          res.status(500).json({ message: 'Login after signup went bad.' });
          return;
        }
    
        // Send the user's information to the frontend
        // We can use also: res.status(200).json(req.user);
        res.status(200).json(aNewVoice);
      });
    });
  });
});

module.exports = authRoutes;
