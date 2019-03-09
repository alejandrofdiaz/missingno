const proxy = new Proxy(
  {},
  {
    get: (target, key) => (/__esModule|default/.test(key) ? target : key),
  },
);

module.exports = {
  __esModule: proxy,
  default: proxy,
};
