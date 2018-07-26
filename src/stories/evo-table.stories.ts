import { storiesOf, moduleMetadata } from '@storybook/angular';
import { EvoUiKitModule } from 'evo-ui-kit';

storiesOf('Components/EvoTable', module)
    .addDecorator(
        moduleMetadata({
            imports: [
                EvoUiKitModule,
            ],
        }),
    )
    .add('default', () => ({
        template: `
        <evo-table [data]=data stripe=true>
            <evo-table-column prop="id" label="ID"></evo-table-column>
            <evo-table-column prop="name" label="Имя"></evo-table-column>
            <evo-table-column prop="age" label="Возраст"></evo-table-column>
        </evo-table>
        `,
        props: {
            data: [
                {
                    id: 1,
                    name: 'Nikita',
                    age: 23,
                },
                {
                    id: 2,
                    name: 'Vladimir',
                    age: 48,
                },
            ],
        },
    }));
