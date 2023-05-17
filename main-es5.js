(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-mainheader></app-mainheader>\n<router-outlet></router-outlet>\n<app-mainfooter></app-mainfooter>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/forget-password/forget-password.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/forget-password/forget-password.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container shadow p-3 mb-5 bg-light rounded my-5\">\n  <!-- Alert when information is not sent to server -->\n  <div *ngIf=\"isBlank\" class=\"alert alert-danger\" role=\"alert\">\n      Email hoặc số điện thoại hoặc mã Capcha không được bỏ trống.\n    </div>\n    <div *ngIf=\"isInvalidInfo\" class=\"alert alert-danger\" role=\"alert\">\n      Email hoặc số điện thoại không đúng.\n    </div>\n    <div *ngIf=\"isInvalidCapcha\" class=\"alert alert-danger\" role=\"alert\">\n        Mã Capcha không đúng.\n      </div>\n  <div class=\"m-3\">\n    <h3>Quên mật khẩu ? </h3>\n    <!-- Place to input an email or a phone number, then assign it with variable name userEmailOrPhone -->\n    <div class=\"form-row justify-content-center\">\n      <div class=\"form-label-group col-md-4 my-4\">\n        <input type=\"text\" class=\"form-control\" id=\"inputEmailOrPhone\" placeholder=\"Email đăng kí hoặc số điện thoại\"\n          autofocus=\"\" [(ngModel)]=\"userEmailorPhone\">\n        <label for=\"inputEmailOrPhone\">Email hoặc số điện thoại: </label>\n      </div>\n    </div>\n    <!-- Place for capcha image  -->\n    <div class=\"form-row d-flex align-items-center flex-column\">\n      <img src=\"{{capChaObject.imageLocation}}\" height=180 width=250>\n    </div>\n    <!-- Place to input capchacode, this code then will be assigned to variable name capChaCode -->\n    <div class=\"form-row justify-content-center\">\n      <div class=\"form-group col-md-3\">\n        <div class=\"input-group mx-auto my-3\">\n          <input class=\"form-control text-center\" type=\"text\" placeholder=\"Hãy nhập mã capcha trên hình\" autofocus=\"\"\n            [(ngModel)]=\"capChaInput\">\n        </div>\n      </div>\n    </div>\n    <div class=\"form-row d-flex align-items-center flex-column\">\n      <p>Chúng tôi sẽ gửi thông tin về việc thay đổi mật khẩu vào Email hoặc số điện thoại bạn đã nhập.</p>\n    </div>\n    <!-- Submit button -->\n    <div class=\"form-row justify-content-center my-3 \">\n      <button type=\"button\" class=\"btn purple-theme btn-lg\" (click)=\"onSubmit()\">Tạo lại mật khẩu mới</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/mainfooter/mainfooter.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/mainfooter/mainfooter.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer mt-auto py-3\">\n  <div class=\"container-fluid\">\n    <div class=\"row d-flex align-items-center flex-column\">\n      <div class=\"my-1\">\n        <a href=\"\">\n          <i class=\"fab fa-facebook-f fa-2x mx-4\"></i>\n        </a>\n        <a href=\"\">\n          <i class=\"fab fa-instagram fa-2x mx-4\"></i>\n        </a>\n        <a href=\"\">\n          <i class=\"fab fa-twitter fa-2x mx-4\"></i>\n        </a>\n        <a href=\"\">\n          <i class=\"fas fa-envelope fa-2x mx-4\"></i>\n        </a>\n        <a href=\"\">\n          <i class=\"fab fa-google-play fa-2x mx-4\"></i>\n        </a>\n        <a href=\"\">\n          <i class=\"fab fa-apple fa-2x mx-4\"></i>\n        </a>\n      </div>\n      <div class=\"my-1\" id=\"footer-menu\">\n        <a class=\"pr-3\" style=\"color:#744FC4\" href=\"#\">Tuyển dụng</a>\n        <a class=\"pr-3\" style=\"color:#744FC4\" href=\"#\">Hỏi đáp</a>\n        <a class=\"pr-3\" style=\"color:#744FC4\" href=\"#\">Điều khoản</a>\n        <a class=\"pr-3\" style=\"color:#744FC4\" href=\"#\">Truyền thông</a>\n        <a class=\"pr-3\" style=\"color:#744FC4\" href=\"#\">Trợ giúp</a>\n      </div>\n      <div class=\"my-1\">\n        <a class=\"navbar-brand ml-4\" href=\"#\">\n          <img src=\"./assets/images/PureLogoVidiDOL.png\" width=\"60\" height=\"60\" alt=\"VidiDOL Logo\">\n          <div class=\"logo-text ml-2\">VidiDOL</div>\n        </a>\n      </div>\n      <div class=\"my-1\">© 2019 - Bản quyền của Công Ty VidiDOL</div>\n    </div>\n  </div>\n</footer>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/mainheader/mainheader.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/mainheader/mainheader.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"navbar navbar-light bg-light\">\n  <!-- Logo -->\n  <a class=\"navbar-brand py-0\" href=\"#\">\n    <img src=\"./assets/images/PureLogoVidiDOL.png\" width=\"40\" height=\"40\" alt=\"VidiDOL Logo\">\n    <div class=\"logo-text ml-2\">VidiDOL</div>\n  </a>\n  <img *ngIf=\"loginService.isLoggedIn\" src=\"{{user.avatarLocation}}\"\n    class=\"rounded-circle offset-4 offset-md-6 offset-lg-8 \" width=\"50\" height=\"50\" />\n  <!--notification-->\n  <div *ngIf=\"loginService.isLoggedIn\" class=\"dropdown\">\n    <a class=\"\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" (click)=\"userViewNotiClick()\"><i\n        class=\"fa fa-bell fa-2x \"></i></a>\n\n\n    <span id=\"notification_count\">{{userNotifications.length}}</span>\n    <!-- Loop notification element-->\n    <div class=\"dropdown-menu dropdown-menu-right \">\n\n      <a *ngFor=\"let userNotification of userNotifications\" class=\"dropdown-item\"\n        routerLink=\"{{userNotification.link}}\">\n        <span class=\"font-weight-bold\">{{userNotification.from}}:</span>\n        {{userNotification.message}}\n      </a>\n\n\n    </div>\n  </div>\n  <form class=\"form-inline\">\n\n    <button *ngIf=\"!loginService.isLoggedIn\" class=\"btn btn-outline-success btn-sm mr-3\" type=\"button\"\n      data-toggle=\"modal\" data-target=\"#SignInModal\">Đăng nhập</button>\n    <button *ngIf=\"!loginService.isLoggedIn\" class=\"btn btn-outline-danger btn-sm\" type=\"button\" data-toggle=\"modal\"\n      data-target=\"#SignUpModal\">Đăng\n      kí</button>\n    <button *ngIf=\"loginService.isLoggedIn\" class=\"btn btn-outline-secondary btn-sm\" type=\"button\"\n      (click)=\"signOutSuccess()\">Đăng\n      xuất</button>\n  </form>\n\n  <!-- Modal Sign In -->\n  <div class=\"modal fade\" id=\"SignInModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"SignInModalTitle\"\n    aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-scrollable\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-body\">\n          <form class=\"form-signin\">\n            <div class=\"text-center mb-4\">\n              <img class=\"mb-4\" src=\"./assets/images/PureLogoVidiDOL.png\" alt=\"\" width=\"72\" height=\"72\">\n              <h1 class=\"h3 mb-3 font-weight-normal\">Đăng nhập</h1>\n              <p>bằng tài khoản VidiDOL</p>\n            </div>\n            <div class=\"form-label-group\">\n              <input type=\"email\" id=\"sign-in-email\" class=\"form-control\" placeholder=\"Email đăng nhập\" required=\"\"\n                autofocus=\"\">\n              <label for=\"sign-in-email\">Email đăng nhập</label>\n            </div>\n\n            <div class=\"form-label-group\">\n              <input type=\"password\" id=\"sign-in-password\" class=\"form-control\" placeholder=\"Mật khẩu\" required=\"\">\n              <label for=\"sign-in-password\">Mật khẩu</label>\n            </div>\n\n            <div class=\"checkbox mb-1\">\n              <label>\n                <input type=\"checkbox\" value=\"remember-me\"> Ghi nhớ đăng nhập\n              </label>\n            </div>\n            <div class=\"container-fluid\">\n              <div class=\"row mb-1\">\n\n                <div class=\"col-md-8\">\n                  <button class=\"btn btn-md btn-success btn-block\" type=\"submit\" (click)=\"signInSuccess()\">Đăng\n                    nhập</button>\n                </div>\n\n                <div class=\"col-md-2\">\n                  <a href=\"#\" class=\"fab fa-facebook-f sign-in-facebook fa-fw \">\n                    <!-- <i class=\"fab fa-facebook-square\"></i> -->\n                  </a>\n                </div>\n\n                <div class=\"col-md-2\">\n                  <a href=\"#\" class=\"fab fa-instagram sign-in-instagram fa-fw\">\n                    <!-- <i class=\"fab fa-instagram fa-2x\"></i> -->\n                  </a>\n                </div>\n\n              </div>\n              <div class=\"row\">\n                <div class=\"footer-app-content-actions\">\n                  <div>\n                    <a routerLink=\"forgetpassword\" class=\"btn__tertiary--medium action__btn\">Quên mật khẩu ?</a>\n                  </div>\n                  <p>Chưa có tài khoản VidiDOL ?\n                    <a href=\"\" tabindex=\"0\">Đăng kí ngay</a>\n                  </p>\n                </div>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Modal Sign Up -->\n  <div class=\"modal fade\" id=\"SignUpModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"SignUpModalTitle\"\n    aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-scrollable\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-body\">\n          <form class=\"form-signin\">\n            <div class=\"text-center mb-4\">\n              <img class=\"mb-4\" src=\"./assets/images/PureLogoVidiDOL.png\" alt=\"\" width=\"72\" height=\"72\">\n              <h1 class=\"h3 mb-3 font-weight-normal\">Đăng kí</h1>\n              <p>Xin hãy điền thông tin để tạo tài khoản</p>\n            </div>\n            <div class=\"form-label-group\">\n              <input type=\"email\" id=\"sign-up-email\" class=\"form-control\" placeholder=\"Email đăng kí\" required=\"\"\n                autofocus=\"\">\n              <label for=\"sign-up-email\">Email</label>\n            </div>\n\n            <div class=\"form-label-group\">\n              <input type=\"password\" id=\"sign-up-password\" class=\"form-control\" placeholder=\"Mật khẩu\" required=\"\">\n              <label for=\"sign-up-password\">Mật khẩu</label>\n            </div>\n\n            <div class=\"form-label-group\">\n              <input type=\"password\" id=\"sign-up-password-confirm\" class=\"form-control\" placeholder=\"Nhập lại mật khẩu\"\n                required=\"\">\n              <label for=\"sign-up-password-confirm\">Nhập lại mật khẩu</label>\n            </div>\n\n            <div class=\"checkbox mb-3\">\n              <label>\n                <input type=\"checkbox\" value=\"remember-me\">Tôi đồng ý với điều khoản đăng kí.\n              </label>\n            </div>\n            <button class=\"btn btn-md btn-primary btn-block\" type=\"submit\" (click)=\"signInSuccess()\">Đăng kí</button>\n            <button class=\"btn btn-md btn-facebook btn-block\" type=\"submit\" (click)=\"signInSuccess()\">\n              <span>\n                <i class=\"fab fa-facebook-f\"></i>\n              </span>Đăng kí bằng Facebook\n            </button>\n            <button class=\"btn btn-md btn-instagram btn-block\" type=\"submit\" (click)=\"signInSuccess()\">\n              <span>\n                <i class=\"fab fa-instagram fa-2x\"></i>\n              </span>Đăng kí bằng Instagram\n            </button>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</header>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/mainpage/mainpage.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/mainpage/mainpage.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\"\n    style=\" width:100%; background: black\">\n    <div class=\"carousel-inner\">\n      <div class=\"carousel-item active\">\n        <img src=\"./assets/images/bigbanner1.png\" class=\"d-block w-100\" alt=\"...\">\n      </div>\n      <div class=\"carousel-item\">\n        <img src=\"./assets/images/bigbanner2.png\" class=\"d-block w-100\" alt=\"...\">\n      </div>\n      <div class=\"carousel-item\">\n        <img src=\"./assets/images/bigbanner3.png\" class=\"d-block w-100\" alt=\"...\">\n      </div>\n    </div>\n    <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </div>\n</div>\n<div class=\"container\">\n  <form class=\"m-4\">\n    <div class=\"form-group row justify-content-md-center\">\n      <div class=\"input-group col-md-8\">\n        <input class=\"form-control form-control-lg\" type=\"search\" placeholder=\"Tên thần tượng...\" aria-label=\"Search\">\n        <div class=\"input-group-append\">\n          <button type=\"submit\" class=\"btn btn-primary\">\n            <i class=\"fas fa-search\"></i>\n          </button>\n        </div>\n      </div>\n    </div>\n  </form>\n  <div class=\"row\">\n    <!-- Categories -->\n    <aside class=\"col-md-2 p-2 bg-light sidebar\">\n      <h5 class=\"sidebar-heading\">Phân loại</h5>\n      <div>\n        <ul class=\"nav flex-column\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link active\" href=\"#\">Tất cả</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\">Nổi bật</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\">Âm nhạc</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\">Điện ảnh</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\">Truyền hình</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\">Youtuber</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\">Thể thao</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\">Game thủ</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\">Người mẫu</a>\n          </li>\n        </ul>\n      </div>\n    </aside>\n    <div class=\"col-md-10 mb-3 row\">\n      <!-- Sorting -->\n      <div class=\"dropdown col-md-2 offset-md-10 mb-2\">\n        <button class=\"btn btn-secondary btn-sm dropdown-toggle\" type=\"button\" id=\"dropdownMenu2\" data-toggle=\"dropdown\"\n          aria-haspopup=\"true\" aria-expanded=\"false\">\n          Sắp xếp theo\n        </button>\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu2\">\n          <button class=\"dropdown-item active\" type=\"button\">Mặc định</button>\n          <button class=\"dropdown-item\" type=\"button\">Giá cao đến thấp</button>\n          <button class=\"dropdown-item\" type=\"button\">Giá thấp đến cao</button>\n          <button class=\"dropdown-item\" type=\"button\">Follower tăng dần</button>\n          <button class=\"dropdown-item\" type=\"button\">Follower giảm dần</button>\n        </div>\n      </div>\n\n      <!-- Main Area showing Idols -->\n      <div class=\"col-6 col-md-3 mb-5\" *ngFor=\"let star of stars\">\n        <a routerLink=\"starprofile\" >\n          <img src=\"{{'./assets/images/userAvatar/' + star.id + '/featurepic.jpg'}}\" width=180 height=250>  \n        </a>\n        <a class='mail-icon'(click)=\"onSelect(star)\"><i class=\"fas fa-envelope fa-lg\"></i></a>\n        <a class=\"anchor-star-name\" href=\"\">\n          <div class=\"star-name\">{{star.name}}</div>\n        </a>\n        <div class=\"star-price\">{{star.price | currency:'VND':'symbol':'4.0':'vi'}}</div>\n      </div>\n      <!-- Pagination -->\n      <nav aria-label=\"Page navigation example\" class=\"nav-paging-main\">\n        <ul class=\"pagination justify-content-end\">\n          <li class=\"page-item disabled\">\n            <a class=\"page-link\" href=\"#\" tabindex=\"-1\" aria-disabled=\"true\">Đầu</a>\n          </li>\n          <li class=\"page-item disabled\">\n            <a class=\"page-link\" href=\"#\" tabindex=\"-1\" aria-disabled=\"true\">Trước</a>\n          </li>\n          <li class=\"page-item active\"><a class=\"page-link\" href=\"#\">1</a></li>\n          <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n          <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n          <li class=\"page-item disabled\"><a class=\"page-link\" href=\"#\">...</a></li>\n          <li class=\"page-item\">\n            <a class=\"page-link\" href=\"#\">Sau</a>\n          </li>\n          <li class=\"page-item\">\n            <a class=\"page-link\" href=\"#\">Cuối</a>\n          </li>\n        </ul>\n      </nav>\n    </div>\n  </div>\n  <!-- Order modal -->\n  <div class=\"modal fade\" id=\"OrderModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"OrderModalTitle\" aria-hidden=\"true\">\n      <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <img src=\"{{'./assets/images/userAvatar/' + selectedStar.id + '/featurepic.jpg'}}\"class=\"rounded-circle\" width=\"50\" height=\"50\" />\n            <h4 class=\"ml-2 mt-2\" id=\"OrderModalTitle\">{{selectedStar.name}}</h4>\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n          <div class=\"modal-body\">\n            <div class=\"row\">\n              <div class=\"col-6\">\n                <span class=\"font-weight-bold\">From: </span>\n                {{selectedStar.name}}\n              </div>\n              <div class=\"col-6\">\n                <span class=\"font-weight-bold\">To: </span>\n                  {{currentUser.fullname}}\n              </div>\n            </div>\n            <div class=\"row mt-4\">\n              <div class='col-8'>\n                <span class=\"font-weight-bold\">Email: </span>  \n                <input type=\"email\" class=\"form-control\" [(ngModel)]=\"userRequest.toEmail\" id=\"InputEmail\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\n              </div>\n            </div>\n            <div class=\"row mt-4\">\n              <div class='col-12'>\n                <span class=\"font-weight-bold\">Message: </span>  \n                <textarea  [attr.maxlength]=\"maxChars\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"userRequest.message\" class=\"form-control\" placeholder=\"Write your message to the star ...\" ></textarea>\n                <label class=\"nopadding clrlbl float-right\"> Characters Remaining: {{userRequest.message.length}}/{{maxChars}}</label>\n              </div>\n            </div>\n          </div>\n          <div class=\"modal-footer\">\n            <!-- Maybe in future we will have the price included in star profile -->\n            <div class=\"col-8\">\n              <select class=\"w-25 h-50 \">\n                <option value=\"10$\">10$</option>\n                <option value=\"50$\">50$</option>\n                <option value=\"100$\">100$</option>\n                <option value=\"500$\">500$</option>\n              </select></div>\n            <button type=\"button\" class=\"btn btn-purple w-50\" routerLink='/payment'data-dismiss=\"modal\" aria-label=\"Close\">Payment</button>\n          </div>\n        </div>\n      </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/my-profile/my-profile.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/my-profile/my-profile.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  my-profile works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/page-not-found/page-not-found.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/page-not-found/page-not-found.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  404 PAGE NOT FOUND!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/payment-process/payment-process.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/payment-process/payment-process.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  payment-process works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/request-create/request-create.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/request-create/request-create.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  request-create works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/reset-password/reset-password.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/reset-password/reset-password.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container shadow p-3 mb-5 bg-light rounded my-5\">\n  <!-- Alert when information is not sent to server -->\n  <div *ngIf=\"isBlank\" class=\"alert alert-danger\" role=\"alert\">\n    Mật khẩu mới, mật khẩu xác nhận hoặc mã xác nhận không được bỏ trống.\n  </div>\n  <div *ngIf=\"isPassNotMatch\" class=\"alert alert-danger\" role=\"alert\">\n    Mật khẩu mới và mật khẩu xác nhận phải giống nhau.\n  </div>\n  <div *ngIf=\"isCodeNotMatch\" class=\"alert alert-danger\" role=\"alert\">\n    Mã xác nhận không đúng.\n  </div>\n  <div class=\"m-5\">\n    <h3 class=\"my-5\">Thiết lập lại mật khẩu </h3>\n    <!-- Place to input new password -->\n    <div class=\"form-row justify-content-center\">\n      <div class=\"form-label-group col-md-8 my-2\">\n        <input type=\"password\" class=\"form-control\" id=\"newPassword\" placeholder=\"Hãy nhập mật khẩu mới\" autofocus=\"\"\n          [(ngModel)]=\"newPass\" aria-describedby=\"passwordHelp\">\n        <label for=\"inputEmailOrPhone\">Mật khẩu mới: </label>\n        <small id=\"passwordHelp\" class=\"form-text text-muted\">Mật khẩu nên có độ dài từ 8-16 kí tự bao gồm số, ký tự đặt\n          biệt, chữ in hoa và in thường</small>\n      </div>\n    </div>\n    <div class=\"form-row justify-content-center\">\n      <div class=\"form-label-group col-md-8 mb-2 mt-3\">\n        <input type=\"password\" class=\"form-control\" id=\"confirmNewPassword\"\n          placeholder=\"Hãy nhập mật khẩu mới một lần nữa\" autofocus=\"\" [(ngModel)]=\"confirmPass\"\n          aria-describedby=\"passwordHelp\">\n        <label for=\"confirmNewPassword\">Xác nhận mật khẩu mới: </label>\n        <small id=\"passwordHelp\" class=\"form-text text-muted\">Mật khẩu nên có độ dài từ 8-16 kí tự bao gồm số, ký tự đặt\n          biệt, chữ in hoa và in thường</small>\n      </div>\n    </div>\n    <div class=\"form-row justify-content-center\">\n      <div class=\"form-label-group col-md-8 mt-4 mb-5\">\n        <input type=\"text\" class=\"form-control\" id=\"securityCodeInput\"\n          placeholder=\"Hãy nhập mã đã được gửi sang mail hoặc số điện thoại\" autofocus=\"\" [(ngModel)]=\"securityCode\">\n        <label for=\"securityCodeInput\">Mã xác nhận: </label>\n      </div>\n    </div>\n    <!-- Submit button -->\n    <div class=\"form-row justify-content-center my-3 \">\n      <button type=\"button\" class=\"btn purple-theme btn-lg\" (click)=\"SubmitPass()\">Tạo lại mật khẩu mới</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/star-profile/star-profile.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/star-profile/star-profile.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"container\">\n    <div class=\"section-1 m-3\">\n      <div class=\"row m-2\">\n        <div class=\"col-md-4\">\n          <div class=\"star-avatar d-flex justify-content-center\">\n            <img src=\"./assets/images/userAvatar/1/square-avatar.jpg\" class=\"rounded-circle img-thumbnail\"\n              alt=\"Cinque Terre\" width=\"288\" height=\"288\">\n          </div>\n          <div class=\" mt-4 p-2 border border-primary rounded d-flex flex-column\">\n            <button class=\"btn btn-primary m-1\" href=\"#\" onclick=\"return false;\">Gửi tin nhắn cho thần tượng</button>\n            <a class=\"btn btn-primary m-1\" data-toggle=\"collapse\" href=\"#commentsOnStar\" role=\"button\"\n              aria-expanded=\"false\" aria-controls=\"commentsOnStar\">Bình luận</a>\n            <div class=\"collapse\" id=\"commentsOnStar\">\n              <div class=\"card card-body\">\n                Cảm ơn Chú Hoài Linh.\n              </div>\n            </div>\n            <a class=\"btn btn-primary m-1\" data-toggle=\"collapse\" href=\"#starResponseRate\" role=\"button\"\n              aria-expanded=\"false\" aria-controls=\"starResponseRate\">Độ phản hồi</a>\n            <div class=\"collapse\" id=\"starResponseRate\">\n              <div class=\"card card-body\">\n                Phản hồi khá là nhanh đấy.\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-md-6 offset-md-2\">\n          <div class=\"h3\">Intro Video</div>\n          <div class=\"embed-responsive embed-responsive-1by1\">\n            <iframe [src]='starprofile.featureVideoUrl | safe : \"resourceUrl\"' frameborder=\"0\"\n              allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"section-2 m-3\">\n      <div class=\"h3 d-flex justify-content-center\">{{starprofile.displayName}}</div>\n      <div class=\"row\">\n        {{starprofile.description}}\n      </div>\n    </div>\n\n    <div class=\"section-3\">\n      <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link active\" id=\"home-tab\" data-toggle=\"tab\" href=\"#home\" role=\"tab\" aria-controls=\"home\"\n            aria-selected=\"true\">Gửi Fan</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" id=\"profile-tab\" data-toggle=\"tab\" href=\"#profile\" role=\"tab\" aria-controls=\"profile\"\n            aria-selected=\"false\">Cá Nhân</a>\n        </li>\n      </ul>\n      <div class=\"tab-content\" id=\"myTabContent\">\n        <div class=\"tab-pane fade show active\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\n          <div class=\"row\">\n            <div *ngFor=\"let video of starprofile.listOfRequestedVideos\" class=\"card col-md-4 p-2\">\n              <img src=\"{{video.thumbnail}}\" class=\"card-img-top\"\n                alt=\"...\">\n              <div class=\"card-body\">\n                <h5 class=\"card-title\">{{video.title}}</h5>\n                <p class=\"card-text\">{{video.subtitle}}</p>\n                <a href=\"#\" class=\"btn btn-primary\">Thả tim</a>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"tab-pane fade\" id=\"profile\" role=\"tabpanel\" aria-labelledby=\"profile-tab\">\n          <div class=\"row\">\n            <div *ngFor=\"let video of starprofile.listOfSelfVideos\" class=\"card col-md-4 p-2\">\n              <img src=\"{{video.thumbnail}}\" class=\"card-img-top\" alt=\"...\">\n              <div class=\"card-body\">\n                <h5 class=\"card-title\">2 tim</h5>\n                <p class=\"card-text\">{{video.title}}</p>\n                <a href=\"#\" class=\"btn btn-primary\">Thả tym</a>\n                <a href=\"#\" class=\"btn btn-primary ml-1\">Bình luận</a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- Save for later - Maybe Relating Artist -->\n    <div class=\"section-4\">\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/reset-password/reset-password.component */ "./src/app/components/reset-password/reset-password.component.ts");
/* harmony import */ var _components_mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/mainpage/mainpage.component */ "./src/app/components/mainpage/mainpage.component.ts");
/* harmony import */ var _components_star_profile_star_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/star-profile/star-profile.component */ "./src/app/components/star-profile/star-profile.component.ts");
/* harmony import */ var _components_payment_process_payment_process_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/payment-process/payment-process.component */ "./src/app/components/payment-process/payment-process.component.ts");
/* harmony import */ var _components_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/my-profile/my-profile.component */ "./src/app/components/my-profile/my-profile.component.ts");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "./src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var _components_mainheader_mainheader_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/mainheader/mainheader.component */ "./src/app/components/mainheader/mainheader.component.ts");
/* harmony import */ var _components_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/forget-password/forget-password.component */ "./src/app/components/forget-password/forget-password.component.ts");











