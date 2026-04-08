import {COLOR_ICONS_LIST} from '@evotor-dev/evo-icons';

export default {
    title: 'Icons/Color icons',
};

export const BigColorIconAssets = () => ({
    name: 'Icons/Color icons',
    template: `
        <style>
        .wrapper {
            display:flex;
            flex-flow: row wrap;
        }
        .icon {
            width: 100px;
            margin: 32px;
        }
        pre {
            padding: 20px;
            margin-top: 24px;
            background: #eee;
            border-radius: 4px;
        }
        img {
            display: block;
            width: 48px;
            height: 48px;
        }
        </style>
        <div class="evo-content">
            <h3 class="evo-title evo-title_h3">Import assets in your project</h3>
            <pre>
angular.json

{{ '{' }}
    "glob": "**/*",
    "input": "./node_modules/&#64;evotor-dev/ui-kit/assets/",
    "output": "./assets/ui-kit/"
{{ '}' }}
            </pre>

            <div class="wrapper">
                @for(iconName of icons; track iconName) {
                    <div class="icon">
                        <img src="/assets/ui-kit/color-icons/{{ iconName }}" />
                        <p>{{ iconName }}</p>
                    </div>
                }
            </div>
        </div>
    `,
    props: {
        icons: COLOR_ICONS_LIST,
    },
});

BigColorIconAssets.storyName = 'Big color icon assets';
