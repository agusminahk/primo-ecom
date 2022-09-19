import GoogleStrategy from 'passport-google-oauth20';
import passport from 'passport';

passport.use(
  new GoogleStrategy.Strategy(
    {
      clientID: process.env.GCLIENT_ID || '',
      clientSecret: process.env.GCLIENT_SECRET || '',
      callbackURL: '/api/auth/google/callback',
      scope: ['profile', 'email'],
    },
    function (accessToken, refreshToken, profile, callback) {
      callback(null, profile);
    },
  ),
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user!);
});
