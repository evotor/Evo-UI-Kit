export function DeprecateVariable(target: any, propertyKey: string) {
    const deprecatedMessage = `${target.constructor.name} variable ${propertyKey} is deprecated.`;
    let propertyValue;

    function getter() {
        console.warn(deprecatedMessage);
        return propertyValue;
    }

    function setter(value: any) {
        console.warn(deprecatedMessage);
        propertyValue = value;
    }

    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter,
    });
}
