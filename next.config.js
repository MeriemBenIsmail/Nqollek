const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
require('dotenv').config()
const nextSettings = {
    exportTrailingSlash: true,
    exportPathMap: function() {
        return {
            '/': { page: '/' },
        };
    },
    env: {
        API_URL: "http://localhost:1337"
    },
    publicRuntimeConfig: {
        API_URL: "http://localhost:1337"
    }
};

//module.exports = withPlugins([withImages()]);
module.exports = [nextSettings,withPlugins([withImages()])];