var routes = [
    { path: '', component: _components_mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_4__["MainpageComponent"] },
    { path: 'starprofile', component: _components_star_profile_star_profile_component__WEBPACK_IMPORTED_MODULE_5__["StarProfileComponent"] },
    { path: 'payment', component: _components_payment_process_payment_process_component__WEBPACK_IMPORTED_MODULE_6__["PaymentProcessComponent"] },
    { path: 'myprofile', component: _components_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_7__["MyProfileComponent"] },
    { path: 'notification/:id', component: _components_mainheader_mainheader_component__WEBPACK_IMPORTED_MODULE_9__["MainheaderComponent"] },
    { path: 'forgetpassword', component: _components_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_10__["ForgetPasswordComponent"] },
    { path: 'resetpassword', component: _components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_3__["ResetPasswordComponent"] },
    { path: '**', component: _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: auto;\n  max-width: 680px;\n  padding: 0 15px;\n}\n.footer {\n  background-color: #f5f5f5;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3ZpZGlkb2wvdmlkaWRvbC9zcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0NKO0FERUE7RUFDSSx5QkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgd2lkdGggICAgOiBhdXRvO1xuICAgIG1heC13aWR0aDogNjgwcHg7XG4gICAgcGFkZGluZyAgOiAwIDE1cHg7XG59XG5cbi5mb290ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG59XG5cbiIsIi5jb250YWluZXIge1xuICB3aWR0aDogYXV0bztcbiAgbWF4LXdpZHRoOiA2ODBweDtcbiAgcGFkZGluZzogMCAxNXB4O1xufVxuLmZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'VididolWebApp';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_locales_vi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/locales/vi */ "./node_modules/@angular/common/locales/vi.js");
/* harmony import */ var _angular_common_locales_vi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_vi__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_userlogin_userlogin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/userlogin/userlogin.component */ "./src/app/components/userlogin/userlogin.component.ts");
/* harmony import */ var _components_mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/mainpage/mainpage.component */ "./src/app/components/mainpage/mainpage.component.ts");
/* harmony import */ var _components_mainheader_mainheader_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/mainheader/mainheader.component */ "./src/app/components/mainheader/mainheader.component.ts");
/* harmony import */ var _components_mainfooter_mainfooter_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/mainfooter/mainfooter.component */ "./src/app/components/mainfooter/mainfooter.component.ts");
/* harmony import */ var _components_star_profile_star_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/star-profile/star-profile.component */ "./src/app/components/star-profile/star-profile.component.ts");
/* harmony import */ var _components_request_create_request_create_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/request-create/request-create.component */ "./src/app/components/request-create/request-create.component.ts");
/* harmony import */ var _components_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/forget-password/forget-password.component */ "./src/app/components/forget-password/forget-password.component.ts");
/* harmony import */ var _components_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/my-profile/my-profile.component */ "./src/app/components/my-profile/my-profile.component.ts");
/* harmony import */ var _components_payment_process_payment_process_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/payment-process/payment-process.component */ "./src/app/components/payment-process/payment-process.component.ts");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "./src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var _components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/reset-password/reset-password.component */ "./src/app/components/reset-password/reset-password.component.ts");
/* harmony import */ var _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pipes/safe.pipe */ "./src/app/pipes/safe.pipe.ts");




















Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["registerLocaleData"])(_angular_common_locales_vi__WEBPACK_IMPORTED_MODULE_3___default.a, 'vi');
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_userlogin_userlogin_component__WEBPACK_IMPORTED_MODULE_8__["UserloginComponent"],
                _components_mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_9__["MainpageComponent"],
                _components_mainheader_mainheader_component__WEBPACK_IMPORTED_MODULE_10__["MainheaderComponent"],
                _components_mainfooter_mainfooter_component__WEBPACK_IMPORTED_MODULE_11__["MainfooterComponent"],
                _components_star_profile_star_profile_component__WEBPACK_IMPORTED_MODULE_12__["StarProfileComponent"],
                _components_request_create_request_create_component__WEBPACK_IMPORTED_MODULE_13__["RequestCreateComponent"],
                _components_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_14__["ForgetPasswordComponent"],
                _components_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_15__["MyProfileComponent"],
                _components_payment_process_payment_process_component__WEBPACK_IMPORTED_MODULE_16__["PaymentProcessComponent"],
                _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_17__["PageNotFoundComponent"],
                _components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_18__["ResetPasswordComponent"],
                _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_19__["SafePipe"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/forget-password/forget-password.component.less":
/*!***************************************************************************!*\
  !*** ./src/app/components/forget-password/forget-password.component.less ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".purple-theme {\n  background-color: #744FC4;\n  color: #ffffff;\n}\n.form-label-group {\n  position: relative;\n  margin-bottom: 1rem;\n}\n.form-label-group > input,\n.form-label-group > label {\n  height: 3.125rem;\n  padding: 0.75rem;\n}\n.form-label-group > label {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: block;\n  width: 100%;\n  margin-bottom: 0;\n  /* Override default `<label>` margin */\n  line-height: 1.5;\n  color: #495057;\n  pointer-events: none;\n  cursor: text;\n  /* Match the input under the label */\n  border: 1px solid transparent;\n  border-radius: 0.25rem;\n  transition: all 0.1s ease-in-out;\n}\n.form-label-group input::-webkit-input-placeholder {\n  color: transparent;\n}\n.form-label-group input::-ms-input-placeholder {\n  color: transparent;\n}\n.form-label-group input::-moz-placeholder {\n  color: transparent;\n}\n.form-label-group input::placeholder {\n  color: transparent;\n}\n.form-label-group input:not(:placeholder-shown) {\n  padding-top: 1.25rem;\n  padding-bottom: 0.25rem;\n}\n.form-label-group input:not(:placeholder-shown) ~ label {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  font-size: 12px;\n  color: #777;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3ZpZGlkb2wvdmlkaWRvbC9zcmMvYXBwL2NvbXBvbmVudHMvZm9yZ2V0LXBhc3N3b3JkL2ZvcmdldC1wYXNzd29yZC5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mb3JnZXQtcGFzc3dvcmQvZm9yZ2V0LXBhc3N3b3JkLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0FDQ0o7QURHQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUNESjtBRElBOztFQUVJLGdCQUFBO0VBQ0EsZ0JBQUE7QUNGSjtBREtBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUNIRixzQ0FBc0M7RURLcEMsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VDSEYsb0NBQW9DO0VES2xDLDZCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQ0FBQTtBQ0hKO0FETUE7RUFDSSxrQkFBQTtBQ0pKO0FEV0E7RUFDSSxrQkFBQTtBQ05KO0FEU0E7RUFDSSxrQkFBQTtBQ1BKO0FEVUE7RUFDSSxrQkFBQTtBQ1JKO0FEV0E7RUFDSSxvQkFBQTtFQUNBLHVCQUFBO0FDVEo7QURZQTtFQUNJLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ1ZKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb3JnZXQtcGFzc3dvcmQvZm9yZ2V0LXBhc3N3b3JkLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLnB1cnBsZS10aGVtZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc0NEZDNDtcbiAgICBjb2xvciAgICAgICAgICAgOiAjZmZmZmZmO1xufVxuXG4vL2NvcHkgZnJvbSBUcnVuZyA6KSkgaW4gbWFpbnBhZ2UgY29tcG9uZW50XG4uZm9ybS1sYWJlbC1ncm91cCB7XG4gICAgcG9zaXRpb24gICAgIDogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLmZvcm0tbGFiZWwtZ3JvdXA+aW5wdXQsXG4uZm9ybS1sYWJlbC1ncm91cD5sYWJlbCB7XG4gICAgaGVpZ2h0IDogMy4xMjVyZW07XG4gICAgcGFkZGluZzogLjc1cmVtO1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cD5sYWJlbCB7XG4gICAgcG9zaXRpb24gICAgIDogYWJzb2x1dGU7XG4gICAgdG9wICAgICAgICAgIDogMDtcbiAgICBsZWZ0ICAgICAgICAgOiAwO1xuICAgIGRpc3BsYXkgICAgICA6IGJsb2NrO1xuICAgIHdpZHRoICAgICAgICA6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAvKiBPdmVycmlkZSBkZWZhdWx0IGA8bGFiZWw+YCBtYXJnaW4gKi9cbiAgICBsaW5lLWhlaWdodCAgIDogMS41O1xuICAgIGNvbG9yICAgICAgICAgOiAjNDk1MDU3O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGN1cnNvciAgICAgICAgOiB0ZXh0O1xuICAgIC8qIE1hdGNoIHRoZSBpbnB1dCB1bmRlciB0aGUgbGFiZWwgKi9cbiAgICBib3JkZXIgICAgICAgOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xuICAgIHRyYW5zaXRpb24gICA6IGFsbCAuMXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0OjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKSB7XG4gICAgcGFkZGluZy10b3AgICA6IDEuMjVyZW07XG4gICAgcGFkZGluZy1ib3R0b206IC4yNXJlbTtcbn1cblxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6bm90KDpwbGFjZWhvbGRlci1zaG93bil+bGFiZWwge1xuICAgIHBhZGRpbmctdG9wICAgOiAuMjVyZW07XG4gICAgcGFkZGluZy1ib3R0b206IC4yNXJlbTtcbiAgICBmb250LXNpemUgICAgIDogMTJweDtcbiAgICBjb2xvciAgICAgICAgIDogIzc3Nztcbn0iLCIucHVycGxlLXRoZW1lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc0NEZDNDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4uZm9ybS1sYWJlbC1ncm91cCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbi5mb3JtLWxhYmVsLWdyb3VwID4gaW5wdXQsXG4uZm9ybS1sYWJlbC1ncm91cCA+IGxhYmVsIHtcbiAgaGVpZ2h0OiAzLjEyNXJlbTtcbiAgcGFkZGluZzogMC43NXJlbTtcbn1cbi5mb3JtLWxhYmVsLWdyb3VwID4gbGFiZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICAvKiBPdmVycmlkZSBkZWZhdWx0IGA8bGFiZWw+YCBtYXJnaW4gKi9cbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6ICM0OTUwNTc7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBjdXJzb3I6IHRleHQ7XG4gIC8qIE1hdGNoIHRoZSBpbnB1dCB1bmRlciB0aGUgbGFiZWwgKi9cbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0O1xufVxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKSB7XG4gIHBhZGRpbmctdG9wOiAxLjI1cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC4yNXJlbTtcbn1cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pIH4gbGFiZWwge1xuICBwYWRkaW5nLXRvcDogMC4yNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuMjVyZW07XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM3Nzc7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/forget-password/forget-password.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/forget-password/forget-password.component.ts ***!
  \*************************************************************************/
/*! exports provided: ForgetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPasswordComponent", function() { return ForgetPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_capcha_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/capcha.service */ "./src/app/services/capcha.service.ts");




