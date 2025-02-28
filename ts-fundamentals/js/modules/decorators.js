"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logMethodInfo = logMethodInfo;
function logMethodInfo(origMethod, _context) {
    function replacementMethod(...args) {
        console.log(`decorated construct: ${_context.kind}`);
        console.log(`decorated construct name: ${_context.name}`);
        const result = origMethod.call(this, ...args);
        console.log(`log: exiting method ${origMethod.name}`);
        return result;
    }
    return replacementMethod;
}
//# sourceMappingURL=decorators.js.map