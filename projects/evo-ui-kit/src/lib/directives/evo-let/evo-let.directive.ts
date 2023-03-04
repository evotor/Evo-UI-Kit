import { Directive, Inject, Input, TemplateRef, ViewContainerRef } from '@angular/core';

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
}
