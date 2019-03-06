import { Directive, ElementRef, Input } from '@angular/core';
var MaterialIcon = (function () {
    function MaterialIcon(el) {
        this.el = el;
    }
    Object.defineProperty(MaterialIcon.prototype, "mdName", {
        set: function (val) {
            this.el.nativeElement.innerHTML = val;
        },
        enumerable: true,
        configurable: true
    });
    return MaterialIcon;
}());
export { MaterialIcon };
MaterialIcon.decorators = [
    { type: Directive, args: [{
                selector: 'ion-icon[md-name]'
            },] },
];
/** @nocollapse */
MaterialIcon.ctorParameters = function () { return [
    { type: ElementRef, },
]; };
MaterialIcon.propDecorators = {
    'mdName': [{ type: Input, args: ['md-name',] },],
};
//# sourceMappingURL=material-icon.directive.js.map