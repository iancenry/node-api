# Pure Node Web API

- Using the N-layers architecture - goal is to create project using folders representing layers with different responsibilites: Data access, Business logic, App infrastructure code(route, controllers, endpoints etc)
- Testing without frameworks.

```js
import { test, describe } from 'node:test';
import assert from 'node:assert';

describe('example test suite', () => {
  test('test true is equal to true', () => {
    assert.equal(true, true);
  });
});

"scripts": {
    "start": "node src/index.js",
    "test": "node --test --watch"
  },
```
