var Core;
(function (Core) {
    var Common = (function () {
        function Common() {
        }
        Common.prototype.GetType = function (object) {
            var name = Object.prototype.toString.call(object);
            return name;
        };
        return Common;
    })();
    Core.Common = Common;
})(Core || (Core = {}));
/// <reference path="Common.ts" />
var Core;
(function (Core) {
    var UsedToCommon1 = (function () {
        function UsedToCommon1() {
        }
        UsedToCommon1.prototype.Call = function () {
            var common = new Core.Common();
            alert(common.GetType(this));
        };
        return UsedToCommon1;
    })();
    Core.UsedToCommon1 = UsedToCommon1;
})(Core || (Core = {}));
/// <reference path="Common.ts" />
var Core;
(function (Core) {
    var UsedToCommon2 = (function () {
        function UsedToCommon2() {
        }
        UsedToCommon2.prototype.Call = function () {
            var common = new Core.Common();
            alert(common.GetType(""));
        };
        return UsedToCommon2;
    })();
    Core.UsedToCommon2 = UsedToCommon2;
})(Core || (Core = {}));
/// <reference path="Core/UsedToCommon1.ts" />
/// <reference path="Core/UsedToCommon2.ts" />
var App;
(function (App) {
    var Common1 = Core.UsedToCommon1; // alias
    var Common2 = Core.UsedToCommon2;
    var Main = (function () {
        function Main() {
        }
        Main.prototype.Caller = function () {
            var com1 = new Common1();
            com1.Call();
            var com2 = new Common2();
            com2.Call();
        };
        return Main;
    })();
    App.Main = Main;
})(App || (App = {}));
