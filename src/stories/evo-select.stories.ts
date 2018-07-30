import { storiesOf, moduleMetadata } from '@storybook/angular';
import { withKnobs, text } from '@storybook/addon-knobs/angular';
import { EvoUiKitModule } from 'evo-ui-kit';

storiesOf('Components/EvoSelect', module)
  .addDecorator(
    moduleMetadata({
      imports: [ EvoUiKitModule ],
    }),
  )
  .addDecorator(withKnobs)
  .add('default', () => ({
    template: `
    <evo-select>
        <option *ngFor="let option of options" [value]="option.value">{{option.label}}</option>
    </evo-select>
    `,
    props: {
        options: [
            { label: 'Все сотрудники', value: 'all' },
            { label: 'Илья Лыткин', value: 'i.lytkin' },
            { label: 'Кристина Михайлов', value: 'k.mykhaylova' },
        ],
    },
  }))
  .add('with label', () => ({
    template: `
    <evo-control-label [label]="label">
        <evo-select>
            <option *ngFor="let option of options" [value]="option.value">{{option.label}}</option>
        </evo-select>
    </evo-control-label>
    `,
    props: {
        options: [
            { label: 'Все сотрудники', value: 'all' },
            { label: 'Илья Лыткин', value: 'i.lytkin' },
            { label: 'Кристина Михайлов', value: 'k.mykhaylova' },
        ],
        label: text('label', 'Сортировка'),
    },
  }));
