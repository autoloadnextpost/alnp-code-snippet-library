/**
 * Removes the disqus thread if remove comments is enabled in Auto Load Next Post settings.
 */
var alnp_remove_comments = auto_load_next_post_params.alnp_remove_comments;

jQuery( document ).ready( function() {
	// Don't do this if looking for comments.
	if ( window.location.href.indexOf( '#comments' ) > -1 ) {
		return;
	}

	// Remove disqus thread.
	if ( alnp_remove_comments === 'yes' ) {
		jQuery( '#disqus_thread' ).remove();
	}
});

jQuery('body').on( 'alnp-post-loaded', function( e, post_title, post_url, post_ID, post_count ) {
	// Remove disqus thread.
	if ( alnp_remove_comments === 'yes' ) {
		jQuery( '#disqus_thread' ).remove();
	}
});
