import { storiesOf, moduleMetadata } from '@storybook/angular';
import { EvoTabsModule, EvoButtonModule } from '@evo/ui-kit';

storiesOf('Components/Tabs', module)
    .addDecorator(
        moduleMetadata({
            imports: [ EvoTabsModule, EvoButtonModule ],
        }),
    )
    .add('default', () => ({
        template:
            `<evo-tabs [selectedIndex]="index" (tabSelection)="onTabSelect($event)">
      <evo-tab-item label="First">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, dolor!</p>
      </evo-tab-item>
      <evo-tab-item label="Second">
        <p>Fugit nisi facere dolores cupiditate sapiente nemo ullam eos maiores,
        in porro est illo officia excepturi odio vel necessitatibus maxime eaque velit
        alias quaerat, quis sed neque soluta. Pariatur molestias maiores quo officiis?
        Consectetur, autem repellendus laboriosam corrupti voluptate odit, impedit tempore,
        iure accusantium fuga totam minima aspernatur perferendis doloribus modi est.</p>
      </evo-tab-item>
      <evo-tab-item label="Third">
        <p>Some short text here...</p>
      </evo-tab-item>
    </evo-tabs>
    <br>
    <button evo-button size="small" (click)="index = (index === 2) ? 0 : index + 1">Change tab outside</button>`,
        props: {
            index: 2,
            onTabSelect: (index: number) => console.log('Selected tab', index),
        },
    }));
