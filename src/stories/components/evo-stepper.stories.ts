import {moduleMetadata} from '@storybook/angular';
import {EvoStepperModule, EvoButtonModule} from '@evo/ui-kit';
import {Component, OnInit} from '@angular/core';

const styles = `
.wrap {
    max-width: 800px;
    margin: 40px auto 0;
    padding: 0 40px;
}
.step-content, p {
    text-align: center;
    margin-top: 15px;
}`;

@Component({
    selector: 'test-component',
    template: `
        <h3 class="evo-title evo-title_h3">Step 2</h3>
        <br />
        <p>I just run OnInit hook 👻</p>
    `,
    styles: [':host { text-align: center; }'],
})
class TestComponent implements OnInit {
    ngOnInit() {
        console.log('TestComponent ngOnInit executed!');
    }
}

export default {
    title: 'Components/Stepper',

    decorators: [
        moduleMetadata({
            imports: [EvoStepperModule, EvoButtonModule],
            declarations: [TestComponent],
        }),
    ],
};

export const Default = () => ({
    template: `
        <style>${styles}</style>
        <evo-stepper class="stepper wrap" [currentStepIndex]="currentStepIndex" (onChange)="onStepChanged($event)">
            <evo-stepper-item label="One">
                <div class="step-content">
                    <h3 class="evo-title evo-title_h3">Step 1</h3>
                    <p>Step content...</p>
                    <br>
                    <button evo-button (click)="currentStepIndex = 1" size="small">Next</button>
                </div>
            </evo-stepper-item>
            <evo-stepper-item label="Two">
                <div class="step-content">
                    <h3 class="evo-title evo-title_h3">Step 2</h3>
                    <p>Step content...</p>
                    <br>
                    <button evo-button (click)="currentStepIndex = 2" size="small">Next</button>
                </div>
            </evo-stepper-item>
            <evo-stepper-item label="Three">
                <div class="step-content">
                    <h3 class="evo-title evo-title_h3">Step 3</h3>
                    <p>Step content...</p>
                    <br>
                    <button evo-button (click)="currentStepIndex = 3" size="small">Next</button>
                </div>
            </evo-stepper-item>
            <evo-stepper-item label="Four">
                <div class="step-content">
                    <h3 class="evo-title evo-title_h3">Step 4</h3>
                    <p>Step content...</p>
                    <br>
                    <button evo-button (click)="currentStepIndex = 4" size="small">Next</button>
                </div>
            </evo-stepper-item>
            <evo-stepper-item label="Five">
                <div class="step-content">
                    <h3 class="evo-title evo-title_h3">Step 5</h3>
                    <p>Step content...</p>
                    <br>
                    <button evo-button (click)="currentStepIndex = 5" size="small">Next</button>
                </div>
            </evo-stepper-item>
            <evo-stepper-item label="Finish">
                <div class="step-content">
                    <h3 class="evo-title evo-title_h3">Finish!</h3>
                    <p>Step content...</p>
                    <br>
                    <button evo-button (click)="currentStepIndex = 0" color="green" size="small">Repeat</button>
                </div>
            </evo-stepper-item>
        </evo-stepper>
        <br>
        <pre class="wrap">Get step index from output: {{stepNumber}}</pre>
        `,
    props: {
        steps: ['', 'Two', 'Three', 'Four', 'Five', 'Finish'],
        currentStepIndex: 0,
        stepNumber: 1,
        onStepChanged: function (index) {
            this.stepNumber = index + 1;
        },
    },
});

Default.storyName = 'default';