var ForgetPasswordComponent = /** @class */ (function () {
    //Mock data will sent capcha image and capcha code for comparision 
    function ForgetPasswordComponent(route, router, capCharService) {
        this.route = route;
        this.router = router;
        this.capCharService = capCharService;
    }
    ForgetPasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        $('#SignInModal').modal('hide');
        this.isBlank = JSON.parse(sessionStorage.getItem("isInfoOrCapBlank"));
        this.isInvalidInfo = JSON.parse(sessionStorage.getItem("isInvalidInfo"));
        this.isInvalidCapcha = JSON.parse(sessionStorage.getItem("isInvalidCapcha"));
        this.capCharService.getCapcha().subscribe(function (receivedCapcha) { return _this.capChaObject = receivedCapcha; });
    };
    /**
     * A function to check whether the string contains only number or not
     * @param str string - the string to check
     * return a boolean
     */
    ForgetPasswordComponent.prototype.isNumber = function (str) {
        var pattern = /^\d+$/;
        return pattern.test(str);
    };
    /**
     * A function to check whether the string is an email address
     * @param str string - the string to check
     * return a boolean
     */
    ForgetPasswordComponent.prototype.isEmailAddress = function (str) {
        var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return pattern.test(str);
    };
    /**
     * A function to check whether information which user input is correct
     * including check if it is an email address or a phone number
     * @param infor string - the string to check
     * return a boolean
     */
    ForgetPasswordComponent.prototype.isValidInfomation = function (infor) {
        if (this.isEmailAddress(infor)) {
            this.isEmail = this.isEmailAddress(infor);
            this.isPhone = false;
            return true;
        }
        else if (this.isNumber(infor)) {
            this.isEmail = false;
            this.isPhone = this.isNumber(infor);
            return true;
        }
        else
            return false;
    };
    /**
    * A function to preserve state of 3 var name isBlank, isInvalidInfo, isInvalidCapcha
    * when the page is reloaded.
    * @param blank string - isBlank, @param infoValid string - isInvalidInfo, @param capChaValid string - isInvalidCapcha
    */
    ForgetPasswordComponent.prototype.setAlertState = function (blank, infoValid, capChaValid) {
        sessionStorage.setItem("isInfoOrCapBlank", blank);
        sessionStorage.setItem("isInvalidInfo", infoValid);
        sessionStorage.setItem("isInvalidCapcha", capChaValid);
    };
    /**
    * A function is triggered when submit button is pressed
    * This function will check blank and password match and then
    * raise alert
    */
    ForgetPasswordComponent.prototype.onSubmit = function () {
        if (this.userEmailorPhone == null || this.capChaInput == null) {
            this.setAlertState("true", "false", "false");
            location.reload();
        }
        else if (!this.isValidInfomation(this.userEmailorPhone)) {
            this.setAlertState("false", "true", "false");
            location.reload();
        }
        else if (this.capChaInput != this.capChaObject.code) {
            this.setAlertState("false", "false", "true");
            location.reload();
        }
        else {
            //do something about sending information to server 
            //then maybe navigate to mainpage or create some confirm form ??
            this.setAlertState("false", "false", "false");
            this.router.navigate(['']);
        }
    };
    ForgetPasswordComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_capcha_service__WEBPACK_IMPORTED_MODULE_3__["CapchaService"] }
    ]; };
    ForgetPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forget-password',
            template: __webpack_require__(/*! raw-loader!./forget-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/forget-password/forget-password.component.html"),
            styles: [__webpack_require__(/*! ./forget-password.component.less */ "./src/app/components/forget-password/forget-password.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_capcha_service__WEBPACK_IMPORTED_MODULE_3__["CapchaService"]])
    ], ForgetPasswordComponent);
    return ForgetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/components/mainfooter/mainfooter.component.less":
