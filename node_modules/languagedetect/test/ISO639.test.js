require('nodeunit');

var ISO639 = require('../lib/ISO639.js');

exports.getCode2 = function (t) {
  t.equal(ISO639.getCode2('English'), 'en');
  t.equal(ISO639.getCode2('Russian'), 'ru');
  t.equal(ISO639.getCode2('dANiSH'), 'da');
  t.equal(ISO639.getCode2('unknown'), null);

  return t.done();
};

exports.getCode3 = function (t) {
  t.equal(ISO639.getCode3('English'), 'eng');
  t.equal(ISO639.getCode3('Russian'), 'rus');
  t.equal(ISO639.getCode3('dANiSH'), 'dan');
  t.equal(ISO639.getCode3('unknown'), null);

  return t.done();
};

exports.getName2 = function (t) {
  t.equal(ISO639.getName2('en'), 'english');
  t.equal(ISO639.getName2('ru'), 'russian');
  t.equal(ISO639.getName2('da'), 'danish');
  t.equal(ISO639.getName2(null), null);

  return t.done();
};

exports.getName3 = function (t) {
  t.equal(ISO639.getName3('eng'), 'english');
  t.equal(ISO639.getName3('rus'), 'russian');
  t.equal(ISO639.getName3('dan'), 'danish');
  t.equal(ISO639.getName3(null), null);

  return t.done();
};