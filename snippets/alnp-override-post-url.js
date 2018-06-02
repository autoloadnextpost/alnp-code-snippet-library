/**
 * This overrides the next post to load another post instead after the initial post.
 *
 * Set 'overridden_post_url' to the url you want to load instead.
 */
(function($) {
	$('body').on( 'alnp-post-url', function( e, post_count, post_url ) {
		if ( post_count == 0 ) {
			overridden_post_url = "http://www.yourdomain.com/2014/06/02/overridden-post-url/";
		}

		return overridden_post_url;
	});
})(jQuery);;
