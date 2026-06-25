import {NoopScrollStrategy, ScrollStrategy} from '@angular/cdk/overlay';
import {Injectable, Injector} from '@angular/core';
import {EvoCloseScrollStrategy} from './evo-close-scroll-strategy';
import {EvoRepositionScrollStrategy} from './evo-reposition-scroll-strategy';
import {EvoScrollStrategyParams} from '../interfaces/evo-scroll-strategy-params';
import {EvoScrollStrategy} from '../types/evo-scroll-strategy';

@Injectable({providedIn: 'root'})
export class EvoScrollStrategyOptions {
    constructor(private readonly injector: Injector) {}

    create(strategy: EvoScrollStrategy, params?: EvoScrollStrategyParams): ScrollStrategy {
        switch (strategy) {
            case 'noop': {
                return this.noop();
            }
            case 'reposition': {
                return this.reposition(params);
            }
            case 'close':
            default: {
                return this.close(params);
            }
        }
    }

    noop(): ScrollStrategy {
        return new NoopScrollStrategy();
    }

    reposition(params?: EvoScrollStrategyParams): ScrollStrategy {
        return new EvoRepositionScrollStrategy(this.injector, params);
    }

    close(params?: EvoScrollStrategyParams): ScrollStrategy {
        return new EvoCloseScrollStrategy(this.injector, params);
    }
}
