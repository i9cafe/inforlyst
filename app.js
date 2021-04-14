'use strict';

const app = angular.module('inforlyst', ['ngRoute', 'ui.bootstrap'])

	.controller('MainController', [
		'$scope',
		'$modal',
		'$location',
		function($scope, $modal, $location) {

			/*************************** DEFAULT INFO SETUP ***************************/
			const vm = this;

			/*************************** DEBUGGING MODE ***************************/
			const debug = false; // true or false.

			function __debug_info() {
				const self = arguments;
				debug ? (function() {
					const args = Array.from(self);
					args.unshift('DEBUG');
					console.info.apply(null, args);
				}()) : 0;
			}

			/*************************** FUNCTION LIST ***************************/

			this.moveTosearchResult = () => {
				location.href = "https://i9cafe.github.io/inforlyst/searchResult.html";
			};

			this.openNav = () => {
				document.getElementById("main").style.marginLeft = "25%";
				document.getElementById("mySidebar").style.width = "25%";
				document.getElementById("mySidebar").style.display = "block";
				document.getElementById("openNav").style.display = 'none';
				document.getElementById("search-group").style.marginLeft = "18%";
			};

			this.closeNav = () => {
				document.getElementById("main").style.marginLeft = "0%";
				document.getElementById("mySidebar").style.display = "none";
				document.getElementById("openNav").style.display = "inline-block";
				document.getElementById("search-group").style.marginLeft = "-8%";
			};

			this.openReportModal = () => {

				let parameters;

				function openModal() {
					return $modal.open({
						templateUrl: 'reportModal.html',
						windowClass: 'modal-fullscreen',
						controller: 'ReportModalController',
						controllerAs: 'self',
						backdrop: 'static',
						size: 'sm',
						resolve: {
							parameters: () => {
								return {
									data: parameters || {},
								};
							}
						}
					});
				}

				openModal().result.then(result => {

				}, cancel => {

				});
			};


			this.openInforlystModal = () => {

				let parameters;

				function openModal() {
					return $modal.open({
						templateUrl: 'inforlystModal.html',
						windowClass: 'modal-fullscreen',
						controller: 'InforlystModalController',
						controllerAs: 'self',
						backdrop: 'static',
						size: 'sm',
						resolve: {
							parameters: () => {
								return {
									data: parameters || {},
								};
							}
						}
					});
				}

				openModal().result.then(result => {

				}, cancel => {

				});
			};

			/*************************** SLICK CARDS SLIDER ***************************/

			$(document).ready(function() {

				//alert('123');

				$('.slick-items').slick({

					autoplay: true,

					dots: false,

					speed: 300 /* 이미지가 슬라이딩시 걸리는 시간 */ ,

					infinite: true,

					autoplaySpeed: 3000 /* 이미지가 다른 이미지로 넘어 갈때의 텀 */ ,

					arrows: true,

					prevArrow: "<span class='arrow prev' style='left:-60px;'>&#10094;</span>",
					nextArrow: "<span class='arrow next' style='right:-60px;'>&#10095;</span>",


					slidesToShow: 4,

					slidesToScroll: 1,

					fade: false

				});

			});

			/*************************** WORLD MAP ***************************/



		}
	])

	.controller('IndexController', [
		'$scope',
		function($scope) {

			/*************************** DEFAULT INFO SETUP ***************************/
			const vm = this;

			const USER_ID = 'asdf';
			const USER_PW = 1234;

			/*************************** FUNCTION LIST ***************************/
			this.login = () => {

				const id = document.getElementById("id");
				const pw = document.getElementById("pw");

				if (String(id.value) === null || String(id.value).trim() === '') {
					alert("Please enter your ID");
					return;
				} else if (String(pw.value) === null || String(pw.value).trim() === '') {
					alert("Please enter your Password");
					return;
				} else if (String(id.value).toLowerCase() !== USER_ID || Number(pw.value) !== USER_PW) {

					alert("Login information provided does not match");
					return;

				} else {
					location.href = "main.html";
				}
			};

		}
	])

	.controller('CustomerController', [
		'$scope',
		'$modal',
		function($scope, $modal) {

			/*************************** DEFAULT INFO SETUP ***************************/
			const vm = this;

			/*************************** FUNCTION LIST ***************************/

			this.moveToNewApplication = () => {
				location.href = "https://i9cafe.github.io/inforlyst/new_application.html";
			};

			this.moveToNewReport = () => {
				location.href = "https://i9cafe.github.io/inforlyst/new_report.html";
			};

			this.moveTosearchResult = () => {
				location.href = "https://i9cafe.github.io/inforlyst/searchResult.html";
			};

			this.moveToBlankPage = () => {
				location.href = "https://i9cafe.github.io/inforlyst/blank.html";
			};

			this.moveToReceivedPage = () => {
				location.href = "https://i9cafe.github.io/inforlyst/receivedReport.html";
			};

			this.openNav = () => {
				document.getElementById("main").style.marginLeft = "25%";
				document.getElementById("mySidebar").style.width = "25%";
				document.getElementById("mySidebar").style.display = "block";
				document.getElementById("openNav").style.display = 'none';
				document.getElementById("search-group").style.marginLeft = "18%";
			};

			this.closeNav = () => {
				document.getElementById("main").style.marginLeft = "0%";
				document.getElementById("mySidebar").style.display = "none";
				document.getElementById("openNav").style.display = "inline-block";
				document.getElementById("search-group").style.marginLeft = "-8%";
			};

			this.openReportModal = () => {

				let parameters;

				function openModal() {
					return $modal.open({
						templateUrl: 'reportModal.html',
						windowClass: 'modal-fullscreen',
						controller: 'ReportModalController',
						controllerAs: 'self',
						backdrop: 'static',
						size: 'sm',
						resolve: {
							parameters: () => {
								return {
									data: parameters || {},
								};
							}
						}
					});
				}

				openModal().result.then(result => {

				}, cancel => {

				});
			};


			this.openInforlystModal = () => {

				let parameters;

				function openModal() {
					return $modal.open({
						templateUrl: 'inforlystModal.html',
						windowClass: 'modal-fullscreen',
						controller: 'InforlystModalController',
						controllerAs: 'self',
						backdrop: 'static',
						size: 'sm',
						resolve: {
							parameters: () => {
								return {
									data: parameters || {},
								};
							}
						}
					});
				}

				openModal().result.then(result => {

				}, cancel => {

				});
			};

			this.openEnterpriseReportModal = () => {

				let parameters;

				function openModal() {
					return $modal.open({
						templateUrl: 'm_enterpriseReportModal.html',
						windowClass: 'modal-fullscreen',
						controller: 'EnterpriseReportModalController',
						controllerAs: 'self',
						backdrop: 'static',
						size: 'sm',
						resolve: {
							parameters: () => {
								return {
									data: parameters || {},
								};
							}
						}
					});
				}

				openModal().result.then(result => {

				}, cancel => {

				});
			};

			this.openMarketReportModal = () => {

				let parameters;

				function openModal() {
					return $modal.open({
						templateUrl: 'm_marketReportModal.html',
						windowClass: 'modal-fullscreen',
						controller: 'MarketReportModalController',
						controllerAs: 'self',
						backdrop: 'static',
						size: 'sm',
						resolve: {
							parameters: () => {
								return {
									data: parameters || {},
								};
							}
						}
					});
				}

				openModal().result.then(result => {

				}, cancel => {

				});
			};

			this.openMacroeconomicReportModal = () => {

				let parameters;

				function openModal() {
					return $modal.open({
						templateUrl: 'm_macroeconomicReportModal.html',
						windowClass: 'modal-fullscreen',
						controller: 'MacroeconomicReportModalController',
						controllerAs: 'self',
						backdrop: 'static',
						size: 'sm',
						resolve: {
							parameters: () => {
								return {
									data: parameters || {},
								};
							}
						}
					});
				}

				openModal().result.then(result => {

				}, cancel => {

				});
			};

			/*************************** SLICK CARDS SLIDER ***************************/

			$(document).ready(function() {

				//alert('123');

				$('.slick-items').slick({

					autoplay: true,

					dots: false,

					speed: 300 /* 이미지가 슬라이딩시 걸리는 시간 */ ,

					infinite: true,

					autoplaySpeed: 3000 /* 이미지가 다른 이미지로 넘어 갈때의 텀 */ ,

					arrows: true,

					prevArrow: "<span class='arrow prev' style='left:-60px;'>&#10094;</span>",
					nextArrow: "<span class='arrow next' style='right:-60px;'>&#10095;</span>",


					slidesToShow: 4,

					slidesToScroll: 1,

					fade: false

				});

			});

		}
	])

	.controller('ReportModalController', [
		'$scope',
		'$modalInstance',
		'parameters',
		'$location',
		function($scope, $modalInstance, parameters, $location) {

			/*************************** DEFAULT INFO SETUP ***************************/
			const self = this;

			self.parameters = angular.copy(parameters) || {};

			$scope.moveToReportInfoPage = () => {

				location.href = "https://i9cafe.github.io/inforlyst/report_info_page.html";

				$modalInstance.close();
			};



		}
	])

	.controller('InforlystModalController', [
		'$scope',
		'$modalInstance',
		'parameters',
		'$location',
		function($scope, $modalInstance, parameters, $location) {

			/*************************** DEFAULT INFO SETUP ***************************/
			const self = this;

			self.parameters = angular.copy(parameters) || {};

			$scope.moveToInforlystInfoPage = () => {

				location.href = "https://i9cafe.github.io/inforlyst/inforlyst_info_page.html";

				$modalInstance.close();
			};



		}
	])

	.controller('EnterpriseReportModalController', [
		'$scope',
		'$modalInstance',
		'parameters',
		'$location',
		function($scope, $modalInstance, parameters, $location) {

			/*************************** DEFAULT INFO SETUP ***************************/
			const self = this;

			self.parameters = angular.copy(parameters) || {};

			$scope.moveToEnterpriseReport = () => {

				location.href = "https://i9cafe.github.io/inforlyst/d_enterprise_report.html";

				$modalInstance.close();
			};



		}
	])

	.controller('MarketReportModalController', [
		'$scope',
		'$modalInstance',
		'parameters',
		'$location',
		function($scope, $modalInstance, parameters, $location) {

			/*************************** DEFAULT INFO SETUP ***************************/
			const self = this;

			self.parameters = angular.copy(parameters) || {};

			$scope.moveToMarketReport = () => {

				location.href = "https://i9cafe.github.io/inforlyst/d_market_report.html";

				$modalInstance.close();
			};



		}
	])

	.controller('MacroeconomicReportModalController', [
		'$scope',
		'$modalInstance',
		'parameters',
		'$location',
		function($scope, $modalInstance, parameters, $location) {

			/*************************** DEFAULT INFO SETUP ***************************/
			const self = this;

			self.parameters = angular.copy(parameters) || {};

			$scope.moveToMacroeconomicReport = () => {

				location.href = "https://i9cafe.github.io/inforlyst/d_macroeconomic_report.html";

				$modalInstance.close();
			};



		}
	]);