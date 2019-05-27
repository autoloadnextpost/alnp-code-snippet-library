$(function() {
	$('body').on( 'alnp-post-loaded', function( e, params ) {
		FB.XFBML.parse();
	});
})(jQuery);