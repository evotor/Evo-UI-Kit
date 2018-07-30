import { storiesOf, moduleMetadata } from '@storybook/angular';
import { EvoUiKitModule } from 'evo-ui-kit';

storiesOf('Components/EvoSelect', module)
  .addDecorator(
    moduleMetadata({
      imports: [ EvoUiKitModule ],
    }),
  )
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
  }));
