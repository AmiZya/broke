(function(_){
	var
		__module__ = {
			AJAX: {							// ajax settings
				dataType: 'json',			// ajax data type which returns from the server
				async: false
			},
			APPEND_SLASH: false,
			BASE_URL: '/media/broke',
			
			// cache system
			// broke implements only a local storage cache backend, for now
			CACHE_BACKEND: 'local_storage://',
			CACHE_MIDDLEWARE_SECONDS: 600,
			CACHE_MIDDLEWARE_KEY_PREFIX: '',
			
			DEBUG_PROPAGATE_EXCEPTIONS: false,
			
			DEFAULT_CHARSET: 'utf-8',
			
			DEFAULT_CONTENT_TYPE: 'text/html',
			
			DISALLOWED_USER_AGENTS: [],
			
			DEBUG: false,
			CONTEXT_PROCESSORS: [
				'broke.contextProcessors.debug'
			],
			
			DATE_FORMAT: '%Y/%m/%d',
			
			FORCE_SCRIPT_NAME: null,
			
			GET_LATEST_BY: 'id',			// defines what field models' manager method
											// getLatest will look at
			
			HANDLER_404: 'broke.views.defaults.pageNotFound',
			
			INSTALLED_APPS: [],
			
			JSON_URLS: {
				'getData': '/%(appLabel)s/%(model)s/json/get_data/',
				'save': '/%(appLabel)s/%(model)s/json/save/',
				'delete': '/%(appLabel)s/%(model)s/json/delete/'
			},
			
			// locale specific settings
			LOCALE_PATHS: [],
			LANGUAGE_CODE: 'en',
			LANGUAGES: {
				'en': 'English',
				'it': 'Italian'
			},
			LANGUAGE_COOKIE_NAME: 'broke_language',
			
			MIDDLEWARE_CLASSES: [],
			
			//preventDefault: false,		// whether you want the broke.response to
											// prevent default action from the browser
											// careful: hideHash and preventDefault are equivalent!!
											// just use preventDefault for now
			
			PRELOAD_REMOTE_TEMPLATES: false,// wether you want Broke to preload your templates
											// remotely
											// if set to true, Broke will attempt to download
											// your templates from a remote location
											// based on the basePath of your app
											// e.g.: if an app's baseDir is '/myProject/apps/blog'
											// and your app has a 'templates' object looks like
											// { 'entry-view.html': '' }, then Broke will try to
											// download '/myProject/apps/blog/templates/entry-view.html'
			
			PREPEND_WWW: false,
			
			QUERY_TYPE: 'local',			// local|remote
											// wether you want your query to hit a local database,
											// populated with previously fetched data,
											// or query the remote database
			
			REQUIRE: {
				DYNAMIC: true,
				TIMEOUT: 3600,
				PATHS: []
			},
			
			ROOT_URLCONF: null,				// a string representing the object's configuration
			
			STOP_PROPAGATION: false,		// whether you want the broke.response to
											// prevent event propagation
			
			SAVE: {							// save settings
				commit: true				// if you want to prevent the object to
											// be saved right away, you should set this
											// to false and then explicitly call the
											// save method on the object with commit= true
											// e.g.: entry.save({commit: true})
			},
			TEMPLATE_STRING_IF_INVALID: '',
			TEMPLATE_PATHS: [],
			TEMPLATE_LOADERS: [
				'broke.template.loaders.apps',
			],
			
			// list of elements that trigger the
			// broke.request event, setting the url
			// WARNING: will only work if 'eventTriggeringMethod' is set to 'elements'
			URL_CHANGING_ELEMENTS: {
				'a': {
					events: ['click'],		// events
					urlAttribute: 'href'	// attribute holding the url
				},
				'form': {
					events: ['submit'],
					urlAttribute: 'action',
					preventDefault: true
				}
				// you may attach the jQ request event to different elements
				// for instance you could do that:
				//'div[data-href]': {
				//	events: ['click'],
				//	urlAttribute: 'data-href'	// html5 "data-" attribute
				//},
				// or even
				//'*[data-href]': {
				//	events: ['click'],
				//	urlAttribute: 'data-href'
				//}
			},
			USE_AJAX: true,					// would you like to use ajax?
											// if false, it will create a form and
											// send your date through that form
											// WARNING: not ready yet!
			
			USE_I18N: false
		}
		,name
	;
	
	for(name in __module__) {
		if(__module__.hasOwnProperty(name)) {
			_[name]= __module__[name];
		}
	}
})(exports);
