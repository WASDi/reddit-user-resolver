import request from 'request';
import cheerio from 'cheerio';

export default function karmaForUser(username, callback) {
    const extURL = "https://www.reddit.com/user/" + username + "/";
    request(extURL, function(error, response, html) {
        if (error) {
            callback(error);
            return;
        }
        const $ = cheerio.load(html);

        const karmas = $(".karma");
        if (karmas.length == 0) {
            callback("User not found");
            return;
        }

        const postKarma = karmas[0].children[0].data;
        const commentKarma = karmas[1].children[0].data;

        callback(
            "Post karma: " + postKarma +
            "\n" +
            "Comment karma: " + commentKarma
        );
    });
};
