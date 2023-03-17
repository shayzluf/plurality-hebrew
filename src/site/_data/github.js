const fetch = require("node-fetch");

module.exports = async function() {
  console.log( "Fetching new github page" );
  url_02 = "https://raw.githubusercontent.com/pluralitybook/plurality/main/Introduction/Plurality%20Intro%20First%20Commit.adoc"
  url_03_01 = "https://raw.githubusercontent.com/pluralitybook/plurality/main/Plural%20World%20ascii/Plural%20World%20first%20commit.adoc"
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
