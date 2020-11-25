

export async function fetchGET(url, cors = false) {
    try {
      const options = {
        method: 'GET',
        headers: { 'content-type': 'application/json' },
      };

      if (cors) {
        options.headers['Access-Control-Allow-Origin'] = '*';
        // options.mode = 'no-cors';
        // options.headers['authority'] = 'api-pub.bitfinex.com';
      }

      const response = await fetch(url, options);
      const responseText = await response.text();
      if (responseText) {
        const responseJSON = JSON.parse(responseText);
        return responseJSON;
      } else {
        return {};
      }
    } catch (err) {
      // console.log(err);
      throw err;
    }
  }
  