require('nodeunit');

var LanguageDetect = require('../lib/LanguageDetect');
var Parser = require('../lib/Parser');
var Index = require('../index');

exports.index = function (t) {
  t.expect(2);
  t.equal(typeof Index, 'function');
  t.equal(typeof new Index().detect, 'function');

  return t.done();
};

exports.distance = function (t) {
  var str = 'from SW HOUSTON to #PVnation SOPHOMORE STATUS Just A Soul Whose Intentions Are Good Self-expression should always b limitless if that bothers u...dont follow me';
  var a = new LanguageDetect(str);
  var l = new Parser(str);

  l.setPadStart(true);
  l.analyze();

  var trigram_freqs = l.getTrigramRanks();

  t.equal(a.distance(a.langDb['arabic'], trigram_freqs), 42900);
  t.equal(a.distance(a.langDb['azeri'], trigram_freqs), 41727);
  t.equal(a.distance(a.langDb['bengali'], trigram_freqs), 42900);
  t.equal(a.distance(a.langDb['bulgarian'], trigram_freqs), 42900);
  t.equal(a.distance(a.langDb['cebuano'], trigram_freqs), 40041);
  t.equal(a.distance(a.langDb['croatian'], trigram_freqs), 37103);
  t.equal(a.distance(a.langDb['czech'], trigram_freqs), 39100);
  t.equal(a.distance(a.langDb['danish'], trigram_freqs), 35334);
  t.equal(a.distance(a.langDb['dutch'], trigram_freqs), 37691);
  t.equal(a.distance(a.langDb['english'], trigram_freqs), 27435);
  t.equal(a.distance(a.langDb['estonian'], trigram_freqs), 37512);
  t.equal(a.distance(a.langDb['farsi'], trigram_freqs), 42900);
  t.equal(a.distance(a.langDb['finnish'], trigram_freqs), 38619);
  t.equal(a.distance(a.langDb['french'], trigram_freqs), 34141);
  t.equal(a.distance(a.langDb['german'], trigram_freqs), 37005);
  t.equal(a.distance(a.langDb['hausa'], trigram_freqs), 40622);
  t.equal(a.distance(a.langDb['hawaiian'], trigram_freqs), 40878);
  t.equal(a.distance(a.langDb['hindi'], trigram_freqs), 42900);
  t.equal(a.distance(a.langDb['hungarian'], trigram_freqs), 37880);
  t.equal(a.distance(a.langDb['icelandic'], trigram_freqs), 39340);
  t.equal(a.distance(a.langDb['indonesian'], trigram_freqs), 40286);
  t.equal(a.distance(a.langDb['italian'], trigram_freqs), 34882);
  t.equal(a.distance(a.langDb['kazakh'], trigram_freqs), 42900);

  return t.done();
};

exports.normalizeScore = function (t) {
  var l = new LanguageDetect();

  var clean = function (o) {
    if (o === 0) {
      return o;
    } else {
      return (+(o + '').substr(0, 15)) + 0.0000000000001;
    }
  };

  t.equal(clean(l.normalizeScore(42900, 143)), 0);
  t.equal(clean(l.normalizeScore(34548, 143)), 0.1946853146854);
  t.equal(clean(l.normalizeScore(39626, 143)), 0.0763170163171);
  t.equal(clean(l.normalizeScore(37236, 143)), 0.132027972028);
  t.equal(clean(l.normalizeScore(35401, 143)), 0.1748018648019);
  t.equal(clean(l.normalizeScore(37165, 143)), 0.133682983683);
  t.equal(clean(l.normalizeScore(37828, 143)), 0.1182284382285);
  t.equal(clean(l.normalizeScore(39912, 143)), 0.0696503496504);
  t.equal(clean(l.normalizeScore(36439, 143)), 0.1506060606061);
  t.equal(clean(l.normalizeScore(39920, 143)), 0.0694638694639);
  t.equal(clean(l.normalizeScore(41657, 143)), 0.0289743589744);

  return t.done();
};

exports.getLanguageCount = function (t) {
  t.equal(new LanguageDetect().getLanguageCount(), 52);

  return t.done();
};

