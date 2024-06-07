import {getTestBed, TestBed} from '@angular/core/testing';

import {EvoToastService} from './index';

describe('EvoToastService', () => {
    let injector: TestBed;
    let service: EvoToastService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [EvoToastService],
        });

        injector = getTestBed();
        service = injector.get(EvoToastService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should emit pushEvent when calling push method', () => {
        spyOn(service.pushEvents, 'next');
        service.push({message: 'toast message'});
        expect(service.pushEvents.next).toHaveBeenCalled();
    });

    it('should keep toast in the queue while other toast is showing (isToastInProgress = true)', () => {
        service['isToastInProgress'] = true;
        const toast = {message: 'toast message'};
        service.push(toast);
        expect(service['queue']).toEqual([toast]);
    });

    it('should keep all toasts in the queue if a few toasts are pushed', () => {
        const toast1 = {message: 'toast message1'};
        const toast2 = {message: 'toast message2'};
        const toast3 = {message: 'toast message3'};
        service.push(toast1);
        service.push(toast2);
        service.push(toast3);
        expect(service['queue']).toEqual([toast1, toast2, toast3]);
    });

    it('should keep only forced toast in the queue after few toast are pushed', () => {
        const toast1 = {message: 'toast message1'};
        const toast2 = {message: 'toast message2'};
        const toast3 = {message: 'toast message3'};
        service.push(toast1);
        service.push(toast2);
        service.force(toast3);
        expect(service['queue']).toEqual([toast3]);
    });

    it('should take the next toast in queue when toastComplete method is calling', () => {
        spyOn(service.pushEvents, 'next');
        const toast1 = {message: 'toast message1'};
        const toast2 = {message: 'toast message2'};
        service.push(toast1);
        service.push(toast2);
        expect(service['queue']).toEqual([toast1, toast2]);
        expect(service.pushEvents.next).toHaveBeenCalledTimes(1);
        service.toastComplete();
        expect(service['queue']).toEqual([toast2]);
        expect(service.pushEvents.next).toHaveBeenCalledTimes(2);
    });

    it('should change isToastInProgress state to false when toastComplete method is calling and where is no toasts in queue', () => {
        const toast = {message: 'toast message'};
        service.push(toast);
        expect(service['isToastInProgress']).toBeTruthy();
        service.toastComplete();
        expect(service['isToastInProgress']).toBeFalsy();
    });

    it('should register evo-toast', () => {
        expect(service['isComponentRegistered']).toBeFalsy();
        service.register();
        expect(service['isComponentRegistered']).toBeTruthy();
    });

    it('should throw error when trying to register a few evo-toasts', () => {
        expect(service['isComponentRegistered']).toBeFalsy();
        service.register();
        expect(service['isComponentRegistered']).toBeTruthy();
        expect(() => service.register()).toThrowError(
            '[EvoUiKit]: Another evo-toast already registered. Only one toast component available in app!',
        );
    });
});
