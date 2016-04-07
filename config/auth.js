// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '665114316936017', // your App ID
        'clientSecret'  : '***REMOVED_FACEBOOK_CLIENT_SECRET***', // your App Secret
        'callbackURL'   : 'http://localhost:3000/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : '***REMOVED_TWITTER_CONSUMER_KEY***',
        'consumerSecret'    : '***REMOVED_TWITTER_CONSUMER_SECRET***',
        'callbackURL'       : 'http://localhost:3000/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : '880716802815-pi4jpanj04jrmhcmqo61s2bc6o2bmkim.apps.googleusercontent.com',
        'clientSecret'  : '***REMOVED_GOOGLE_CLIENT_SECRET***',
        'callbackURL'   : 'http://127.0.0.1:3000/auth/google/callback'
    }

};