/*!*****************************************************************!*\
  !*** ./src/app/components/mainfooter/mainfooter.component.less ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo-text {\n  display: inline;\n  font-family: \"Comic Sans MS\", cursive, sans-serif;\n  color: #744FC4;\n  font-size: larger;\n}\n.about-us {\n  list-style-type: none;\n}\n.about-us li {\n  display: inline-block;\n}\ni.fas,\ni.fab {\n  color: #744FC4;\n}\n.footer {\n  padding: 3px;\n  background-color: #f5f5f5;\n}\n#footer-menu {\n  font-size: 1.2em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3ZpZGlkb2wvdmlkaWRvbC9zcmMvYXBwL2NvbXBvbmVudHMvbWFpbmZvb3Rlci9tYWluZm9vdGVyLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9jb21wb25lbnRzL21haW5mb290ZXIvbWFpbmZvb3Rlci5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxpREFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0NKO0FERUE7RUFDSSxxQkFBQTtBQ0FKO0FER0E7RUFDSSxxQkFBQTtBQ0RKO0FESUE7O0VBRUksY0FBQTtBQ0ZKO0FES0E7RUFDSSxZQUFBO0VBQ0EseUJBQUE7QUNISjtBRE1BO0VBQ0ksZ0JBQUE7QUNKSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbmZvb3Rlci9tYWluZm9vdGVyLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28tdGV4dCB7XG4gICAgZGlzcGxheSAgICA6IGlubGluZTtcbiAgICBmb250LWZhbWlseTogXCJDb21pYyBTYW5zIE1TXCIsIGN1cnNpdmUsIHNhbnMtc2VyaWY7XG4gICAgY29sb3IgICAgICA6ICM3NDRGQzQ7XG4gICAgZm9udC1zaXplICA6IGxhcmdlcjtcbn1cblxuLmFib3V0LXVzIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbi5hYm91dC11cyBsaSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG5pLmZhcyxcbmkuZmFiIHtcbiAgICBjb2xvcjogIzc0NEZDNDtcbn1cblxuLmZvb3RlciB7XG4gICAgcGFkZGluZzogM3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG59XG5cbiNmb290ZXItbWVudXtcbiAgICBmb250LXNpemU6IDEuMmVtO1xufSIsIi5sb2dvLXRleHQge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGZvbnQtZmFtaWx5OiBcIkNvbWljIFNhbnMgTVNcIiwgY3Vyc2l2ZSwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICM3NDRGQzQ7XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xufVxuLmFib3V0LXVzIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuLmFib3V0LXVzIGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuaS5mYXMsXG5pLmZhYiB7XG4gIGNvbG9yOiAjNzQ0RkM0O1xufVxuLmZvb3RlciB7XG4gIHBhZGRpbmc6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbn1cbiNmb290ZXItbWVudSB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/mainfooter/mainfooter.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/mainfooter/mainfooter.component.ts ***!
  \***************************************************************/
/*! exports provided: MainfooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainfooterComponent", function() { return MainfooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainfooterComponent = /** @class */ (function () {
    function MainfooterComponent() {
    }
    MainfooterComponent.prototype.ngOnInit = function () {
    };
    MainfooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mainfooter',
            template: __webpack_require__(/*! raw-loader!./mainfooter.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/mainfooter/mainfooter.component.html"),
            styles: [__webpack_require__(/*! ./mainfooter.component.less */ "./src/app/components/mainfooter/mainfooter.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainfooterComponent);
    return MainfooterComponent;
}());



/***/ }),

