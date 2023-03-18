const fetch = require("node-fetch");
const read_url = async (url) => {
      return fetch(url = url)
        .then(res => {
            if (res.status != 200){
                console.log(res);
                const return_message = `Content retrieval error ${res.status} ${res.statusText}`
                return return_message;
            } else {
                return res.text()
            }
        })
        .then(text => {
            return text;
        })
        .catch(err => {
          console.log("retrieval error catch")
          const return_message = `Configured content URL is not reacheable at ${url}`
          return return_message;
        })
}

module.exports = async function() {
    let return_content = {}

    urls = {
        return_url_02: "https://raw.githubusercontent.com/pluralitybook/plurality/main/Introduction/Plurality%20Intro%20First%20Commit.adoc",
        return_url_03_01: "https://raw.githubusercontent.com/pluralitybook/plurality/main/Plural%20World%20ascii/Plural%20World%20first%20commit.adoc"
    }

    for (let url_item in urls) {
        console.log(url_item, urls[url_item]);
        return_content[url_item] = await read_url(urls[url_item])
    }
    return return_content;
}