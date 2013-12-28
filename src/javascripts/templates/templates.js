define(function(){

this["JST"] = this["JST"] || {};

this["JST"]["detail"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h1>' +
__e( name ) +
'さんのページ</h1>\n<p class="big-desc">\n詳細ページ\n年齢は:' +
__e( age ) +
'\n</p>\n<a id=\'swithMainBtn\'>&gt;トップに戻る</a>\n';

}
return __p
};

this["JST"]["main"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h1>' +
__e( name ) +
'さんのページ</h1>\n<p class="big-desc">\nトップページ\n</p>\n<a id=\'swithDetailBtn\'>&gt;詳細を見る</a>\n';

}
return __p
};

this["JST"]["new"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p +=
__e( name ) +
'あたらしいテンプレート\n' +
__e( name ) +
'あたらしいテンプレート\n\n' +
__e( name ) +
'あたらしいテンプレート\n';

}
return __p
};

  return this["JST"];

});