/***/ "./src/app/components/mainheader/mainheader.component.less":
/*!*****************************************************************!*\
  !*** ./src/app/components/mainheader/mainheader.component.less ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  display: flex;\n  align-items: center;\n  padding-top: 40px;\n  padding-bottom: 40px;\n  background-color: #f5f5f5;\n}\n.form-signin {\n  width: 100%;\n  max-width: 420px;\n  padding: 15px;\n  margin: auto;\n}\n.form-label-group {\n  position: relative;\n  margin-bottom: 1rem;\n}\n.form-label-group > input,\n.form-label-group > label {\n  height: 3.125rem;\n  padding: 0.75rem;\n}\n.form-label-group > label {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: block;\n  width: 100%;\n  margin-bottom: 0;\n  /* Override default `<label>` margin */\n  line-height: 1.5;\n  color: #495057;\n  pointer-events: none;\n  cursor: text;\n  /* Match the input under the label */\n  border: 1px solid transparent;\n  border-radius: 0.25rem;\n  transition: all 0.1s ease-in-out;\n}\n.form-label-group input::-webkit-input-placeholder {\n  color: transparent;\n}\n.form-label-group input::-ms-input-placeholder {\n  color: transparent;\n}\n.form-label-group input::-moz-placeholder {\n  color: transparent;\n}\n.form-label-group input::placeholder {\n  color: transparent;\n}\n.form-label-group input:not(:placeholder-shown) {\n  padding-top: 1.25rem;\n  padding-bottom: 0.25rem;\n}\n.form-label-group input:not(:placeholder-shown) ~ label {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  font-size: 12px;\n  color: #777;\n}\n.logo-text {\n  display: inline;\n  font-family: \"Comic Sans MS\", cursive, sans-serif;\n  color: #744FC4;\n  font-size: larger;\n}\n/* Style all font awesome icons */\n.fab {\n  padding: 4.6px;\n  text-align: center;\n  text-decoration: none;\n  width: 39px;\n  height: 39px;\n  border-radius: 3px;\n  vertical-align: middle;\n  font-size: 1.9rem;\n}\n.fab:hover {\n  opacity: 0.7;\n}\n.sign-in-facebook {\n  background: #3B5998;\n  color: white;\n}\n.sign-in-instagram {\n  background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);\n  color: white;\n}\n.btn-facebook {\n  background: #3b5998;\n  color: white;\n}\n.btn-instagram {\n  background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);\n  color: white;\n  font-weight: 500;\n}\n#notification_count {\n  padding: 3px 7px 3px 7px;\n  background: #cc0000;\n  color: #ffffff;\n  font-weight: bold;\n  margin-left: -10px;\n  border-radius: 10px;\n  -moz-border-radius: 10px;\n  -webkit-border-radius: 10px;\n  position: absolute;\n  margin-top: 14px;\n  font-size: 11px;\n}\n.notification_li {\n  position: relative;\n}\n.dropdown a {\n  color: #744FC4;\n}\n.dropdown a:hover {\n  color: #6840bf;\n}\n.notifications ul {\n  list-style-type: none;\n  display: inline-block;\n}\n.notifications ul li {\n  display: block;\n  padding: 4px;\n}\n.dropdown-menu {\n  margin-top: 0.55em;\n}\n.dropdown-menu-right {\n  margin-right: -7em;\n}\n.dropdown-menu a {\n  color: #000000;\n}\n/* Fallback for Edge\n-------------------------------------------------- */\n@supports (-ms-ime-align: auto) {\n  .form-label-group > label {\n    display: none;\n  }\n  .form-label-group input::-ms-input-placeholder {\n    color: #777;\n  }\n}\n/* Fallback for IE\n-------------------------------------------------- */\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  .form-label-group > label {\n    display: none;\n  }\n  .form-label-group input:-ms-input-placeholder {\n    color: #777;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3ZpZGlkb2wvdmlkaWRvbC9zcmMvYXBwL2NvbXBvbmVudHMvbWFpbmhlYWRlci9tYWluaGVhZGVyLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9jb21wb25lbnRzL21haW5oZWFkZXIvbWFpbmhlYWRlci5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLGFBQUE7RUFFQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtBQ0NGO0FERUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQ0FGO0FER0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FDREY7QURJQTs7RUFFRSxnQkFBQTtFQUNBLGdCQUFBO0FDRkY7QURLQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VDSEEsc0NBQXNDO0VES3RDLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQ0hBLG9DQUFvQztFREtwQyw2QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0NBQUE7QUNIRjtBRE1BO0VBQ0Usa0JBQUE7QUNKRjtBRFdBO0VBQ0Usa0JBQUE7QUNORjtBRFNBO0VBQ0Usa0JBQUE7QUNQRjtBRFVBO0VBQ0Usa0JBQUE7QUNSRjtBRFdBO0VBQ0Usb0JBQUE7RUFDQSx1QkFBQTtBQ1RGO0FEWUE7RUFDRSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNWRjtBRGFBO0VBQ0UsZUFBQTtFQUNBLGlEQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDWEY7QUFDQSxpQ0FBaUM7QURjakM7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FDWkY7QURlQTtFQUNFLFlBQUE7QUNiRjtBRGdCQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBQ2RGO0FEaUJBO0VBQ0UsOEdBQUE7RUFDQSxZQUFBO0FDZkY7QURrQkE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUNoQkY7QURtQkE7RUFDRSw4R0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ2pCRjtBRG9CQTtFQUNFLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDbEJGO0FEcUJBO0VBQ0Usa0JBQUE7QUNuQkY7QURxQkE7RUFDRSxjQUFBO0FDbkJGO0FEcUJBO0VBQ0EsY0FBQTtBQ25CQTtBRHNCQTtFQUNFLHFCQUFBO0VBQ0EscUJBQUE7QUNwQkY7QURzQkE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtBQ3BCRjtBRHNCQTtFQUNFLGtCQUFBO0FDcEJGO0FEc0JBO0VBQ0Usa0JBQUE7QUNwQkY7QURzQkE7RUFDRSxjQUFBO0FDcEJGO0FBQ0E7b0RBQ29EO0FEdUJwRDtFQUNFO0lBQ0UsYUFBQTtFQ3JCRjtFRHdCQTtJQUNFLFdBQUE7RUN0QkY7QUFDRjtBQUNBO29EQUNvRDtBRHlCcEQ7RUFFRTtJQUNFLGFBQUE7RUN4QkY7RUQyQkE7SUFDRSxXQUFBO0VDekJGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21haW5oZWFkZXIvbWFpbmhlYWRlci5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICBkaXNwbGF5ICAgICAgICAgOiAtbXMtZmxleGJveDtcbiAgZGlzcGxheSAgICAgICAgIDogZmxleDtcbiAgLW1zLWZsZXgtYWxpZ24gIDogY2VudGVyO1xuICBhbGlnbi1pdGVtcyAgICAgOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wICAgICA6IDQwcHg7XG4gIHBhZGRpbmctYm90dG9tICA6IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG59XG5cbi5mb3JtLXNpZ25pbiB7XG4gIHdpZHRoICAgIDogMTAwJTtcbiAgbWF4LXdpZHRoOiA0MjBweDtcbiAgcGFkZGluZyAgOiAxNXB4O1xuICBtYXJnaW4gICA6IGF1dG87XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIHtcbiAgcG9zaXRpb24gICAgIDogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwPmlucHV0LFxuLmZvcm0tbGFiZWwtZ3JvdXA+bGFiZWwge1xuICBoZWlnaHQgOiAzLjEyNXJlbTtcbiAgcGFkZGluZzogLjc1cmVtO1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cD5sYWJlbCB7XG4gIHBvc2l0aW9uICAgICA6IGFic29sdXRlO1xuICB0b3AgICAgICAgICAgOiAwO1xuICBsZWZ0ICAgICAgICAgOiAwO1xuICBkaXNwbGF5ICAgICAgOiBibG9jaztcbiAgd2lkdGggICAgICAgIDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgLyogT3ZlcnJpZGUgZGVmYXVsdCBgPGxhYmVsPmAgbWFyZ2luICovXG4gIGxpbmUtaGVpZ2h0ICAgOiAxLjU7XG4gIGNvbG9yICAgICAgICAgOiAjNDk1MDU3O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgY3Vyc29yICAgICAgICA6IHRleHQ7XG4gIC8qIE1hdGNoIHRoZSBpbnB1dCB1bmRlciB0aGUgbGFiZWwgKi9cbiAgYm9yZGVyICAgICAgIDogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAuMjVyZW07XG4gIHRyYW5zaXRpb24gICA6IGFsbCAuMXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0OjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0OjotbW96LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pIHtcbiAgcGFkZGluZy10b3AgICA6IDEuMjVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAuMjVyZW07XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pfmxhYmVsIHtcbiAgcGFkZGluZy10b3AgICA6IC4yNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IC4yNXJlbTtcbiAgZm9udC1zaXplICAgICA6IDEycHg7XG4gIGNvbG9yICAgICAgICAgOiAjNzc3O1xufVxuXG4ubG9nby10ZXh0IHtcbiAgZGlzcGxheSAgICA6IGlubGluZTtcbiAgZm9udC1mYW1pbHk6IFwiQ29taWMgU2FucyBNU1wiLCBjdXJzaXZlLCBzYW5zLXNlcmlmO1xuICBjb2xvciAgICAgIDogIzc0NEZDNDtcbiAgZm9udC1zaXplICA6IGxhcmdlcjtcbn1cblxuLyogU3R5bGUgYWxsIGZvbnQgYXdlc29tZSBpY29ucyAqL1xuLmZhYiB7XG4gIHBhZGRpbmcgICAgICAgIDogNC42cHg7XG4gIHRleHQtYWxpZ24gICAgIDogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHdpZHRoICAgICAgICAgIDogMzlweDtcbiAgaGVpZ2h0ICAgICAgICAgOiAzOXB4O1xuICBib3JkZXItcmFkaXVzICA6IDNweDtcbiAgdmVydGljYWwtYWxpZ24gOiBtaWRkbGU7XG4gIGZvbnQtc2l6ZSAgICAgIDogMS45cmVtO1xufVxuXG4uZmFiOmhvdmVyIHtcbiAgb3BhY2l0eTogMC43O1xufVxuXG4uc2lnbi1pbi1mYWNlYm9vayB7XG4gIGJhY2tncm91bmQ6ICMzQjU5OTg7XG4gIGNvbG9yICAgICA6IHdoaXRlO1xufVxuXG4uc2lnbi1pbi1pbnN0YWdyYW0ge1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDMwJSAxMDclLCAjZmRmNDk3IDAlLCAjZmRmNDk3IDUlLCAjZmQ1OTQ5IDQ1JSwgI2Q2MjQ5ZiA2MCUsICMyODVBRUIgOTAlKTtcbiAgY29sb3IgICAgIDogd2hpdGU7XG59XG5cbi5idG4tZmFjZWJvb2sge1xuICBiYWNrZ3JvdW5kOiByZ2IoNTksIDg5LCAxNTIpO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5idG4taW5zdGFncmFtIHtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCAzMCUgMTA3JSwgI2ZkZjQ5NyAwJSwgI2ZkZjQ5NyA1JSwgI2ZkNTk0OSA0NSUsICNkNjI0OWYgNjAlLCAjMjg1QUVCIDkwJSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi8vbmV3IGZvciBub3RpZmljYXRpb25cbiNub3RpZmljYXRpb25fY291bnQge1xuICBwYWRkaW5nOiAzcHggN3B4IDNweCA3cHg7XG4gIGJhY2tncm91bmQ6ICNjYzAwMDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiAxNHB4O1xuICBmb250LXNpemU6IDExcHg7XG59XG5cbi5ub3RpZmljYXRpb25fbGkge1xuICBwb3NpdGlvbjpyZWxhdGl2ZVxufVxuLmRyb3Bkb3duIGF7XG4gIGNvbG9yOiM3NDRGQzQ7XG59XG4uZHJvcGRvd24gYTpob3ZlcntcbmNvbG9yOiM2ODQwYmY7XG59XG5cbi5ub3RpZmljYXRpb25zIHVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4ubm90aWZpY2F0aW9ucyB1bCBsaSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiA0cHg7XG59XG4uZHJvcGRvd24tbWVudXtcbiAgbWFyZ2luLXRvcDogMC41NWVtXG59XG4uZHJvcGRvd24tbWVudS1yaWdodHtcbiAgbWFyZ2luLXJpZ2h0OiAtN2VtXG59XG4uZHJvcGRvd24tbWVudSBhe1xuICBjb2xvcjojMDAwMDAwXG59XG5cbi8qIEZhbGxiYWNrIGZvciBFZGdlXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuQHN1cHBvcnRzICgtbXMtaW1lLWFsaWduOiBhdXRvKSB7XG4gIC5mb3JtLWxhYmVsLWdyb3VwPmxhYmVsIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICM3Nzc7XG4gIH1cbn1cblxuLyogRmFsbGJhY2sgZm9yIElFXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuQG1lZGlhIGFsbCBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSxcbigtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSB7XG4gIC5mb3JtLWxhYmVsLWdyb3VwPmxhYmVsIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogIzc3NztcbiAgfVxufSIsImJvZHkge1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xufVxuLmZvcm0tc2lnbmluIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNDIwcHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5mb3JtLWxhYmVsLWdyb3VwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuLmZvcm0tbGFiZWwtZ3JvdXAgPiBpbnB1dCxcbi5mb3JtLWxhYmVsLWdyb3VwID4gbGFiZWwge1xuICBoZWlnaHQ6IDMuMTI1cmVtO1xuICBwYWRkaW5nOiAwLjc1cmVtO1xufVxuLmZvcm0tbGFiZWwtZ3JvdXAgPiBsYWJlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIC8qIE92ZXJyaWRlIGRlZmF1bHQgYDxsYWJlbD5gIG1hcmdpbiAqL1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogIzQ5NTA1NztcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGN1cnNvcjogdGV4dDtcbiAgLyogTWF0Y2ggdGhlIGlucHV0IHVuZGVyIHRoZSBsYWJlbCAqL1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbi1vdXQ7XG59XG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0OjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pIHtcbiAgcGFkZGluZy10b3A6IDEuMjVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjI1cmVtO1xufVxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6bm90KDpwbGFjZWhvbGRlci1zaG93bikgfiBsYWJlbCB7XG4gIHBhZGRpbmctdG9wOiAwLjI1cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC4yNXJlbTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzc3Nztcbn1cbi5sb2dvLXRleHQge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGZvbnQtZmFtaWx5OiBcIkNvbWljIFNhbnMgTVNcIiwgY3Vyc2l2ZSwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICM3NDRGQzQ7XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xufVxuLyogU3R5bGUgYWxsIGZvbnQgYXdlc29tZSBpY29ucyAqL1xuLmZhYiB7XG4gIHBhZGRpbmc6IDQuNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgd2lkdGg6IDM5cHg7XG4gIGhlaWdodDogMzlweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBmb250LXNpemU6IDEuOXJlbTtcbn1cbi5mYWI6aG92ZXIge1xuICBvcGFjaXR5OiAwLjc7XG59XG4uc2lnbi1pbi1mYWNlYm9vayB7XG4gIGJhY2tncm91bmQ6ICMzQjU5OTg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5zaWduLWluLWluc3RhZ3JhbSB7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMzAlIDEwNyUsICNmZGY0OTcgMCUsICNmZGY0OTcgNSUsICNmZDU5NDkgNDUlLCAjZDYyNDlmIDYwJSwgIzI4NUFFQiA5MCUpO1xuICBjb2xvcjogd2hpdGU7XG59XG4uYnRuLWZhY2Vib29rIHtcbiAgYmFja2dyb3VuZDogIzNiNTk5ODtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmJ0bi1pbnN0YWdyYW0ge1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDMwJSAxMDclLCAjZmRmNDk3IDAlLCAjZmRmNDk3IDUlLCAjZmQ1OTQ5IDQ1JSwgI2Q2MjQ5ZiA2MCUsICMyODVBRUIgOTAlKTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuI25vdGlmaWNhdGlvbl9jb3VudCB7XG4gIHBhZGRpbmc6IDNweCA3cHggM3B4IDdweDtcbiAgYmFja2dyb3VuZDogI2NjMDAwMDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogMTBweDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi10b3A6IDE0cHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cbi5ub3RpZmljYXRpb25fbGkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZHJvcGRvd24gYSB7XG4gIGNvbG9yOiAjNzQ0RkM0O1xufVxuLmRyb3Bkb3duIGE6aG92ZXIge1xuICBjb2xvcjogIzY4NDBiZjtcbn1cbi5ub3RpZmljYXRpb25zIHVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4ubm90aWZpY2F0aW9ucyB1bCBsaSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiA0cHg7XG59XG4uZHJvcGRvd24tbWVudSB7XG4gIG1hcmdpbi10b3A6IDAuNTVlbTtcbn1cbi5kcm9wZG93bi1tZW51LXJpZ2h0IHtcbiAgbWFyZ2luLXJpZ2h0OiAtN2VtO1xufVxuLmRyb3Bkb3duLW1lbnUgYSB7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuLyogRmFsbGJhY2sgZm9yIEVkZ2Vcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5Ac3VwcG9ydHMgKC1tcy1pbWUtYWxpZ246IGF1dG8pIHtcbiAgLmZvcm0tbGFiZWwtZ3JvdXAgPiBsYWJlbCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogIzc3NztcbiAgfVxufVxuLyogRmFsbGJhY2sgZm9yIElFXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuQG1lZGlhIGFsbCBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSwgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpIHtcbiAgLmZvcm0tbGFiZWwtZ3JvdXAgPiBsYWJlbCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjNzc3O1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/mainheader/mainheader.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/mainheader/mainheader.component.ts ***!
  \***************************************************************/
/*! exports provided: MainheaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainheaderComponent", function() { return MainheaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _services_avatar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/avatar.service */ "./src/app/services/avatar.service.ts");
/* harmony import */ var _services_notify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/notify.service */ "./src/app/services/notify.service.ts");





var MainheaderComponent = /** @class */ (function () {
    function MainheaderComponent(loginService, avatarService, notifyService) {
        this.loginService = loginService;
        this.avatarService = avatarService;
        this.notifyService = notifyService;
    }
    MainheaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Convert String to Boolean
        var isSignIn = JSON.parse(sessionStorage.getItem('VidiDOL-SignIn'));
        this.loginService.signIn(isSignIn);
        if (this.loginService.isLoggedIn) {
            this.avatarService.getAvatar().subscribe(function (fetchUser) { return _this.user = fetchUser; });
            this.loginService.currentUser = this.user;
            this.notifyService.getNotifications().subscribe(function (receivedNotifications) { return _this.userNotifications = receivedNotifications; });
        }
    };
    MainheaderComponent.prototype.signInSuccess = function () {
        this.loginService.signIn(true);
        sessionStorage.setItem('VidiDOL-SignIn', 'true');
        location.reload();
    };
    MainheaderComponent.prototype.signOutSuccess = function () {
        this.loginService.signIn(false);
        sessionStorage.setItem('VidiDOL-SignIn', 'false');
        location.reload();
    };
    /**
     * A function to hide notification count when user clicked on the notification symbol
     */
    MainheaderComponent.prototype.userViewNotiClick = function () {
        document.getElementById("notification_count").style.visibility = "hidden";
    };
    MainheaderComponent.ctorParameters = function () { return [
        { type: _services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
        { type: _services_avatar_service__WEBPACK_IMPORTED_MODULE_3__["AvatarService"] },
        { type: _services_notify_service__WEBPACK_IMPORTED_MODULE_4__["NotifyService"] }
    ]; };
    MainheaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mainheader',
            template: __webpack_require__(/*! raw-loader!./mainheader.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/mainheader/mainheader.component.html"),
            styles: [__webpack_require__(/*! ./mainheader.component.less */ "./src/app/components/mainheader/mainheader.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _services_avatar_service__WEBPACK_IMPORTED_MODULE_3__["AvatarService"], _services_notify_service__WEBPACK_IMPORTED_MODULE_4__["NotifyService"]])
    ], MainheaderComponent);
    return MainheaderComponent;
}());



/***/ }),

