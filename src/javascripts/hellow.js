/**
 * 練習用のview
 */
define(
  ['jquery', 'backbone', 'templates/templates'], 
  function ($, Backbone, JST) {

    return Backbone.View.extend({
      //el以下の要素にのみイベントが発生する
      el: 'body',

      template: null,
      defaults: {
      },

      //イベント
      events: {
        'click #swithMainBtn': 'swithMainView',
        'click #swithDetailBtn': 'swithDetailView'
      },

      //初期化
      initialize: function(attr) {
        this.user = attr.user;
        this.reset();
      },

      //テンプレートを初期値に戻す
      reset: function() {
        this.template = JST['main'];
      },

      //JST template test
      render: function() {
        var name = this.user.get('name');
        $('#content').html(this.template(this.user.attributes));
      },

      //
      swithMainView: function() {
        this.reset();
        this.render();
      },

      swithDetailView: function() {
        this.template = JST['detail'];
        this.render();
      }
    });
  }
);
