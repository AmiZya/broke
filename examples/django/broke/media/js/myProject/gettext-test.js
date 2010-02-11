// 'http://demo_media.brokenseal.it/js/myProject/locale/%s/LC_MESSAGES/%s.po'.echo(language, 'broke')

(function(){
	var gettext_test= myProject.apps.gettext_test,
		gettext= broke.i18n.gettext,
		messageList= [
			gettext('First try'),
			gettext('Second try'),
			gettext('Third try')
		];
	
	// views
	gettext_test.views= {
		view: function(request, args){
			var message= messageList[args[0].asInt()],
				content= $('#content');
			
			content.empty();
			
			return {
				operation: 'create',
				htmlNode: content,
				template: gettext_test.templates.messageView,
				context: {
					message: message
				}
			};
		},
		changeLang: function(request, args){
			var language= args[0],
				gt= new broke.i18n.Gettext({
					domain: 'broke',
					url: 'http://demo_media.brokenseal.it/js/myProject/locale/' + language + '/LC_MESSAGES/djangojs.po'
				});
			
			return {};
		}
	};
	
	// urls
	gettext_test.urlPatterns= [
		['^/gettext_test/', [
			['change_lang/(.*)/$', gettext_test.views.changeLang, 'change_lang'],
			['view/(.*)/$', gettext_test.views.view, 'view']
		], 'gettext_test']
	];
	broke.extend(broke.urlPatterns, gettext_test.urlPatterns);
	
	// templates
	gettext_test.templates= {
		messageView:	'<div>\
							{{ message }}\
						</div>'
	};
})();