/***/ "./src/app/components/mainpage/mainpage.component.less":
/*!*************************************************************!*\
  !*** ./src/app/components/mainpage/mainpage.component.less ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebar {\n  z-index: 100;\n  /* Behind the navbar */\n  padding: 48px 0 0;\n  /* Height of navbar */\n  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);\n  font-size: 0.875rem;\n}\n.sidebar-sticky {\n  position: relative;\n  top: 0;\n  height: calc(100vh - 48px);\n  padding-top: 0.5rem;\n  overflow-x: hidden;\n  overflow-y: auto;\n  /* Scrollable contents if viewport is shorter than content. */\n}\n@supports ((position: -webkit-sticky) or (position: sticky)) {\n  .sidebar-sticky {\n    position: -webkit-sticky;\n    position: sticky;\n  }\n}\n.sidebar .nav-link {\n  font-weight: 400;\n  color: #333;\n}\n.sidebar .nav-link .feather {\n  margin-right: 4px;\n  color: #999;\n}\n.sidebar .nav-link.active {\n  color: #007bff;\n}\n.sidebar .nav-link:hover {\n  font-weight: 600;\n}\n.sidebar-heading {\n  text-transform: capitalize;\n}\n/*\n   * Content\n   */\n[role=\"main\"] {\n  padding-top: 133px;\n  /* Space for fixed navbar */\n}\n@media (min-width: 768px) {\n  [role=\"main\"] {\n    padding-top: 48px;\n    /* Space for fixed navbar */\n  }\n}\n/*\n   * Navbar\n   */\n.navbar-brand {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  font-size: 1rem;\n  background-color: rgba(0, 0, 0, 0.25);\n  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.25);\n}\n.navbar .form-control {\n  padding: 0.75rem 1rem;\n  border-width: 0;\n  border-radius: 0;\n}\n.form-control-dark {\n  color: #fff;\n  background-color: rgba(255, 255, 255, 0.1);\n  border-color: rgba(255, 255, 255, 0.1);\n}\n.form-control-dark:focus {\n  border-color: transparent;\n  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.25);\n}\n.star-name {\n  font-weight: 600;\n}\n.anchor-star-name {\n  color: inherit;\n}\n.nav-paging-main {\n  width: 100%;\n}\n.mail-icon {\n  cursor: pointer;\n  cursor: hand;\n  position: absolute;\n  left: 20%;\n  margin-top: 85%;\n  -webkit-transform: translate(-80%, 100%);\n          transform: translate(-80%, 100%);\n  -ms-transform: translate(-80%, 100%);\n}\ni.fas {\n  color: #744FC4;\n}\n.btn-purple {\n  background-color: #744FC4;\n  color: #ffffff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3ZpZGlkb2wvdmlkaWRvbC9zcmMvYXBwL2NvbXBvbmVudHMvbWFpbnBhZ2UvbWFpbnBhZ2UuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbnBhZ2UvbWFpbnBhZ2UuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUU7RUFDSSxZQUFBO0VDQ0osc0JBQXNCO0VEQ2xCLGlCQUFBO0VDQ0oscUJBQXFCO0VEQ2pCLDZDQUFBO0VBQ0EsbUJBQUE7QUNDTjtBREVFO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUNBSiw2REFBNkQ7QUFDL0Q7QURHRTtFQUNJO0lBQ0ksd0JBQUE7SUFDQSxnQkFBQTtFQ0RSO0FBQ0Y7QURJRTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtBQ0ZOO0FES0U7RUFDSSxpQkFBQTtFQUNBLFdBQUE7QUNITjtBRE1FO0VBQ0ksY0FBQTtBQ0pOO0FET0U7RUFDSSxnQkFBQTtBQ0xOO0FEUUU7RUFDSSwwQkFBQTtBQ05OO0FBQ0E7O0lBRUk7QURVRjtFQUNJLGtCQUFBO0VDUkosMkJBQTJCO0FBQzdCO0FEV0U7RUFDSTtJQUNJLGlCQUFBO0lDVE4sMkJBQTJCO0VBQzdCO0FBQ0Y7QUFDQTs7SUFFSTtBRGFGO0VBQ0ksb0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxxQ0FBQTtFQUNBLDhDQUFBO0FDWE47QURjRTtFQUNJLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDWk47QURlRTtFQUNJLFdBQUE7RUFDQSwwQ0FBQTtFQUNBLHNDQUFBO0FDYk47QURnQkU7RUFDSSx5QkFBQTtFQUNBLCtDQUFBO0FDZE47QURpQkU7RUFDSSxnQkFBQTtBQ2ZOO0FEa0JFO0VBQ0ksY0FBQTtBQ2hCTjtBRG9CRTtFQUNJLFdBQUE7QUNsQk47QURxQkM7RUFDRyxlQUFBO0VBQWUsWUFBQTtFQUNmLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSx3Q0FBQTtVQUFBLGdDQUFBO0VBQ0Esb0NBQUE7QUNsQko7QURvQkM7RUFDRyxjQUFBO0FDbEJKO0FEb0JDO0VBQ0cseUJBQUE7RUFDQSxjQUFBO0FDbEJKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYWlucGFnZS9tYWlucGFnZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgLnNpZGViYXIge1xuICAgICAgei1pbmRleDogMTAwO1xuICAgICAgLyogQmVoaW5kIHRoZSBuYXZiYXIgKi9cbiAgICAgIHBhZGRpbmc6IDQ4cHggMCAwO1xuICAgICAgLyogSGVpZ2h0IG9mIG5hdmJhciAqL1xuICAgICAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIDAgcmdiYSgwLCAwLCAwLCAuMSk7XG4gICAgICBmb250LXNpemUgOiAuODc1cmVtO1xuICB9XG5cbiAgLnNpZGViYXItc3RpY2t5IHtcbiAgICAgIHBvc2l0aW9uICAgOiByZWxhdGl2ZTtcbiAgICAgIHRvcCAgICAgICAgOiAwO1xuICAgICAgaGVpZ2h0ICAgICA6IGNhbGMoMTAwdmggLSA0OHB4KTtcbiAgICAgIHBhZGRpbmctdG9wOiAuNXJlbTtcbiAgICAgIG92ZXJmbG93LXggOiBoaWRkZW47XG4gICAgICBvdmVyZmxvdy15IDogYXV0bztcbiAgICAgIC8qIFNjcm9sbGFibGUgY29udGVudHMgaWYgdmlld3BvcnQgaXMgc2hvcnRlciB0aGFuIGNvbnRlbnQuICovXG4gIH1cblxuICBAc3VwcG9ydHMgKChwb3NpdGlvbjogLXdlYmtpdC1zdGlja3kpIG9yIChwb3NpdGlvbjogc3RpY2t5KSkge1xuICAgICAgLnNpZGViYXItc3RpY2t5IHtcbiAgICAgICAgICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gICAgICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgIH1cbiAgfVxuXG4gIC5zaWRlYmFyIC5uYXYtbGluayB7XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgY29sb3IgICAgICA6ICMzMzM7XG4gIH1cblxuICAuc2lkZWJhciAubmF2LWxpbmsgLmZlYXRoZXIge1xuICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gICAgICBjb2xvciAgICAgICA6ICM5OTk7XG4gIH1cblxuICAuc2lkZWJhciAubmF2LWxpbmsuYWN0aXZlIHtcbiAgICAgIGNvbG9yOiAjMDA3YmZmO1xuICB9XG5cbiAgLnNpZGViYXIgLm5hdi1saW5rOmhvdmVyIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIH1cblxuICAuc2lkZWJhci1oZWFkaW5nIHtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICB9XG5cbiAgLypcbiAgICogQ29udGVudFxuICAgKi9cblxuICBbcm9sZT1cIm1haW5cIl0ge1xuICAgICAgcGFkZGluZy10b3A6IDEzM3B4O1xuICAgICAgLyogU3BhY2UgZm9yIGZpeGVkIG5hdmJhciAqL1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgICBbcm9sZT1cIm1haW5cIl0ge1xuICAgICAgICAgIHBhZGRpbmctdG9wOiA0OHB4O1xuICAgICAgICAgIC8qIFNwYWNlIGZvciBmaXhlZCBuYXZiYXIgKi9cbiAgICAgIH1cbiAgfVxuXG4gIC8qXG4gICAqIE5hdmJhclxuICAgKi9cblxuICAubmF2YmFyLWJyYW5kIHtcbiAgICAgIHBhZGRpbmctdG9wICAgICA6IC43NXJlbTtcbiAgICAgIHBhZGRpbmctYm90dG9tICA6IC43NXJlbTtcbiAgICAgIGZvbnQtc2l6ZSAgICAgICA6IDFyZW07XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC4yNSk7XG4gICAgICBib3gtc2hhZG93ICAgICAgOiBpbnNldCAtMXB4IDAgMCByZ2JhKDAsIDAsIDAsIC4yNSk7XG4gIH1cblxuICAubmF2YmFyIC5mb3JtLWNvbnRyb2wge1xuICAgICAgcGFkZGluZyAgICAgIDogLjc1cmVtIDFyZW07XG4gICAgICBib3JkZXItd2lkdGggOiAwO1xuICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgfVxuXG4gIC5mb3JtLWNvbnRyb2wtZGFyayB7XG4gICAgICBjb2xvciAgICAgICAgICAgOiAjZmZmO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMSk7XG4gICAgICBib3JkZXItY29sb3IgICAgOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xKTtcbiAgfVxuXG4gIC5mb3JtLWNvbnRyb2wtZGFyazpmb2N1cyB7XG4gICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgYm94LXNoYWRvdyAgOiAwIDAgMCAzcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAuMjUpO1xuICB9XG5cbiAgLnN0YXItbmFtZSB7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG5cbiAgLmFuY2hvci1zdGFyLW5hbWUge1xuICAgICAgY29sb3I6IGluaGVyaXQ7XG4gIH1cblxuXG4gIC5uYXYtcGFnaW5nLW1haW4ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLy9zb21lIG5ldyB1cGRhdGUgZm9yIEh1YW4ncyBuZXcgd2F5IG9mIHNob3dpbmcgc3RhciBpbWFnZVxuIC5tYWlsLWljb24ge1xuICAgIGN1cnNvcjpwb2ludGVyO2N1cnNvcjpoYW5kO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG4gICAgbGVmdDoyMCU7XG4gICAgbWFyZ2luLXRvcDogODUlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC04MCUsIDEwMCUpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtODAlLCAxMDAlKVxuIH1cbiBpLmZhc3tcbiAgICBjb2xvcjojNzQ0RkM0O1xuIH1cbiAuYnRuLXB1cnBsZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM3NDRGQzQ7XG4gICAgY29sb3I6I2ZmZmZmZjtcbiB9XG4gICIsIi5zaWRlYmFyIHtcbiAgei1pbmRleDogMTAwO1xuICAvKiBCZWhpbmQgdGhlIG5hdmJhciAqL1xuICBwYWRkaW5nOiA0OHB4IDAgMDtcbiAgLyogSGVpZ2h0IG9mIG5hdmJhciAqL1xuICBib3gtc2hhZG93OiBpbnNldCAtMXB4IDAgMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG59XG4uc2lkZWJhci1zdGlja3kge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMDtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDhweCk7XG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgLyogU2Nyb2xsYWJsZSBjb250ZW50cyBpZiB2aWV3cG9ydCBpcyBzaG9ydGVyIHRoYW4gY29udGVudC4gKi9cbn1cbkBzdXBwb3J0cyAoKHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreSkgb3IgKHBvc2l0aW9uOiBzdGlja3kpKSB7XG4gIC5zaWRlYmFyLXN0aWNreSB7XG4gICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gIH1cbn1cbi5zaWRlYmFyIC5uYXYtbGluayB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjMzMzO1xufVxuLnNpZGViYXIgLm5hdi1saW5rIC5mZWF0aGVyIHtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gIGNvbG9yOiAjOTk5O1xufVxuLnNpZGViYXIgLm5hdi1saW5rLmFjdGl2ZSB7XG4gIGNvbG9yOiAjMDA3YmZmO1xufVxuLnNpZGViYXIgLm5hdi1saW5rOmhvdmVyIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5zaWRlYmFyLWhlYWRpbmcge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbi8qXG4gICAqIENvbnRlbnRcbiAgICovXG5bcm9sZT1cIm1haW5cIl0ge1xuICBwYWRkaW5nLXRvcDogMTMzcHg7XG4gIC8qIFNwYWNlIGZvciBmaXhlZCBuYXZiYXIgKi9cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICBbcm9sZT1cIm1haW5cIl0ge1xuICAgIHBhZGRpbmctdG9wOiA0OHB4O1xuICAgIC8qIFNwYWNlIGZvciBmaXhlZCBuYXZiYXIgKi9cbiAgfVxufVxuLypcbiAgICogTmF2YmFyXG4gICAqL1xuLm5hdmJhci1icmFuZCB7XG4gIHBhZGRpbmctdG9wOiAwLjc1cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC43NXJlbTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBib3gtc2hhZG93OiBpbnNldCAtMXB4IDAgMCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xufVxuLm5hdmJhciAuZm9ybS1jb250cm9sIHtcbiAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xuICBib3JkZXItd2lkdGg6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG4uZm9ybS1jb250cm9sLWRhcmsge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbn1cbi5mb3JtLWNvbnRyb2wtZGFyazpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xufVxuLnN0YXItbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uYW5jaG9yLXN0YXItbmFtZSB7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuLm5hdi1wYWdpbmctbWFpbiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1haWwtaWNvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY3Vyc29yOiBoYW5kO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDIwJTtcbiAgbWFyZ2luLXRvcDogODUlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtODAlLCAxMDAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC04MCUsIDEwMCUpO1xufVxuaS5mYXMge1xuICBjb2xvcjogIzc0NEZDNDtcbn1cbi5idG4tcHVycGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc0NEZDNDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/mainpage/mainpage.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/mainpage/mainpage.component.ts ***!
  \***********************************************************/
/*! exports provided: MainpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainpageComponent", function() { return MainpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _services_star_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/star.service */ "./src/app/services/star.service.ts");




