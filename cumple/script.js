$(function () {
	console.log("dom initialized");
	const numModals = $(".modal").length;
	$(".next").on("click", function () {
		const nextQuery = `.modal:eq(${($(this).parent().index() + 1) % numModals})`;
		$(this)
			.parent()
			.addClass("exit")
			.removeClass("active")
			.queue(function (next) {
				$(this).removeClass("exit active");
				next();
			});
		$(nextQuery)
			.delay(750)
			.queue(function (n) {
				$(this).addClass("active");
				n();
			});
	});
});
