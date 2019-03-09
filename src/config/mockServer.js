const bodyParser = require('body-parser');

const isDevMocking = process.env.DEV_MOCK === '1';
const HOST = 'localhost';
const plugins = [];

const devServerOptions = {
  before(app) {
    console.log('***************************** before block');
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    const fixturesByEndpoint = [
      {
        method: 'GET',
        url: '/missigno-test/wp-json/wp/v2/media',
        response: (req) => {
          return { body: require('../mocks/mediaRequest'), status: 200 };
        },
      },
      {
        method: 'GET',
        url: '/test',
        response: (req) => {
          return { body: require('../mocks/mediaRequest') };
        },
      },
    ];

    fixturesByEndpoint.forEach((fixture) => {
      const { method, response, url } = fixture;

      console.log('   mocked endpoint:', `${method.toUpperCase()}: ${url}`);

      app[method.toLowerCase()](url, (req, res) => {
        console.log(
          method.toUpperCase(),
          url,
          '\r\n',
          JSON.stringify(req.body),
          req.query,
        );
        if (typeof fixture.response === 'function') {
          const response = fixture.response(req);
          res.status(response.status);
          res.send(JSON.stringify(response.body));
        } else {
          res.status(fixture.response.status || 200);
          res.send(JSON.stringify(fixture.response.body));
        }
      });
    });
  },
};

module.exports = {
  plugins,
  devServerOptions,
};
