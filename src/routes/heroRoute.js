const routes = ({ heroService }) => ({
  '/heroes:get': async (req, res) => {
    res.write('GET');
    res.end();
  },
  '/heroes:post': async (req, res) => {
    res.write('POST');
    res.end();
  },
});

export { routes };
