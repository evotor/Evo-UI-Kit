import {moduleMetadata} from '@storybook/angular';
import {EvoDropdownModule, EvoButtonModule, EvoChipModule} from '@evotor-dev/ui-kit';
import {FormControl, ReactiveFormsModule} from '@angular/forms';

export default {
    title: 'Components/Dropdown',

    decorators: [
        moduleMetadata({
            imports: [EvoButtonModule, EvoChipModule, ReactiveFormsModule, EvoDropdownModule],
        }),
    ],
};

export const Default = () => ({
    template: `
            <div class="wrapper">
                <evo-chip (click)="origin.close()" [formControl]="currentPosition" value="top-left">top-left</evo-chip>
                <evo-chip (click)="origin.close()" [formControl]="currentPosition" value="top-center">top-center</evo-chip>
                <evo-chip (click)="origin.close()" [formControl]="currentPosition" value="top-right">top-right</evo-chip>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div style="display: flex; flex-flow: column;">
                        <evo-chip (click)="origin.close()" [formControl]="currentPosition" value="left-top">left-top</evo-chip>
                        <evo-chip (click)="origin.close()" [formControl]="currentPosition" value="left-center">left-center</evo-chip>
                        <evo-chip (click)="origin.close()" [formControl]="currentPosition" value="left-bottom">left-bottom</evo-chip>
                    </div>

                    <button
                        evo-button
                        #origin="evoDropdownOrigin"
                        evoDropdownOrigin
                        (click)="origin.toggle()"
                    >
                        toggle
                    </button>

                    <evo-dropdown
                        [dropdownOrigin]="origin"
                        [(isOpen)]="origin.isDropdownOpen"
                        [positions]="currentPosition.value"
                    >
                        <div class="content">Content</div>
                    </evo-dropdown>

                    <div style="display: flex; flex-flow: column;">
                        <evo-chip (click)="origin.close()" [formControl]="currentPosition" value="right-top">right-top</evo-chip>
                        <evo-chip (click)="origin.close()" [formControl]="currentPosition" value="right-center">right-center</evo-chip>
                        <evo-chip (click)="origin.close()" [formControl]="currentPosition" value="right-bottom">right-bottom</evo-chip>
                    </div>
                </div>
                <evo-chip (click)="origin.close()" [formControl]="currentPosition" value="bottom-left">bottom-left</evo-chip>
                <evo-chip (click)="origin.close()" [formControl]="currentPosition" value="bottom-center">bottom-center</evo-chip>
                <evo-chip (click)="origin.close()" [formControl]="currentPosition" value="bottom-right">bottom-right</evo-chip>
            </div>

            <br>
        `,
    styles: [
        '.wrapper { max-width: 520px;  padding:0 40px }',
        '.wrapper evo-chip { margin-right: 14px; margin-top: 8px }',
        'h2, evo-navbar { margin: 14px; }',
        `.content { padding: 0 8px; text-align: center; border: 1px solid; background: #fff; }`,
    ],
    props: {
        currentPosition: new FormControl(),
    },
});

Default.storyName = 'default';
