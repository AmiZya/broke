(function(_){
	var
		settings= require('broke/conf/settings'),
		cache= require('broke/core/cache.cache'),
		translation= require('broke/utils/translation'),
		
		_generateCacheHeaderKey= function(keyPrefix, request){
			//var path= md5.hex_md5(request.path);
			var path= md5.hex_md5(request.url),
				cacheKey= 'views.decorators.cache.cache_header.%s.%s'.echo(keyPrefix, path);
			
			if(settings.USE_I18N) {
				cacheKey+= '.%s'.echo(translation.getLanguage());
			}
			
			return cacheKey;
		},
		_generateCacheKey= function(request, headerList, keyPrefix){
			var ctx= '',
				path= md5.hex_md5(request.url),
				cacheKey;
			
			//headerList.each(function(){
			forEach(headerList, function(){
				var value= request.META[this] || null;
				if(value !== null) {
					ctx+= value;
				}
			});
			
			cacheKey= 'views.decorators.cache.cache_page.%s.%s.%s'.echo(keyPrefix, md5.hex_md5(path), md5.hex_md5(ctx));
			
			if(settings.USE_I18N) {
				cacheKey+= '.%s'.echo(translation.getLanguage());
			}
			
			return cacheKey;
		}
	;
	
	_.getCacheKey= function(request, keyPrefix){
		var cacheKey,
			headerList;
		
		if(keyPrefix === undefined) {
			keyPrefix= settings.CACHE_MIDDLEWARE_KEY_PREFIX;
		}
		
		cacheKey= _generateCacheHeaderKey(keyPrefix, request);
		headerList= cache.get(cacheKey, null);
		
		if(headerList !== null) {
			return _generateCacheKey(request, headerList, keyPrefix);
		} else {
			return null;
		}
	};
	
	_.learnCacheKey= null;
	_.patchResponseHeaders= null;
	_.getMaxAge= null;
	
})(exports);
