$(function() {
	$('body').on( 'alnp-post-loaded', function( e, params ) {
		if ( window.stButtons ) {
			stButtons.locateElements();
		}
	});
})(jQuery);