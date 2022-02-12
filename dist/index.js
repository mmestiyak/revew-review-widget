var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var instance;
var Revew = /** @class */ (function () {
    function Revew(_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.position, position = _c === void 0 ? 'bottom-right' : _c, _d = _b.primaryColor, primaryColor = _d === void 0 ? '#41c19e' : _d, _e = _b.secondaryColor, secondaryColor = _e === void 0 ? '#fff' : _e;
        this.position = this.getPosition(position);
        this.primaryColor = primaryColor;
        this.secondaryColor = secondaryColor;
        this.open = false;
        this.initialise();
        this.createStyles();
        if (instance) {
            throw new Error("You can only create one instance of revew widget! 💔");
        }
        instance = this;
    }
    Revew.prototype.getPosition = function (position) {
        var _a;
        var _b = position.split('-'), vertical = _b[0], horizontal = _b[1];
        return _a = {},
            _a[vertical] = '30px',
            _a[horizontal] = '30px',
            _a;
    };
    Revew.prototype.initialise = function () {
        var _this = this;
        var container = document.createElement('div');
        container.style.position = 'fixed';
        Object.keys(this.position).forEach(function (key) { return (container.style[key] = _this.position[key]); });
        document.body.appendChild(container);
        var buttonContainer = document.createElement('div');
        buttonContainer.classList.add('button-container');
        var chatIcon = document.createElement('img');
        chatIcon.src = 'https://i.ibb.co/z8Lp7CK/star.png';
        chatIcon.classList.add('revew-icon');
        this.chatIcon = chatIcon;
        var closeIcon = document.createElement('img');
        closeIcon.src = 'https://i.ibb.co/8sVRbDb/cross.png';
        closeIcon.classList.add('revew-icon', 'hidden');
        this.closeIcon = closeIcon;
        buttonContainer.appendChild(this.chatIcon);
        buttonContainer.appendChild(this.closeIcon);
        buttonContainer.addEventListener('click', this.toggleOpen.bind(this));
        this.messageContainer = document.createElement('div');
        this.messageContainer.classList.add('hidden', 'review-container');
        this.createMessageContainerContent();
        container.appendChild(this.messageContainer);
        container.appendChild(buttonContainer);
    };
    Revew.prototype.createMessageContainerContent = function () {
        this.messageContainer.innerHTML = '';
        var title = document.createElement('h3');
        title.textContent = "Give your Feedback about us on Revew";
        var form = document.createElement('form');
        form.classList.add('content');
        var email = document.createElement('input');
        email.required = true;
        email.id = 'email';
        email.type = 'email';
        email.placeholder = 'Enter your email address';
        var review = document.createElement('textarea');
        review.required = true;
        review.id = 'review';
        review.placeholder = 'Your Review';
        var reviewScore = document.createElement('div');
        reviewScore.classList.add('rate');
        var singleReviewScore = function (value) {
            return "<input type=\"radio\" id=\"star".concat(value, "\" name=\"rate\" value='").concat(value, "' />\n               <label for=\"star").concat(value, "\" title=\"").concat(value, " Star\">").concat(value, " stars</label>");
        };
        var reviewStarsInput = [1, 2, 3, 4, 5]
            .map(function (item) {
            return singleReviewScore(item + 1);
        })
            .reverse()
            .join('');
        reviewScore.insertAdjacentHTML('afterbegin', reviewStarsInput);
        var btn = document.createElement('button');
        btn.textContent = 'Submit';
        form.appendChild(email);
        form.appendChild(review);
        form.appendChild(reviewScore);
        form.appendChild(btn);
        form.addEventListener('submit', this.submit.bind(this));
        var loader = document.createElement('div');
        loader.classList.add('lds-ripple');
        loader.innerHTML = "<div></div><div></div>";
        loader.addEventListener('fetchStart', function () {
            loader.style.display = 'block';
        });
        loader.addEventListener('fetchEnd', function () {
            loader.style.display = 'none';
        });
        this.messageContainer.appendChild(title);
        this.messageContainer.appendChild(form);
        this.messageContainer.appendChild(loader);
    };
    Revew.prototype.createStyles = function () {
        var styleTag = document.createElement('style');
        styleTag.innerHTML = "\n              .revew-icon {\n                  cursor: pointer;\n                  width: 70%;\n                  position: absolute;\n                  top: 9px;\n                  left: 9px;\n                  transition: transform .3s ease;\n              }\n              .hidden {\n                  transform: scale(0);\n              }\n              .button-container {\n                  background-color: ".concat(this.secondaryColor, ";\n                  width: 60px;\n                  height: 60px;\n                  border-radius: 50%;\n                  box-shadow: 2px 2px 8px 1px ").concat(this.primaryColor, ";\n              }\n              .review-container {\n                  box-shadow: 0 0 18px 8px rgba(0, 0, 0, 0.1), 0 0 32px 32px rgba(0, 0, 0, 0.08);\n                  width: 400px;\n                  right: -25px;\n                  bottom: 75px;\n                  max-height: 400px;\n                  position: absolute;\n                  transition: max-height .2s ease;\n                  font-family: 'Ubuntu Mono', monospace;\n                  border-radius: .5em;\n                  background: ").concat(this.secondaryColor, "\n              }\n         \n              .review-container.hidden {\n                  max-height: 0px;\n              }\n              .review-container h3 {\n                  margin: 0;\n                  padding: 20px 20px;\n                  color: ").concat(this.secondaryColor, ";\n                  background-color: ").concat(this.primaryColor, ";\n              }\n              .review-container .content {\n                  margin: 20px 10px ;\n                  padding: 10px;\n                  display: flex;\n                  background-color: ").concat(this.secondaryColor, ";\n                  flex-direction: column;\n              }\n              .review-container form * {\n                  margin: 5px 0;\n              }\n              .review-container form input {\n                  padding: 10px;\n              }\n              .review-container form textarea {\n                  height: 100px;\n                  padding: 10px;\n              }\n              .review-container form > textarea, input {\n                  outline-color: ").concat(this.primaryColor, ";\n                  border: .5px solid ").concat(this.primaryColor, ";\n                  font-family: 'Ubuntu Mono', monospace;\n                  border-radius: .2em;\n              }\n              .rate {\n                  float:left;\n                  height: 46px;\n                  padding: 0 10px;\n              }\n              .rate:not(:checked) > input {\n                  position:absolute;\n                  top:-9999px;\n              }\n              .rate:not(:checked) > label {\n                  float:right;\n                  width:1em;\n                  overflow:hidden;\n                  white-space:nowrap;\n                  cursor:pointer;\n                  font-size:30px;\n                  color:#ccc;\n              }\n              .rate:not(:checked) > label:before {\n                  content: '\u2605 ';\n              }\n              .rate > input:checked ~ label {\n                  color: ").concat(this.primaryColor, ";    \n              }\n              .rate:not(:checked) > label:hover,\n              .rate:not(:checked) > label:hover ~ label {\n                  color: ").concat(this.primaryColor, ";  \n              }\n              .rate > input:checked + label:hover,\n              .rate > input:checked + label:hover ~ label,\n              .rate > input:checked ~ label:hover,\n              .rate > input:checked ~ label:hover ~ label,\n              .rate > label:hover ~ input:checked ~ label {\n                  color: ").concat(this.primaryColor, ";\n              }\n              .review-container form button {\n                  cursor: pointer;\n                  background-color: ").concat(this.primaryColor, ";\n                  color: ").concat(this.secondaryColor, ";\n                  border: 0;\n                  border-radius: 4px;\n                  padding: 10px;\n              }\n              .review-container form button:hover {\n                  background-color: ").concat(this.primaryColor, ";\n              }\n              .lds-ripple {\n                  display: none;\n                  width: 80px;\n                  height: 80px;\n                  position: absolute;\n                   top: 50%;\n                  left: 50%;\n                  transform: translate(-50%, -50%);\n                }\n                .lds-ripple div {\n                  position: absolute;\n                  border: 4px solid ").concat(this.primaryColor, ";\n                  opacity: 1;\n                  border-radius: 50%;\n                  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;\n                }\n                .lds-ripple div:nth-child(2) {\n                  animation-delay: -0.5s;\n                }\n                @keyframes lds-ripple {\n                  0% {\n                    top: 36px;\n                    left: 36px;\n                    width: 0;\n                    height: 0;\n                    opacity: 1;\n                  }\n                  100% {\n                    top: 0px;\n                    left: 0px;\n                    width: 72px;\n                    height: 72px;\n                    opacity: 0;\n                  }\n                }\n          ").replace(/^\s+|\n/gm, '');
        document.head.appendChild(styleTag);
    };
    Revew.prototype.toggleOpen = function () {
        this.open = !this.open;
        if (this.open) {
            this.chatIcon.classList.add('hidden');
            this.closeIcon.classList.remove('hidden');
            this.messageContainer.classList.remove('hidden');
        }
        else {
            this.createMessageContainerContent();
            this.chatIcon.classList.remove('hidden');
            this.closeIcon.classList.add('hidden');
            this.messageContainer.classList.add('hidden');
        }
    };
    Revew.prototype.submit = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, email, review, rate, formSubmission, sendFormData, err_1;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        event.preventDefault();
                        document
                            .querySelector('.lds-ripple')
                            .dispatchEvent(new CustomEvent('fetchStart'));
                        _a = event.target, email = _a.email, review = _a.review, rate = _a.rate;
                        if (!(email.value && review.value && rate.value))
                            return [2 /*return*/, alert('Please fill everything input before submit')];
                        formSubmission = {
                            email: email.value,
                            review: review.value,
                            reviewStar: rate.value,
                        };
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, 4, 5]);
                        return [4 /*yield*/, fetch('https://revews.herokuapp.com/review', {
                                method: 'POST',
                                headers: {
                                    Accept: 'application/json',
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify(formSubmission),
                            })];
                    case 2:
                        sendFormData = _b.sent();
                        this.messageContainer.innerHTML =
                            '<h3>Thanks for your Review.</h3><p class="content">It means a lot! ⭐';
                        return [3 /*break*/, 5];
                    case 3:
                        err_1 = _b.sent();
                        this.messageContainer.innerHTML =
                            '<h3>Something went wrong, please try again';
                        return [3 /*break*/, 5];
                    case 4:
                        if (document.querySelector('.lds-ripple')) {
                            document
                                .querySelector('.lds-ripple')
                                .dispatchEvent(new CustomEvent('fetchEnd'));
                        }
                        setTimeout(function () {
                            _this.toggleOpen();
                        }, 2000);
                        return [7 /*endfinally*/];
                    case 5:
                        console.log(formSubmission);
                        return [2 /*return*/];
                }
            });
        });
    };
    return Revew;
}());
