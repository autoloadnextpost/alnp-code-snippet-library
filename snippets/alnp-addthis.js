$(function() {
	$('body').on( 'alnp-post-loaded', function( e, params ) {
		if ( typeof addthis !== 'undefined' ) {
			addthis.layers.refresh();
		}
	});
})(jQuery);