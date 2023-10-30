import test from 'node:test';
import assert from 'node:assert';
import { promisify } from 'node:util';

test('Hero integraion test suite', async (t) => {
  const testPort = 5000;

  //import server
  const { server } = await import('../../src/index.js');
  const testServerAddress = `http:localhost:${testPort}/heroes`;

  await t.test('It should create a hero', async (t) => {
    const data = {
      name: 'Batman',
      age: 50,
      power: 'rich',
    };

    const request = await fetch(testServerAddress, {
      method: 'POST',
      body: JSON.stringify(data),
    });

    assert.deepStrictEqual(
      request.headers.get('content-type'),
      'application/json'
    );

    assert.strictEqual(request.status, 201);

    const result = await request.json();

    assert.deepStrictEqual(
      result.success,
      'User created with successs!!',
      'it should return a valid text message'
    );
    assert.ok(result.id.length > 30, 'id should be a valid uuid');
  });

  await promisify(server.close.bind(server))();
});
