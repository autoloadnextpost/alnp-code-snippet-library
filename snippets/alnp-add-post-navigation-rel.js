/**
 * This snippet is useful if the theme post navigation is missing the use of rel="prev".
 *
 * Simply change "div.previous-post" to your themes previous post theme selector.
 */

// Runs on initial load of the post.
jQuery( document ).ready( function() {
	jQuery( 'div.previous-post' ).find( 'a' ).attr( 'rel', 'prev' );
});

// Runs when triggered.
jQuery('body').on( 'alnp-post-loaded', function( e ) {
	jQuery( 'div.previous-post' ).find( 'a' ).attr( 'rel', 'prev' );
});
