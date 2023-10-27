import { parse } from 'node:url';
import { DEFAULT_HEADER } from './util/util.js';

const allRoutes = {
  '/heroes:get': (req, res) => {
    res.write('GET');
    res.end();
  },

  // 404 routes
  default: (req, res) => {
    res.writeHead(404, DEFAULT_HEADER);
    res.write('Not Found');
    res.end();
  },
};

// processing to send to the server
const handler = (req, res) => {
  const { url, method } = req;

  // get pathname only; ignore query params in the url
  const { pathname } = parse(url, true);

  const key = `${pathname}:${method.toLowerCase()}`;

  const chosen = allRoutes[key] || allRoutes.default;

  return Promise.resolve(chosen(req, res)).catch(handleError(res));
};

function handleError(res) {
  return (error) => {
    console.log('Something bad has happened', error.stack);
    res.writeHead(500, DEFAULT_HEADER);
    res.write(
      JSON.stringify({
        error: 'internet server error',
      })
    );
    return res.end();
  };
}

export default handler;
