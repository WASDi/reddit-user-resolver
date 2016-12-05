var request = require('request');
var cheerio = require('cheerio');

(function() {
    module.exports.resolve = function(username, callback) {
        var extURL = "https://www.reddit.com/user/" + username + "/";
        request(extURL, function(error, response, html) {
            if (error) {
                callback(error);
                return;
            }
            var $ = cheerio.load(html);

            var karmas = $(".karma");
            if (karmas.length == 0) {
                callback("User not found");
                return;
            }

            var postKarma = karmas[0].children[0].data;
            var commentKarma = karmas[1].children[0].data;

            callback(
                "Post karma: " + postKarma +
                "\n" +
                "Comment karma: " + commentKarma
            );
        });
    }
}());
