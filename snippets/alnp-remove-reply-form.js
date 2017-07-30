/**
 * Removes the reply form if outside of the comments container.
 *
 * Change '.comment-respond' according to your theme selector for the response form.
 */
var alnp_remove_comments = auto_load_next_post_params.alnp_remove_comments;

jQuery( document ).ready( function() {
	// Don't do this if looking for comments.
	if ( window.location.href.indexOf( '#comments' ) > -1 ) {
		return;
	}

	// Remove reply form if comments are removed.
	if ( alnp_remove_comments === 'yes' ) {
		jQuery( '.comment-respond' ).remove();
	}
});

jQuery('body').on( 'alnp-post-loaded', function( e, post_title, post_url, post_ID, post_count ) {
	// Remove reply form if comments are removed.
	if ( alnp_remove_comments === 'yes' ) {
		jQuery( '.comment-respond' ).remove();
	}
});
