import { moduleMetadata, storiesOf } from '@storybook/angular';
import { FormsModule } from '@angular/forms';
import { EvoChipModule } from '@evo/ui-kit';

storiesOf('Components/Chip', module)
    .addDecorator(
        moduleMetadata({
            imports: [
                EvoChipModule,
                FormsModule,
            ],
        }),
    )
    .add('default (radio, grey color)', () => ({
        template: `
            <evo-chip name="myChip" value="1">Lay's</evo-chip>
            <evo-chip name="myChip" value="2">Pringles</evo-chip>
            <evo-chip name="myChip" value="3">Русская картошка</evo-chip>
        `,
    }))
    .add('types', () => ({
        template: `
            <h4 style="margin: 10px 0;">radio type</h4>
            <evo-chip type="radio" name="myChip" value="1">Lay's</evo-chip>
            <evo-chip type="radio" name="myChip" value="2">Pringles</evo-chip>
            <evo-chip type="radio" name="myChip" value="3">Русская картошка</evo-chip>

            <h4 style="margin: 20px 0 10px;">checkbox</h4>
            <evo-chip type="checkbox" name="myChip" value="1">Lay's</evo-chip>
            <evo-chip type="checkbox" name="myChip" value="2">Pringles</evo-chip>
            <evo-chip type="checkbox" name="myChip" value="3">Русская картошка</evo-chip>
        `,
    }))
    .add('colors', () => ({
        template: `
            <div style="margin: 20px 0">
                <h4 style="margin-bottom: 10px;">color grey (default)</h4>
                <evo-chip type="checkbox" name="myChip" value="1">Lay's</evo-chip>
                <evo-chip type="checkbox" name="myChip" value="2">Pringles</evo-chip>
                <evo-chip type="checkbox" name="myChip" value="3">Русская картошка</evo-chip>
            </div>

            <div style="background-color: #F4F6F8; padding: 20px; margin: 20px 0">
                <h4 style="margin-bottom: 10px">color white</h4>
                <evo-chip type="checkbox" name="myChip" theme="white" value="1">Lay's</evo-chip>
                <evo-chip type="checkbox" name="myChip" theme="white" value="2">Pringles</evo-chip>
                <evo-chip type="checkbox" name="myChip" theme="white" value="3">Русская картошка</evo-chip>
            </div>
        `,
    }))
    .add('with counter', () => ({
        template: `
            <evo-chip name="myChip" value="1" [counter]="5">Lay's</evo-chip>
            <evo-chip name="myChip" value="2" [counter]="50">Pringles</evo-chip>
            <evo-chip name="myChip" value="2" [counter]="500">Pringles</evo-chip>
        `,
    }))
    .add('disabled', () => ({
        template: `
            <evo-chip name="myChip" value="1">Lay's</evo-chip>
            <evo-chip name="myChip" value="2" [disabled]="true">Pringles</evo-chip>
            <evo-chip name="myChip" value="2" [counter]="5" [disabled]="true">Pringles</evo-chip>
        `,
    }));
