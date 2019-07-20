import Bluebird from 'bluebird';

const promise = Bluebird.resolve()
        .then(() => {
            if (process.env.SOME == 'some') {
                return true;
            } else if (process.env.SOME == 'another') {
                return Promise.resolve(false);
            } else {
                return 'oops';
            }
        });