$(function() {
	$("#signupForm").submit(function() {
		window.location.href = '/managermall/seller/saveSellerLinkman.do';
		return false;
	});
});