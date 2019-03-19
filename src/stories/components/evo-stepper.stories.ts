import { storiesOf, moduleMetadata } from '@storybook/angular';
import { EvoUiKitModule } from 'evo-ui-kit';
import { Component, OnInit } from '@angular/core';


// Component for testing template outlet
@Component({
    selector: 'test-component',
    template: `
    <h3 class="evo-title evo-title_h3">Step 2</h3>
    <br>
    <p>I just run OnInit hook 👻</p>`,
    styles: [ ':host { text-align: center; }' ],
})
class TestComponent implements OnInit {
    ngOnInit() {
        console.log('TestComponent ngOnInit executed!');
    }
}

storiesOf('Components/Stepper', module)
    .addDecorator(
        moduleMetadata({
            imports: [ EvoUiKitModule ],
            declarations: [ TestComponent ],
        }),
    )
    .add('default', () => ({
        template: `
        <style> .step-content, pre { text-align: center; } </style>
        <evo-stepper class="stepper" [currentStepIndex]="currentStepIndex" (onChange)="onStepChanged($event)">
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
        <pre>Get step index from output: {{stepNumber}}</pre>
        `,
        props: {
            steps: [ '', 'Two', 'Three', 'Four', 'Five', 'Finish' ],
            currentStepIndex: 0,
            stepNumber: 1,
            onStepChanged: function(index) {
                this.stepNumber = index + 1;
            },
        },
    }))
    .add('with life cycle hooks on step changes', () => ({
        /* tslint:disable */
        template: `
        <style> .step-content, p { text-align: center; margin-top: 15px; } button { display: block; margin: 15px auto; }</style>
        <evo-stepper class="stepper" [currentStepIndex]="currentStepIndex">
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
    }));