export const WithLifeCycleHooksOnStepChanges = () => ({
    /* tslint:disable */
    template: `
        <style>${styles}  button { display: block; margin: 15px auto; }</style>
        <evo-stepper class="stepper wrap" [currentStepIndex]="currentStepIndex">
            <evo-stepper-item label="One">
                <div class="step-content">
                    <h3 class="evo-title evo-title_h3">Step 1</h3>
                    <p>If you click next button TestComponent will run OnInit hook.<br> If you pass TestComponent without ng-template wrap OnInit hook will run immediately with stepper.</p>
                    <br>
                    <button evo-button (click)="currentStepIndex = 1" size="small">Next</button>
                </div>
            </evo-stepper-item>
            <evo-stepper-item label="Two">
                <div class="step-content">
                    <ng-template>
                        <test-component></test-component>
                    </ng-template>
                </div>
            </evo-stepper-item>
        </evo-stepper>
        <button *ngIf="currentStepIndex != 0" evo-button (click)="currentStepIndex = 0" size="small">Back</button>
        `,
    /* tslint:enable */
    props: {
        currentStepIndex: 0,
    },
});

WithLifeCycleHooksOnStepChanges.storyName = 'with life cycle hooks on step changes';

export const WithLoop = () => ({
    /* tslint:disable */
    template: `
        <style>${styles}</style>
        <evo-stepper class="wrap"
            [currentStepIndex]="currentStepIndex"
            [clickableItems]="clickableItems">
            <evo-stepper-item *ngFor="let step of steps; index as i" [label]="step.label">
                <div class="step-content">
                    <h3 class="evo-title evo-title_h3">{{ step.title }}</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus corrupti quasi recusandae culpa nisi iusto, ab rem illo magni maxime mollitia eveniet quam magnam doloribus vel corporis? Perferendis, officia sunt.</p>
                </div>
            </evo-stepper-item>
        </evo-stepper>
        <div class="wrap">
            <button evo-button (click)="next()" size="small">Next</button>
            &nbsp;&nbsp;
            <button evo-button [disabled]="!newSteps.length" (click)="addStep()" size="small">Add Step</button>
        </div>
        `,
    /* tslint:enable */
    props: {
        currentStepIndex: 0,
        steps: [
            {
                label: 'One',
                title: 'First text',
            },
            {
                label: 'Two',
                title: 'Second text',
            },
        ],
        newSteps: [
            {
                label: 'Three',
                title: 'Third text',
            },
            {
                label: 'Four',
                title: 'Some another text',
            },
        ],
        next: function () {
            if (this.steps.length - 1 > this.currentStepIndex) {
                this.currentStepIndex += 1;
            }
        },
        addStep: function () {
            if (this.newSteps.length) {
                this.steps.push(this.newSteps.splice(0, 1)[0]);
            }
        },
    },
});

WithLoop.storyName = 'with loop';

export const WithClickableStepIndicators = () => ({
    /* tslint:disable */
    template: `
        <style>${styles}</style>
        <evo-stepper class="wrap"
            [currentStepIndex]="currentStepIndex"
            [clickableItems]="clickableItems"
            (clickItem)="handleClick($event)">
            <evo-stepper-item *ngFor="let step of steps; index as i" [label]="step.label">
                <div class="step-content">
                    <h3 class="evo-title evo-title_h3">{{ step.title }}</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus corrupti quasi recusandae culpa nisi iusto, ab rem illo magni maxime mollitia eveniet quam magnam doloribus vel corporis? Perferendis, officia sunt.</p>
                </div>
            </evo-stepper-item>
        </evo-stepper>
        <div class="wrap">
            <button evo-button (click)="next()" size="small">Next</button>
        </div>
        `,
    /* tslint:enable */
    props: {
        currentStepIndex: 0,
        clickableItems: true,
        steps: [
            {
                label: 'One',
                title: 'First text',
            },
            {
                label: 'Two',
                title: 'Second text',
            },
            {
                label: 'Three',
                title: 'Third text',
            },
        ],
        handleClick: function (index: number) {
            if (this.currentStepIndex > index) {
                this.currentStepIndex = index;
            }
        },
        next: function () {
            if (this.steps.length - 1 > this.currentStepIndex) {
                this.currentStepIndex += 1;
            }
        },
    },
});

WithClickableStepIndicators.storyName = 'with clickable step indicators';
