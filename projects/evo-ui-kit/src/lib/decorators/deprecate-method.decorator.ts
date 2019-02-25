export function DeprecateMethod(message: string = ''): MethodDecorator {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const deprecatedMessage = `${target.constructor.name} method ${propertyKey} is deprecated. ${message}`;

        console.warn(deprecatedMessage);

        return descriptor;
    };
}
