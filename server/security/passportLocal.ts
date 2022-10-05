import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import User from '../core/models/User.model';

const message = 'User Credentials are incorrect';

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    async (email, password, done) => {
      const user = await User.findOne({ email });
      if (!user) return done(null, false, { message });

      const match = await user.matchPassword(password);
      if (match) return done(null, user);

      return done(null, false, { message });
    },
  ),
);

passport.serializeUser((user: any, done) => {
  return done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.find({ _id: id });
  return done(null, user);
});

export default passport;
