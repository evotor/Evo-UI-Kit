import {NoopScrollStrategy, ScrollStrategy} from '@angular/cdk/overlay';
import {Injectable, Injector} from '@angular/core';
import {EvoCloseScrollStrategy} from './evo-close-scroll-strategy';
import {EvoRepositionScrollStrategy} from './evo-reposition-scroll-strategy';
import {EvoCloseScrollStrategyParams} from '../interfaces/evo-close-scroll-strategy-params';

@Injectable()
export class EvoScrollStrategyOptions {
    constructor(private readonly injector: Injector) {}

    noop(): ScrollStrategy {
        return new NoopScrollStrategy();
    };

    reposition(): ScrollStrategy {
        return new EvoRepositionScrollStrategy(this.injector);
    };

    close(params?: EvoCloseScrollStrategyParams): ScrollStrategy {
        return new EvoCloseScrollStrategy(this.injector, params);
    };
}
