import test from 'node:test';
import assert, { strictEqual } from 'node:assert';
const callTracker = new assert.CallTracker();
process.on('exit', () => callTracker.verify());

import { routes } from './../../../src/routes/heroRoute.js';
import { DEFAULT_HEADER } from '../../../src/util/util.js';

test('Hero routes - endpoints test suite', async (t) => {
  t.todo('it should call /heroes:get route', async () => {
    // mocks - something similar to what the server is doing behind the scenes
    const databaseMock = [
      {
        id: '0373ce78-dff7-4122-ae22-0bb6f278070c',
        name: 'Batman',
        age: 50,
        power: 'rich',
      },
    ];

    const heroServiceStub = {
      find: async () => databaseMock,
    };

    const endpoints = routes({
      heroService: heroServiceStub,
    });

    const endpoint = '/heroes:get';
    const request = {};
    // mock response
    const response = {
      write: callTracker.calls((item) => {
        const expected = JSON.stringify({
          results: databaseMock,
        });

        assert.strictEqual(
          item,
          expected,
          'write should be called with the correct payload'
        );
      }),
      end: callTracker.calls((item) => {
        assert.strictEqual(
          item,
          undefined,
          'end should be called without params'
        );
      }),
    };

    const route = endpoints[endpoint];
    await route(request, response);
  });
  await t.todo('it should call /heroes:post route');
});
