/**
 * e.g. Tracking with Google Analytics.
 *
 * You do not need to do it for Google Analytics as it is already in the plugin
 * but you can place others here instead.
 *
 * You can use the following variables to track a post: post_title, post_url and post_id
 */
jQuery('body').on( 'alnp-post-changed', function( e, post_title, post_url, post_id ) {
  ga( 'send', 'pageview', post_url );
});
