import {argsToTemplate, moduleMetadata, StoryObj} from '@storybook/angular';
import {EvoNavbarComponent, EvoNavbarModule} from '@evotor-dev/ui-kit';
import {RouterTestingModule} from '@angular/router/testing';

const meta = {
    title: 'Components/Navbar',

    decorators: [
        moduleMetadata({
            imports: [EvoNavbarModule, RouterTestingModule.withRoutes([])],
        }),
    ],
    render: (args: EvoNavbarComponent) => ({
        props: {
            ...args,
        },
        template: ` <evo-navbar ${argsToTemplate(args)}></evo-navbar> `,
    }),
};

export default meta;
type Story = StoryObj<EvoNavbarComponent>;

export const Default: Story = {
    args: {
        items: [
            {title: 'Analytics', routerLink: '/one', ngClass: {highlight: true}, id: 'uniq_id'},
            {title: 'ya.ru', href: 'https://ya.ru', target: '_blank'},
            {title: 'Clients', routerLink: '/three'},
            {
                title: 'Communication',
                routerLink: '/nested',
                subItems: [
                    {routerLink: '/nested/first', title: 'Sms'},
                    {routerLink: '/nested/second', title: 'Second'},
                    {href: 'https://ya.ru', title: 'ya.ru', target: '_blank'},
                ],
            },
            {
                title: 'External links',
                href: '#',
                subItems: [
                    {href: 'https://ya.ru', title: 'ya.ru', target: '_blank'},
                    {href: 'https://vk.com', title: 'vk.com', target: '_blank'},
                ],
            },
        ],
    },
};
