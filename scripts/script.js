jQuery('document').ready(function() {
	jQuery('.street').click(function() {
			jQuery('.info').html(jQuery(this).attr('info_text'));
			jQuery('.info').fadeIn();
		}
	);
	jQuery('#close').click(function() {
			jQuery('.info').fadeOut();
		}
	);
});