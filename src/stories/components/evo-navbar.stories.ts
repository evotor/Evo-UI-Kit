import {moduleMetadata, storiesOf} from '@storybook/angular';
import {EvoNavbarModule} from '@evo/ui-kit';
import {RouterTestingModule} from '@angular/router/testing';

storiesOf('Components/Navbar', module)
    .addDecorator(
        moduleMetadata({
            imports: [
                EvoNavbarModule,
                RouterTestingModule.withRoutes([{path: '**', redirectTo: ''}])
            ],
        }),
    )
    .add('default', () => ({
        template: `
            <h2>Router links</h2>
            <evo-navbar [items]="items"></evo-navbar>

            <br>
            <h2>External links</h2>
            <evo-navbar [items]="externalItems"></evo-navbar>

            <br>
            <h2>Combined</h2>
            <evo-navbar [items]="items.concat(externalItems)"></evo-navbar>
        `,
        styles: [`h2, evo-navbar{ margin: 14px; }`],
        props: {
            items: [
                {routerLink: '/one', title: 'One'},
                {routerLink: '/two', title: 'Two'},
                {routerLink: '/three', title: 'Three'},
                {
                    routerLink: '/nested',
                    title: 'Nested',
                    subItems: [
                        {routerLink: '/nested/first', title: 'First'},
                        {routerLink: '/nested/second', title: 'Second'},
                    ]
                }
            ],
            externalItems: [
                {href: 'https://ya.ru', title: 'ya.ru'},
                {href: 'https://ya.ru', title: 'ya.ru (target="_blank")', target: '_blank'},
                {
                    href: '#',
                    title: 'Grouped external links',
                    subItems: [
                        {href: 'https://ya.ru', title: 'ya.ru'},
                        {href: 'https://ya.ru', title: 'ya.ru (target="_blank")', target: '_blank'},
                    ]
                },
            ]
        },
    }));

