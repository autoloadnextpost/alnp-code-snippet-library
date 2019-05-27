/**
 * This limits the amount of posts that load per session.
 *
 * Set 'post_limit' to the amount of posts a session can load.
 */
jQuery('body').on( 'alnp-post-loaded', function( e, params ) {
	var post_limit = 4;

  	if ( params.post_count == post_limit ) {
		// Post count has reached maxiumum amount. No more posts will load.
		stop_reading = true;

		jQuery( nav_container ).remove(); // Remove post navigation.

		return;
	}
});
