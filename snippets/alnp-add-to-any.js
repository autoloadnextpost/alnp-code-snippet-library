$(function() {
	$('body').on( 'alnp-post-loaded', function( e, params ) {
		if ( window.a2a_config ) {
			a2a.init_all("page");
		}
	});
})(jQuery);