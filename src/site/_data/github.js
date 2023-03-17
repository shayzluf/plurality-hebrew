const fetch = require("node-fetch");

module.exports = async function() {
  console.log( "Fetching new github page" );
  url_02 = "https://raw.githubusercontent.com/pluralitybook/plurality/main/LICENSE"
  url_03_01 = "https://raw.githubusercontent.com/alexrandaccio/plurality.net/main/src/site/versions/english.md"

  let return_url_02 = "";
  return fetch(url = url_02)
    .then(res => res.text()) // node-fetch option to transform to json
    .then(text => {
      return_url_02 = text;

        return fetch(url = url_03_01)
        .then(res => res.text()) // node-fetch option to transform to json
        .then(text => {
          return {
              return_url_02: return_url_02,
              return_url_03_01: text
          }
        });
    });
};
