import test from 'node:test';
import assert from 'node:assert';

test('Hero integraion test suite', async (t) => {
  const testPort = 5000;

  //import server
  const { server } = await import('../../src/index.js');
  const testServerAddress = `http:localhost:${testPort}/heroes`;

  await t.todo('It should create a hero', async (t) => {
    const data = {
      name: 'Batman',
      age: 50,
      power: 'rich',
    };

    fetch();
  });

  await server.close.bind(server);
});
