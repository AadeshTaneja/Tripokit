(function ($) {
	"use strict";

	//=============================
	//Preloader Start
	//=============================

	$(window).on("load", function () {
		$("#status").fadeOut();
		$("#preloader").delay(500).fadeOut("slow");
		$("body").delay(500).css({ overflow: "visible" });
	});

	//=============================
	// Sticky Start
	//=============================

	$(window).on("scroll", function (event) {
		var scroll = $(window).scrollTop();
		if (scroll < 150) {
			$(".fixed-menu").removeClass("sticky");
		} else {
			$(".fixed-menu").addClass("sticky");
		}
	});

	// //=============================
	// // MOBILE Nav
	// //=============================

	if ($(".mean-menu").length > 0) {
		$(".mean-menu").meanmenu({
			meanScreenWidth: "991",
		});
	}

	//======================
	// NICE SELECT
	//======================

	if ($("select").length > 0) {
		$("select").niceSelect();
	}

	//======================
	// SEARCH POPUP
	//======================

	$(".search-btn").on("click", function () {
		$(".account-dropdown").hide();
		$(".search-popup").fadeToggle(300);
	});


	//======================
	// USER POPUP
	//======================

	$(".user-icon a").on("click", function () {
		$(".search-popup").hide();
		$(".account-dropdown").fadeToggle(300);
	});

	//======================
	// PACKAGE START
	//======================

	$(".pacakge").owlCarousel({
		loop: true,
		margin: 0,
		autoplay: true,
		nav: true,
		dots: false,
		navText: ["<i class='ti-angle-left'>", "<i class='ti-angle-right'>"],
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 1,
			},
			768: {
				items: 2,
			},
			1000: {
				items: 3,
			},
		},
	});

	//======================
	// POPULAR PACKAGE START
	//======================

	$(".pop-pacakge").owlCarousel({
		loop: true,
		margin: 30,
		autoplay: true,
		nav: true,
		dots: false,
		navText: ["<i class='ti-angle-left'>", "<i class='ti-angle-right'>"],
		responsive: {
			0: {
				items: 1,
			},
			480: {
				items: 1.3,
			},
			600: {
				items: 1.3,
			},
			768: {
				items: 2,
			},
			1000: {
				items: 3,
			},
		},
	});

	// ===========================
	// TESTIMONILA START
	// ===========================

	$(".test-caro").owlCarousel({
		loop: true,
		margin: 30,
		dots: true,
		nav: false,
		center: false,
		mouseDrag: true,
		autoplay: false,
		autoplayTimeout: 4000,
		smartSpeed: 800,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 2,
			},
			768: {
				items: 2,
			},
			1000: {
				items: 3,
			},
		},
	});
	

	//=============================
	// Partner slider carousel
	//=============================

	$(".partner-logo").owlCarousel({
		loop: true,
		margin: 30,
		autoplay: true,
		nav: false,
		dots: false,
		responsive: {
			0: {
				items: 2,
			},
			600: {
				items: 3,
			},
			768: {
				items: 4,
			},
			1000: {
				items: 5,
			},
		},
	});

	//======================
	//  Back to Top JS
	//======================

	$("body").append('<div id="toTop" class="back-to-top"><i class="ti-arrow-up"></i></div>');
	$(window).on("scroll", function () {
		if ($(this).scrollTop() != 0) {
			$("#toTop").fadeIn();
		} else {
			$("#toTop").fadeOut();
		}
	});
	$("#toTop").on("click", function () {
		$("html, body").animate({ scrollTop: 0 }, 2000);
		return false;
	});


	// ===============================
	// Contact Form Valid 
	// ===============================

	const form = document.getElementById("form");
	const result = document.getElementById("result");

	form.addEventListener("submit", function (e) {
	const formData = new FormData(form);
	e.preventDefault();
	var object = {};
	formData.forEach((value, key) => {
		object[key] = value;
	});
	var json = JSON.stringify(object);
	result.innerHTML = "Please wait...";

	fetch("https://api.web3forms.com/submit", {
		method: "POST",
		headers: {
		"Content-Type": "application/json",
		Accept: "application/json"
		},
		body: json
	})
		.then(async (response) => {
		let json = await response.json();
		if (response.status == 200) {
			result.innerHTML = json.message;
			result.classList.remove("text-gray-500");
			result.classList.add("text-green");
		} else {
			console.log(response);
			result.innerHTML = json.message;
			result.classList.remove("text-gray-500");
			result.classList.add("text-red");
		}
		})
		.catch((error) => {
		console.log(error);
		result.innerHTML = "Something went wrong!";
		})
		.then(function () {
		form.reset();
		setTimeout(() => {
			result.style.display = "none";
		}, 5000);
		});
	});


	
})(jQuery);


