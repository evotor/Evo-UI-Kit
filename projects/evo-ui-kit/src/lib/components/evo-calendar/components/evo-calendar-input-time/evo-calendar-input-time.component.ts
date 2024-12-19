import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Time} from '@angular/common';
import {FormControl} from '@angular/forms';

@Component({
    selector: 'evo-calendar-input-time',
    templateUrl: './evo-calendar-input-time.component.html',
    styleUrls: ['./evo-calendar-input-time.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EvoCalendarInputTimeComponent {
    @Input() label = 'Местное время';
    @Input() set time(time: Date) {
        if (!time) {
            return;
        }
        this.hourControl.setValue(`${time.getHours()}`);
        this.minuteControl.setValue(`${time.getMinutes()}`);
    }
    @Input() disabled: boolean;

    @Output() timeChange = new EventEmitter<Time>();

    hourControl = new FormControl('00');
    minuteControl = new FormControl('00');

    onHour(hours: string): void {
        this.timeChange.emit({
            hours: Number(hours),
            minutes: Number(this.minuteControl.value),
        });
    }

    onMinute(minutes: string): void {
        this.timeChange.emit({
            hours: Number(this.hourControl.value),
            minutes: Number(minutes),
        });
    }
}
