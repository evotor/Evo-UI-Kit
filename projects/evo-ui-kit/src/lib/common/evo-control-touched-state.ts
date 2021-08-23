import { AbstractControl } from '@angular/forms';
import { Subject } from 'rxjs';

// Global registry of streams with counter of subscribers for touched state
const touchedStreamsRegistry = new Map<AbstractControl, [Subject<void>, number]>();

// Original 'markAsTouched' method from control
let _markAsTouched: (opts?: { onlySelf?: boolean | undefined; } | undefined) => void;

export class EvoControlTouchedState {
    static getTouchedStream(
        control: AbstractControl,
    ): Subject<void> {
        const record = touchedStreamsRegistry.get(control);

        if (record) {
            ++record[1];

            return record[0];
        }

        const subject = new Subject<void>();

        _markAsTouched = control.markAsTouched;

        const markAsTouchedBinded = _markAsTouched.bind(control);

        control.markAsTouched = () => {
            markAsTouchedBinded();
            subject.next();
        };

        touchedStreamsRegistry.set(control, [subject, 1]);

        return subject;
    }

    static decrementTouchedRegistry(
        control: AbstractControl,
    ): void {
        const record = touchedStreamsRegistry.get(control);

        if (!record) {
            return;
        }

        if (record[1] === 1) {
            touchedStreamsRegistry.delete(control);
            control.markAsTouched = _markAsTouched;

            return;
        }

        --record[1];
    }
}
