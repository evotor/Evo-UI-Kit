import {Directive, Inject, Input, TemplateRef, ViewContainerRef} from '@angular/core';

export class EvoLetContext<T> {
    constructor(private readonly dir: EvoLetDirective<T>) {}

    public get evoLet(): T {
        return this.dir.evoLet;
    }
}

/**
 * Works like ngIf, but condition not affects on rendering.
 * Used for aliases.
 */
@Directive({
    selector: '[evoLet]',
})
export class EvoLetDirective<T> {
    @Input() evoLet!: T;

    constructor(
        @Inject(ViewContainerRef) viewContainer: ViewContainerRef,
        @Inject(TemplateRef) templateRef: TemplateRef<EvoLetContext<T>>,
    ) {
        viewContainer.createEmbeddedView(templateRef, new EvoLetContext<T>(this));
    }

    /**
     * Assert the correct type of the expression bound to the `evoLet` input within the template.
     *
     * The presence of this static field is a signal to the Ivy template type check compiler that
     * when the `EvoLetDirective` structural directive renders its template, the type of the expression bound
     * to `evoLet` should be narrowed in some way. For `EvoLetDirective`, the binding expression itself is used to
     * narrow its type, which allows the strictNullChecks feature of TypeScript to work with `EvoLetDirective`.
     */
    static ngTemplateGuard_evoLet: 'binding';

    /**
     * Asserts the correct type of the context for the template that `EvoLetDirective` will render.
     *
     * The presence of this method is a signal to the Ivy template type-check compiler that the
     * `EvoLetDirective` structural directive renders its template with a specific context type.
     */
    static ngTemplateContextGuard<T>(dir: EvoLetDirective<T>, ctx: any): ctx is EvoLetContext<T> {
        return true;
    }
}
