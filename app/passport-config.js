const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const db = require('./services/db'); // Import your MySQL database connection

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      // Query the database to find a user with the provided username
      const [user] = await db.query('SELECT * FROM users WHERE username = ?', [username]);

      if (!user) {
        return done(null, false, { message: 'Invalid username' });
      }

      if (user.password !== password) {
        return done(null, false, { message: 'Invalid password' });
      }

      return done(null, user);
    } catch (error) {
      return done(error);
    }
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    // Query the database to find the user by ID
    const [user] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
    done(null, user);
  } catch (error) {
    done(error);
  }
});
