import { parse } from 'node:url';
import { DEFAULT_HEADER } from './util/util.js';
import { routes } from './routes/heroRoute.js';

const heroRoutes = routes({ heroService: {} });

const allRoutes = {
  ...heroRoutes,
  // 404 routes
  default: (req, res) => {
    res.writeHead(404, DEFAULT_HEADER);
    res.write('Not Found');
    res.end();
  },
};

// processing to send to the server
const handler = async (req, res) => {
  const { url, method } = req;

  // get pathname only; ignore query params in the url
  const { pathname } = parse(url, true);

  const key = `${pathname}:${method.toLowerCase()}`;

  const chosen = allRoutes[key] || allRoutes.default;

  try {
    await chosen(req, res);
  } catch (error) {
    handlerError(res)(error);
  }
};

function handlerError(res) {
  return (error) => {
    // console.error('Something bad has happened** \n', error.stack);
    res.writeHead(500, DEFAULT_HEADER);
    res.write(
      JSON.stringify({
        error: 'internet server error!!',
      })
    );

    return res.end();
  };
}

export default handler;
