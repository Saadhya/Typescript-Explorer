export function logMethodInfo(origMethod:any, _context:ClassMethodDecoratorContext){
    function replacementMethod(this:any, ...args:any[]):any{
        console.log(`decorated construct: ${_context.kind}`);
        console.log(`decorated construct name: ${_context.name as string}`);

        const result=origMethod.call(this, ...args);
        console.log(`log: exiting method ${origMethod.name}`);
        return result;
    }
    return replacementMethod;
}