import winston from 'winston';
import Analytics from 'analytics-node';

let analytics;

if (process.env.NODE_ENV === 'production') {
  analytics = new Analytics('I7HHAnUIfFXEfsjdvgxqqaYsCqO8KRv0');
} else {
  analytics = new Analytics('P8wFuMHOiEjpxN23sw8s7kSLDguURi4i');
}

export default analytics;
