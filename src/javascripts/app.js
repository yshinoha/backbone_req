require(['hellow', 'model'], function(helloView, User) {
	//backbone viewを使う
	var user = new User();
	user.set('name', 'shinofara');
	user.set('birthday', '1986-12-08');
	user.set({
		'name': 'yshinofara',
		'birthday': '1987/01/02'
    });

    (new helloView({user: user})).render();
});