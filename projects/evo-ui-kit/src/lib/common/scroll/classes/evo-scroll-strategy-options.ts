import {NoopScrollStrategy, ScrollStrategy} from '@angular/cdk/overlay';
import {Injectable, Injector} from '@angular/core';
import {EvoCloseScrollStrategy} from './evo-close-scroll-strategy';
import {EvoRepositionScrollStrategy} from './evo-reposition-scroll-strategy';
import {EvoCloseScrollStrategyParams} from '../interfaces/evo-close-scroll-strategy-params';
import {EvoScrollStrategy} from '../types/evo-scroll-strategy';

@Injectable({providedIn: 'root'})
export class EvoScrollStrategyOptions {
    constructor(private readonly injector: Injector) {}

    create(strategy: EvoScrollStrategy, params?: EvoCloseScrollStrategyParams): ScrollStrategy {
        switch (strategy) {
            case 'noop': {
                return this.noop();
            }
            case 'reposition': {
                return this.reposition();
            }
            case 'close':
            default: {
                return this.close(params);
            }
        }
    }

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
