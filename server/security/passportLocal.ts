
import passport from 'passport';
import LocalStrategy from 'passport-local'
import User from '../core/models/User.model';

const message = 'User Credentials are incorrect'

passport.use(
    new LocalStrategy.Strategy(
        {
            usernameField: 'email',
            passwordField: 'password',
        },
        async (email, password, done) => {
            const user = await User.find({ email });
            if (!user) return done(null, false, { message });

            const match = await new User(...user).matchPassword(password);
            if (match) return done(null, user);

            return done(null, false, { message });
        }
    )
);