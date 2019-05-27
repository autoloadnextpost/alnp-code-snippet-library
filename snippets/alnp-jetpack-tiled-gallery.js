$(function() {
	$('body').on( 'alnp-post-loaded', function( e, params ) {
		var base_url = 'http://mywebsite.com'; // TODO: Change the domain to your site.

		$.getScript( base_url + "/wp-content/plugins/jetpack/modules/tiled-gallery/tiled-gallery/tiled-gallery.js" );
	});
})(jQuery);