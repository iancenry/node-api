import { once } from 'node:events';
import Hero from '../entities/hero.js';
import { DEFAULT_HEADER } from '../util/util.js';

const routes = ({ heroService }) => ({
  '/heroes:get': async (req, res) => {
    const heroes = await heroService.find();
    res.write(
      JSON.stringify({
        results: heroes,
      })
    );
    return res.end();
  },
  '/heroes:post': async (req, res) => {
    // get item once the request sends some data
    const data = await once(req, 'data');
    const item = JSON.parse(data);
    const hero = new Hero(item);

    const id = await heroService.create(hero);
    res.writeHead(201, DEFAULT_HEADER);
    res.write(
      JSON.stringify({
        id,
        success: 'User created with successs!!',
      })
    );

    return res.end();
  },
});

export { routes };
