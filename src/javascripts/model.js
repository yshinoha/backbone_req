
define(
  ["backbone"], 
  function(Backbone) {
  	
    return Backbone.Model.extend({
      defaults: {
      	birthday: 	'1900/01/01',
      },

      initialize: function (attrs, options) {
        this.bind("change:name", function (model, val) {
            console.log(model.previous('name'), val);
        });

        //初期案（お蔵入り）
        //this.bind("change:birthday", this.model.calculatingAgeFromBirthday);

        //採用案理由は後述
        this.bind("change:birthday", function (model, val) {
      		model.set('age', model.calculatingAgeFromBirthday(val));
        });
      },

      //初期案（お蔵入り）
      /*
 	  calculatingAgeFromBirthday: function(model, val) {
      	return model.set('age', 100);
      }
      */

      //採用案 -> 理由：こちらの形式の方が、関数単位でのテストが容易になるため
      /**
       * yyyy/mm/ddから現在の年齢を計算する。
       *
       * day yyyy/mm/dd
       * return int
       */
      calculatingAgeFromBirthday: function(day) {
      	//dayを計算してageに変更する
      	return (new Date(new Date() - new Date(day))).getFullYear() - 1970;
      }
    });
  }
);