var MainpageComponent = /** @class */ (function () {
    function MainpageComponent(starService, loginService) {
        this.starService = starService;
        this.loginService = loginService;
        this.maxChars = 500;
        // make a package of user request
        this.userRequest = {
            toEmail: '',
            message: ''
        };
        // Init to make sure the Modal of Order not found null user.
        // TO-DO : find solution for handle null case
        this.selectedStar = {
            id: 1,
            name: "",
            price: 0,
            isOfficial: false
        };
    }
    MainpageComponent.prototype.ngOnInit = function () {
        this.getStars();
        //try to pass user from main header to main page :))
        if (this.loginService.isLoggedIn) {
            this.currentUser = this.loginService.currentUser;
        }
    };
    /**
     * A function to get stars when the web is initialized
     */
    MainpageComponent.prototype.getStars = function () {
        var _this = this;
        this.starService.getStars().subscribe(function (stars) { return _this.stars = stars; });
    };
    /**
     * A function trigger when user click on the mail icon of the star
     * @param star Star - the star who is selected
     */
    MainpageComponent.prototype.onSelect = function (star) {
        //if user login the star will be selected, order modal will be shown, login modal otherwise
        if (this.currentUser) {
            this.selectedStar = star;
            $('#OrderModal').modal('show');
        }
        else
            $('#SignInModal').modal('show');
    };
    MainpageComponent.ctorParameters = function () { return [
        { type: _services_star_service__WEBPACK_IMPORTED_MODULE_3__["StarService"] },
        { type: _services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }
    ]; };
    MainpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mainpage',
            template: __webpack_require__(/*! raw-loader!./mainpage.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/mainpage/mainpage.component.html"),
            styles: [__webpack_require__(/*! ./mainpage.component.less */ "./src/app/components/mainpage/mainpage.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_star_service__WEBPACK_IMPORTED_MODULE_3__["StarService"], _services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], MainpageComponent);
    return MainpageComponent;
}());



/***/ }),

/***/ "./src/app/components/my-profile/my-profile.component.less":
/*!*****************************************************************!*\
  !*** ./src/app/components/my-profile/my-profile.component.less ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbXktcHJvZmlsZS9teS1wcm9maWxlLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/components/my-profile/my-profile.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/my-profile/my-profile.component.ts ***!
  \***************************************************************/
/*! exports provided: MyProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfileComponent", function() { return MyProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MyProfileComponent = /** @class */ (function () {
    function MyProfileComponent() {
    }
    MyProfileComponent.prototype.ngOnInit = function () {
    };
    MyProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-profile',
            template: __webpack_require__(/*! raw-loader!./my-profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/my-profile/my-profile.component.html"),
            styles: [__webpack_require__(/*! ./my-profile.component.less */ "./src/app/components/my-profile/my-profile.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MyProfileComponent);
    return MyProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.less":
/*!*************************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.less ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.ts ***!
  \***********************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.less */ "./src/app/components/page-not-found/page-not-found.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/components/payment-process/payment-process.component.less":
/*!***************************************************************************!*\
  !*** ./src/app/components/payment-process/payment-process.component.less ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGF5bWVudC1wcm9jZXNzL3BheW1lbnQtcHJvY2Vzcy5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/components/payment-process/payment-process.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/payment-process/payment-process.component.ts ***!
  \*************************************************************************/
/*! exports provided: PaymentProcessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentProcessComponent", function() { return PaymentProcessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PaymentProcessComponent = /** @class */ (function () {
    function PaymentProcessComponent() {
    }
    PaymentProcessComponent.prototype.ngOnInit = function () {
    };
    PaymentProcessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-payment-process',
            template: __webpack_require__(/*! raw-loader!./payment-process.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/payment-process/payment-process.component.html"),
            styles: [__webpack_require__(/*! ./payment-process.component.less */ "./src/app/components/payment-process/payment-process.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PaymentProcessComponent);
    return PaymentProcessComponent;
}());



/***/ }),

/***/ "./src/app/components/request-create/request-create.component.less":
/*!*************************************************************************!*\
  !*** ./src/app/components/request-create/request-create.component.less ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVxdWVzdC1jcmVhdGUvcmVxdWVzdC1jcmVhdGUuY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/components/request-create/request-create.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/request-create/request-create.component.ts ***!
  \***********************************************************************/
/*! exports provided: RequestCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestCreateComponent", function() { return RequestCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RequestCreateComponent = /** @class */ (function () {
    function RequestCreateComponent() {
    }
    RequestCreateComponent.prototype.ngOnInit = function () {
    };
    RequestCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-request-create',
            template: __webpack_require__(/*! raw-loader!./request-create.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/request-create/request-create.component.html"),
            styles: [__webpack_require__(/*! ./request-create.component.less */ "./src/app/components/request-create/request-create.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RequestCreateComponent);
    return RequestCreateComponent;
}());



/***/ }),

/***/ "./src/app/components/reset-password/reset-password.component.less":
/*!*************************************************************************!*\
  !*** ./src/app/components/reset-password/reset-password.component.less ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".purple-theme {\n  background-color: #744FC4;\n  color: #ffffff;\n}\n.form-label-group {\n  position: relative;\n  margin-bottom: 1rem;\n}\n.form-label-group > input,\n.form-label-group > label {\n  height: 3.125rem;\n  padding: 0.75rem;\n}\n.form-label-group > label {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: block;\n  width: 100%;\n  margin-bottom: 0;\n  /* Override default `<label>` margin */\n  line-height: 1.5;\n  color: #495057;\n  pointer-events: none;\n  cursor: text;\n  /* Match the input under the label */\n  border: 1px solid transparent;\n  border-radius: 0.25rem;\n  transition: all 0.1s ease-in-out;\n}\n.form-label-group input::-webkit-input-placeholder {\n  color: transparent;\n}\n.form-label-group input::-ms-input-placeholder {\n  color: transparent;\n}\n.form-label-group input::-moz-placeholder {\n  color: transparent;\n}\n.form-label-group input::placeholder {\n  color: transparent;\n}\n.form-label-group input:not(:placeholder-shown) {\n  padding-top: 1.25rem;\n  padding-bottom: 0.25rem;\n}\n.form-label-group input:not(:placeholder-shown) ~ label {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  font-size: 12px;\n  color: #777;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3ZpZGlkb2wvdmlkaWRvbC9zcmMvYXBwL2NvbXBvbmVudHMvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7QUNDSjtBREdBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQ0RKO0FESUE7O0VBRUksZ0JBQUE7RUFDQSxnQkFBQTtBQ0ZKO0FES0E7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQ0hGLHNDQUFzQztFREtwQyxnQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUNIRixvQ0FBb0M7RURLbEMsNkJBQUE7RUFDQSxzQkFBQTtFQUNBLGdDQUFBO0FDSEo7QURNQTtFQUNJLGtCQUFBO0FDSko7QURXQTtFQUNJLGtCQUFBO0FDTko7QURTQTtFQUNJLGtCQUFBO0FDUEo7QURVQTtFQUNJLGtCQUFBO0FDUko7QURXQTtFQUNJLG9CQUFBO0VBQ0EsdUJBQUE7QUNUSjtBRFlBO0VBQ0ksb0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDVkoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLnB1cnBsZS10aGVtZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc0NEZDNDtcbiAgICBjb2xvciAgICAgICAgICAgOiAjZmZmZmZmO1xufVxuXG4vL2NvcHkgZnJvbSBUcnVuZyA6KSkgaW4gbWFpbnBhZ2UgY29tcG9uZW50XG4uZm9ybS1sYWJlbC1ncm91cCB7XG4gICAgcG9zaXRpb24gICAgIDogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLmZvcm0tbGFiZWwtZ3JvdXA+aW5wdXQsXG4uZm9ybS1sYWJlbC1ncm91cD5sYWJlbCB7XG4gICAgaGVpZ2h0IDogMy4xMjVyZW07XG4gICAgcGFkZGluZzogLjc1cmVtO1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cD5sYWJlbCB7XG4gICAgcG9zaXRpb24gICAgIDogYWJzb2x1dGU7XG4gICAgdG9wICAgICAgICAgIDogMDtcbiAgICBsZWZ0ICAgICAgICAgOiAwO1xuICAgIGRpc3BsYXkgICAgICA6IGJsb2NrO1xuICAgIHdpZHRoICAgICAgICA6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAvKiBPdmVycmlkZSBkZWZhdWx0IGA8bGFiZWw+YCBtYXJnaW4gKi9cbiAgICBsaW5lLWhlaWdodCAgIDogMS41O1xuICAgIGNvbG9yICAgICAgICAgOiAjNDk1MDU3O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGN1cnNvciAgICAgICAgOiB0ZXh0O1xuICAgIC8qIE1hdGNoIHRoZSBpbnB1dCB1bmRlciB0aGUgbGFiZWwgKi9cbiAgICBib3JkZXIgICAgICAgOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xuICAgIHRyYW5zaXRpb24gICA6IGFsbCAuMXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0OjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKSB7XG4gICAgcGFkZGluZy10b3AgICA6IDEuMjVyZW07XG4gICAgcGFkZGluZy1ib3R0b206IC4yNXJlbTtcbn1cblxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6bm90KDpwbGFjZWhvbGRlci1zaG93bil+bGFiZWwge1xuICAgIHBhZGRpbmctdG9wICAgOiAuMjVyZW07XG4gICAgcGFkZGluZy1ib3R0b206IC4yNXJlbTtcbiAgICBmb250LXNpemUgICAgIDogMTJweDtcbiAgICBjb2xvciAgICAgICAgIDogIzc3Nztcbn0iLCIucHVycGxlLXRoZW1lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc0NEZDNDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4uZm9ybS1sYWJlbC1ncm91cCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbi5mb3JtLWxhYmVsLWdyb3VwID4gaW5wdXQsXG4uZm9ybS1sYWJlbC1ncm91cCA+IGxhYmVsIHtcbiAgaGVpZ2h0OiAzLjEyNXJlbTtcbiAgcGFkZGluZzogMC43NXJlbTtcbn1cbi5mb3JtLWxhYmVsLWdyb3VwID4gbGFiZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICAvKiBPdmVycmlkZSBkZWZhdWx0IGA8bGFiZWw+YCBtYXJnaW4gKi9cbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6ICM0OTUwNTc7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBjdXJzb3I6IHRleHQ7XG4gIC8qIE1hdGNoIHRoZSBpbnB1dCB1bmRlciB0aGUgbGFiZWwgKi9cbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0O1xufVxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKSB7XG4gIHBhZGRpbmctdG9wOiAxLjI1cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC4yNXJlbTtcbn1cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pIH4gbGFiZWwge1xuICBwYWRkaW5nLXRvcDogMC4yNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuMjVyZW07XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM3Nzc7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/reset-password/reset-password.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/reset-password/reset-password.component.ts ***!
  \***********************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        this.isBlank = JSON.parse(sessionStorage.getItem("isBlank"));
        this.isPassNotMatch = JSON.parse(sessionStorage.getItem("isPassNotMatch"));
        this.isCodeNotMatch = JSON.parse(sessionStorage.getItem("isCodeNotMatch"));
    };
    /**
    * A function to preserve state of 3 var name isBlank, isPassNotMatch, isCodeNotMatch
    * when the page is reloaded.
    * @param blank string - isBlank, @param passNotMatch string - isPassNotMatch, @param codeNotMatch string - isCodeNotMatch
    */
    ResetPasswordComponent.prototype.setAlertState = function (blank, passNotMatch, codeNotMatch) {
        sessionStorage.setItem("isBlank", blank);
        sessionStorage.setItem("isPassNotMatch", passNotMatch);
        sessionStorage.setItem("isCodeNotMatch", codeNotMatch);
    };
    /**
     * A function is triggered when submit button is pressed
     * This function will check blank and password match and then
     * raise alert
     */
    ResetPasswordComponent.prototype.SubmitPass = function () {
        if (this.newPass == null || this.confirmPass == null || this.securityCode == null) {
            this.setAlertState("true", "false", "false");
            location.reload();
        }
        else if (this.newPass != this.confirmPass) {
            this.setAlertState("false", "true", "false");
            location.reload();
        }
        else {
            //do something about sending information to server 
            //maybe navigate to mainpage without sign in in order to make user sign in
            //or auto sign in ??
            this.setAlertState("false", "false", "false");
            this.router.navigate(['']);
        }
    };
    ResetPasswordComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    ResetPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reset-password',
            template: __webpack_require__(/*! raw-loader!./reset-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/reset-password/reset-password.component.html"),
            styles: [__webpack_require__(/*! ./reset-password.component.less */ "./src/app/components/reset-password/reset-password.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/components/star-profile/star-profile.component.less":
/*!*********************************************************************!*\
  !*** ./src/app/components/star-profile/star-profile.component.less ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3Rhci1wcm9maWxlL3N0YXItcHJvZmlsZS5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/components/star-profile/star-profile.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/star-profile/star-profile.component.ts ***!
  \*******************************************************************/
/*! exports provided: StarProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarProfileComponent", function() { return StarProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_star_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/star-profile.service */ "./src/app/services/star-profile.service.ts");



