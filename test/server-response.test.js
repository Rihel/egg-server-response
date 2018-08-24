'use strict';

const mock = require('egg-mock');

describe('test/server-response.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/server-response-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, serverResponse')
      .expect(200);
  });
});
