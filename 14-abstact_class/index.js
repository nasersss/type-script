var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Food = /** @class */ (function () {
    function Food(title) {
        this.title = title;
    }
    return Food;
}());
var Pizza = /** @class */ (function (_super) {
    __extends(Pizza, _super);
    function Pizza(title, price) {
        var _this = _super.call(this, title) || this;
        _this.price = price;
        return _this;
    }
    // we must implement abstract method getCookingTime()
    Pizza.prototype.getCookingTime = function () {
        console.log(" Cooking time for ".concat(this.title, " is 1 hour price ").concat(this.price));
    };
    return Pizza;
}(Food));
var Burger = /** @class */ (function (_super) {
    __extends(Burger, _super);
    function Burger(title, price) {
        var _this = _super.call(this, title) || this;
        _this.price = price;
        return _this;
    }
    // we must implement abstract method getCookingTime()
    Burger.prototype.getCookingTime = function () {
        console.log(" Cooking time for ".concat(this.title, " is 1 hour price ").concat(this.price));
    };
    return Burger;
}(Food));
var pizza1 = new Pizza('KSA pizza', 150);
pizza1.getCookingTime();
var burger = new Pizza('Chains Burger', 200);
burger.getCookingTime();
