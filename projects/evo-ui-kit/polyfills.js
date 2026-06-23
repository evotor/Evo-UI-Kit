if (!window.global) {
    window.global = window;
}

if (typeof jasmine !== 'undefined' && !jasmine.QueryString) {
    jasmine.QueryString = function() {
        this.getParameterMap = function() {
            return {};
        };
    };
}