exports.detectShortString = function(t) {
  var l = new LanguageDetect();

  t.deepEqual([], l.detect(''));
  t.deepEqual([], l.detect('a'));
  t.deepEqual([], l.detect('ab'));
  t.notDeepEqual([], l.detect('abc'));

  return t.done();
};

exports.detectEnglish = function (t) {
  var l = new LanguageDetect();

  var tweets = [
    [0.3604895104895105, "from SW HOUSTON to #PVnation SOPHOMORE STATUS Just A Soul Whose Intentions Are Good Self-expression should always b limitless if that bothers u...dont follow me"],
    [0.2747286821705426, "Here we give you a play by play of our own tweeted mistakes, concerns, anxieties - quality service"],
    [0.46369565217391306, "Hey! I haven't twited on Tweeter for a while soooo."],
    [0.31619047619047624, "I feel like I tweet so much more now that I have an iPhone"],
    [0.31215189873417715, "I just deleted my Facebook and when they asked for reasoning I typed. \"Twitter is better\""],
    [0.3796031746031746, "I really need to use My tweeter more often."]
  ];

  for (var idx in tweets) {
    var r = l.detect(tweets[idx][1]);
    t.deepEqual(r[0], ['english', tweets[idx][0]]);
  }

  return t.done();
};

exports.detectEnglishIso2 = function (t) {
  var l = new LanguageDetect('iso2');

  var r = l.detect("from SW HOUSTON to #PVnation SOPHOMORE STATUS Just A Soul Whose Intentions Are Good Self-expression should always b limitless if that bothers u...dont follow me");
  t.deepEqual(r[0][0], 'en');

  return t.done();
};

exports.detectEnglishIso3 = function (t) {
  var l = new LanguageDetect('iso3');

  var r = l.detect("from SW HOUSTON to #PVnation SOPHOMORE STATUS Just A Soul Whose Intentions Are Good Self-expression should always b limitless if that bothers u...dont follow me");
  t.deepEqual(r[0][0], 'eng');

  return t.done();
};

exports.detectRussian = function (t) {
  var l = new LanguageDetect();

  var tweets = [
    [0.24057471264367825, "То, чего еще никто не писал про Нокиа, Элопа и горящую платформу"],
    [0.234421768707483, "Обещали без негатива. #Путин пригласил Обаму в Россию"],
    [0.221604938271605, "Ольга Пучкова вышла в финал теннисного турнира в Бразилии"],
    [0.1667857142857142, "Ученые обнаружили у Земли третий радиационный пояс: Изучение магнитосферы Земли и радиационных поясов имеет"],
    [0.11163580246913585 , "Самое длинное слово в Оксфордском словаре — Floccinaucinihilipilification, означающее «дать низкую оценку чему-либо»."],
    [0.2945421245421246, "Зафиксирована нестабильность потоков лавы в районе извержения вулкана Плоский Толбачик: Извержение Плоского "]
  ];

  for (var idx in tweets) {
    var r = l.detect(tweets[idx][1]);
    t.deepEqual(r[0], ['russian', tweets[idx][0]]);
  }

  return t.done();
};

exports.detectLatvian = function (t) {
  var l = new LanguageDetect();

  var tweets = [
    [0.35, "Līdz Lielajai Talkai palika 50 dienas! Piedalies un ņem līdzi draugus. Tīra Latvija ir mūsu pašu rokās un galvās :)"],
    [0.3777254901960784, "Pēdēja ziemas diena, kaut ārā valda pavasaris. Ieskaties, kāds laiks ir gaidāms nedēļas nogalē:"],
    [0.2364779874213837, "Jau rīt - Mīlestības svētku koncerts Mājā kur dzīvo kino:"],
    [0.2857142857142857, "Vai jau izmēģināji mūsu starppilsētu autobusu biļešu iegādes sistēmu? Uzraksti par savām atsauksmēm :) Vai izmēģini:"]
  ];

  for (var idx in tweets) {
    var r = l.detect(tweets[idx][1]);
    t.deepEqual(r[0], ['latvian', tweets[idx][0]]);
  }

  return t.done();
};