var StarProfileComponent = /** @class */ (function () {
    function StarProfileComponent(starprofileService) {
        this.starprofileService = starprofileService;
    }
    StarProfileComponent.prototype.ngOnInit = function () {
        this.getStarProfile();
        this.starprofile.featureVideoUrl;
    };
    /**
    * A function to get star profile when the web is initialized
    */
    StarProfileComponent.prototype.getStarProfile = function () {
        var _this = this;
        this.starprofileService.getStarProfile().subscribe(function (starprofile) { return _this.starprofile = starprofile; });
    };
    StarProfileComponent.ctorParameters = function () { return [
        { type: src_app_services_star_profile_service__WEBPACK_IMPORTED_MODULE_2__["StarProfileService"] }
    ]; };
    StarProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-star-profile',
            template: __webpack_require__(/*! raw-loader!./star-profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/star-profile/star-profile.component.html"),
            styles: [__webpack_require__(/*! ./star-profile.component.less */ "./src/app/components/star-profile/star-profile.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_star_profile_service__WEBPACK_IMPORTED_MODULE_2__["StarProfileService"]])
    ], StarProfileComponent);
    return StarProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/userlogin/userlogin.component.less":
/*!***************************************************************!*\
  !*** ./src/app/components/userlogin/userlogin.component.less ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlcmxvZ2luL3VzZXJsb2dpbi5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/components/userlogin/userlogin.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/userlogin/userlogin.component.ts ***!
  \*************************************************************/
/*! exports provided: UserloginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserloginComponent", function() { return UserloginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserloginComponent = /** @class */ (function () {
    function UserloginComponent() {
    }
    UserloginComponent.prototype.ngOnInit = function () {
    };
    UserloginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-userlogin',
            template: "\n    <p>\n      userlogin works!\n    </p>\n  ",
            styles: [__webpack_require__(/*! ./userlogin.component.less */ "./src/app/components/userlogin/userlogin.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserloginComponent);
    return UserloginComponent;
}());



/***/ }),

/***/ "./src/app/mock-object/mock-capcha.ts":
/*!********************************************!*\
  !*** ./src/app/mock-object/mock-capcha.ts ***!
  \********************************************/
/*! exports provided: DEFAULT_CAPCHA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_CAPCHA", function() { return DEFAULT_CAPCHA; });
var DEFAULT_CAPCHA = {
    code: "qGphJ",
    imageLocation: "./assets/images/capcha.png"
};


/***/ }),

/***/ "./src/app/mock-object/mock-notification.ts":
/*!**************************************************!*\
  !*** ./src/app/mock-object/mock-notification.ts ***!
  \**************************************************/
/*! exports provided: DEFAULT_NOTIFICATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_NOTIFICATION", function() { return DEFAULT_NOTIFICATION; });
var DEFAULT_NOTIFICATION = [{
        from: "System",
        message: "Welcome to become our member. We love to have you...",
        link: ""
    },
    {
        from: "System",
        message: "Would you like to change your avatar?",
        link: "/myprofile"
    },
    {
        from: "System",
        message: "Please update your information.",
        link: "/myprofile"
    },
];


/***/ }),

/***/ "./src/app/mock-object/mock-star-profile.ts":
/*!**************************************************!*\
  !*** ./src/app/mock-object/mock-star-profile.ts ***!
  \**************************************************/
/*! exports provided: MOCK_STARPROFILE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOCK_STARPROFILE", function() { return MOCK_STARPROFILE; });
/**
 * TO-DO: Make the data more real, thumbnail for videos, comments object missing
 */
var MOCK_STARPROFILE = {
    id: 1,
    userName: "hoailinh",
    fullName: "Hoài Linh",
    displayName: "Hoài Linh",
    price: 490000,
    isOfficial: true,
    description: "Hoài Linh tên đầy đủ là Võ Nguyễn Hoài Linh (sinh ngày 18 tháng 12 năm 1969) là một diễn viên hài kịch người Việt Nam. Hoài Linh là danh hài đạt được nhiều giải thưởng như Cù Nèo Vàng, Mai Vàng,... được phong danh hiệu Nghệ sĩ Ưu tú năm 2015 và là nghệ sĩ hải ngoại đầu tiên được phong tặng danh hiệu này.",
    featureVideoUrl: "https://www.youtube.com/embed/fa3Wy6kryuI?controls=0",
    listOfRequestedVideos: [
        {
            id: 1,
            numberOfLikes: 3,
            isRequested: true,
            title: "Tặng cho Nguyễn Văn A",
            subtitle: "Quà tặng từ bố mẹ",
            description: "Abc",
            thumbnail: "./assets/images/userAvatar/1/GridSentToFan/sent-to-fan.jpg",
            createdDate: new Date("2019-01-16"),
            lastModifiedDate: new Date("2019-01-16")
        },
        {
            id: 2,
            numberOfLikes: 6,
            isRequested: true,
            title: "Tặng cho Nguyễn Văn A",
            subtitle: "Quà tặng từ bố mẹ",
            thumbnail: "./assets/images/userAvatar/1/GridSentToFan/sent-to-fan.jpg",
            description: "Abc",
            createdDate: new Date("2019-01-16"),
            lastModifiedDate: new Date("2019-01-16")
        },
        {
            id: 3,
            numberOfLikes: 1,
            isRequested: true,
            title: "Tặng cho Nguyễn Văn A",
            subtitle: "Quà tặng từ bố mẹ",
            thumbnail: "./assets/images/userAvatar/1/GridSentToFan/sent-to-fan.jpg",
            description: "Abc",
            createdDate: new Date("2019-01-16"),
            lastModifiedDate: new Date("2019-01-16")
        },
        {
            id: 4,
            numberOfLikes: 2,
            isRequested: true,
            title: "Tặng cho Nguyễn Văn A",
            subtitle: "Quà tặng từ bố mẹ",
            thumbnail: "./assets/images/userAvatar/1/GridSentToFan/sent-to-fan.jpg",
            description: "Abc",
            createdDate: new Date("2019-01-16"),
            lastModifiedDate: new Date("2019-01-16")
        },
        {
            id: 5,
            numberOfLikes: 9,
            isRequested: true,
            title: "Tặng cho Nguyễn Văn A",
            subtitle: "Quà tặng từ bố mẹ",
            thumbnail: "./assets/images/userAvatar/1/GridSentToFan/sent-to-fan.jpg",
            description: "Abc",
            createdDate: new Date("2019-01-16"),
            lastModifiedDate: new Date("2019-01-16")
        }
    ],
    listOfSelfVideos: [
        {
            id: 1,
            numberOfLikes: 3,
            isRequested: false,
            title: "Mình đẹp trai vcoz",
            subtitle: "Abc",
            thumbnail: "./assets/images/userAvatar/1/GridPersonal/personal.jpg",
            description: "Abc",
            createdDate: new Date("2019-01-16"),
            lastModifiedDate: new Date("2019-01-16")
        },
        {
            id: 2,
            numberOfLikes: 2,
            isRequested: false,
            title: "Mình đẹp trai vcoz",
            subtitle: "Abc",
            thumbnail: "./assets/images/userAvatar/1/GridPersonal/personal.jpg",
            description: "Abc",
            createdDate: new Date("2019-01-16"),
            lastModifiedDate: new Date("2019-01-16")
        },
        {
            id: 3,
            numberOfLikes: 10,
            isRequested: false,
            title: "Mình đẹp trai vcoz",
            subtitle: "Abc",
            thumbnail: "./assets/images/userAvatar/1/GridPersonal/personal.jpg",
            description: "Abc",
            createdDate: new Date("2019-01-16"),
            lastModifiedDate: new Date("2019-01-16")
        }
    ],
};


/***/ }),

/***/ "./src/app/mock-object/mock-star.ts":
/*!******************************************!*\
  !*** ./src/app/mock-object/mock-star.ts ***!
  \******************************************/
/*! exports provided: MOCK_STARS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOCK_STARS", function() { return MOCK_STARS; });
var MOCK_STARS = [
    {
        id: 1,
        name: 'Hoài Linh',
        price: 490000,
        isOfficial: true
    },
    {
        id: 2,
        name: 'Tăng Thanh Hà',
        price: 210000,
        isOfficial: true
    },
    {
        id: 3,
        name: 'Khắc Việt',
        price: 180000,
        isOfficial: true
    },
    {
        id: 4,
        name: 'Minh Hằng',
        price: 280000,
        isOfficial: true
    },
    {
        id: 5,
        name: 'Đông Nhi',
        price: 215000,
        isOfficial: true
    },
    {
        id: 6,
        name: 'Đan Trường',
        price: 170000,
        isOfficial: true
    },
    {
        id: 7,
        name: 'Tuấn Hưng',
        price: 390000,
        isOfficial: true
    },
    {
        id: 8,
        name: 'Mỹ Tâm',
        price: 450000,
        isOfficial: true
    },
    {
        id: 9,
        name: 'Sơn Tùng',
        price: 600000,
        isOfficial: true
    },
    {
        id: 10,
        name: 'Noo Phước Thịnh',
        price: 450000,
        isOfficial: true
    },
    {
        id: 11,
        name: 'Trấn Thành',
        price: 500000,
        isOfficial: true
    },
    {
        id: 12,
        name: 'Hariwon',
        price: 450000,
        isOfficial: true
    },
    {
        id: 13,
        name: 'Hồ Ngọc Hà',
        price: 380000,
        isOfficial: true
    },
    {
        id: 14,
        name: 'Khởi My',
        price: 280000,
        isOfficial: false
    },
    {
        id: 15,
        name: 'Ngọc Trinh',
        price: 520000,
        isOfficial: true
    },
    {
        id: 16,
        name: 'Trần Minh Phương',
        price: 210000,
        isOfficial: true
    }
];


/***/ }),

/***/ "./src/app/mock-object/mock-user.ts":
/*!******************************************!*\
  !*** ./src/app/mock-object/mock-user.ts ***!
  \******************************************/
/*! exports provided: DEFAULT_USER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_USER", function() { return DEFAULT_USER; });
var DEFAULT_USER = {
    id: 1,
    username: 'ryuugamineraito',
    fullname: 'Nguyen Dinh Huan',
    email: 'ryuugamineraito@gmail.com',
    avatarLocation: './assets/default_avatar/saitou.png'
};


/***/ }),

/***/ "./src/app/pipes/safe.pipe.ts":
/*!************************************!*\
  !*** ./src/app/pipes/safe.pipe.ts ***!
  \************************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var SafePipe = /** @class */ (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (value, type) {
        switch (type) {
            case 'html': return this.sanitizer.bypassSecurityTrustHtml(value);
            case 'style': return this.sanitizer.bypassSecurityTrustStyle(value);
            case 'script': return this.sanitizer.bypassSecurityTrustScript(value);
            case 'url': return this.sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl': return this.sanitizer.bypassSecurityTrustResourceUrl(value);
            default: throw new Error("Invalid safe type specified: " + type);
        }
    };
    SafePipe.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
    ]; };
    SafePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'safe'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], SafePipe);
    return SafePipe;
}());



/***/ }),

/***/ "./src/app/services/avatar.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/avatar.service.ts ***!
  \********************************************/
/*! exports provided: AvatarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvatarService", function() { return AvatarService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _mock_object_mock_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mock-object/mock-user */ "./src/app/mock-object/mock-user.ts");




var AvatarService = /** @class */ (function () {
    function AvatarService() {
    }
    AvatarService.prototype.getAvatar = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_mock_object_mock_user__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_USER"]);
    };
    AvatarService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AvatarService);
    return AvatarService;
}());



/***/ }),

/***/ "./src/app/services/capcha.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/capcha.service.ts ***!
  \********************************************/
/*! exports provided: CapchaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapchaService", function() { return CapchaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _mock_object_mock_capcha__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mock-object/mock-capcha */ "./src/app/mock-object/mock-capcha.ts");




var CapchaService = /** @class */ (function () {
    function CapchaService() {
    }
    CapchaService.prototype.getCapcha = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_mock_object_mock_capcha__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_CAPCHA"]);
    };
    CapchaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CapchaService);
    return CapchaService;
}());



/***/ }),

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginService = /** @class */ (function () {
    function LoginService() {
        this.isLoggedIn = false;
    }
    /**
     * A draft function simulate the log in process
     * @param result boolean - true if user success logging in
     */
    LoginService.prototype.signIn = function (result) {
        this.isLoggedIn = result;
    };
    /**
     * A draft function simulate the register process
     * @param result boolean - true if user success registering
     */
    LoginService.prototype.signUp = function (result) {
    };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/services/notify.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/notify.service.ts ***!
  \********************************************/
/*! exports provided: NotifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifyService", function() { return NotifyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _mock_object_mock_notification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mock-object/mock-notification */ "./src/app/mock-object/mock-notification.ts");




var NotifyService = /** @class */ (function () {
    function NotifyService() {
    }
    NotifyService.prototype.getNotifications = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_mock_object_mock_notification__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_NOTIFICATION"]);
    };
    NotifyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotifyService);
    return NotifyService;
}());



/***/ }),

/***/ "./src/app/services/star-profile.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/star-profile.service.ts ***!
  \**************************************************/
/*! exports provided: StarProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarProfileService", function() { return StarProfileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_object_mock_star_profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mock-object/mock-star-profile */ "./src/app/mock-object/mock-star-profile.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var StarProfileService = /** @class */ (function () {
    function StarProfileService() {
    }
    StarProfileService.prototype.getStarProfile = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_mock_object_mock_star_profile__WEBPACK_IMPORTED_MODULE_2__["MOCK_STARPROFILE"]);
    };
    StarProfileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StarProfileService);
    return StarProfileService;
}());



/***/ }),

/***/ "./src/app/services/star.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/star.service.ts ***!
  \******************************************/
/*! exports provided: StarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarService", function() { return StarService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_object_mock_star__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mock-object/mock-star */ "./src/app/mock-object/mock-star.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var StarService = /** @class */ (function () {
    function StarService() {
    }
    StarService.prototype.getStars = function () {
        // TODO: send the message _after_fetching stars
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_mock_object_mock_star__WEBPACK_IMPORTED_MODULE_2__["MOCK_STARS"]);
    };
    StarService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StarService);
    return StarService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/vididol/vididol/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map