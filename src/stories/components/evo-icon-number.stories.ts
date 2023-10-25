import { moduleMetadata, storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import {
    EvoIconNumberModule
} from "../../../projects/evo-ui-kit/src/lib/components/evo-icon-number/evo-icon-number.module";

storiesOf('Components/EvoIconNumber', module)
    .addDecorator(
        moduleMetadata({
            imports: [
                EvoIconNumberModule
            ],
        }),
    ).add('default', () => ({
    template: `
<h3>Use <strong>number</strong> input param to set number as integer from 1 to 9:</h3>
<evo-icon-number number="1"></evo-icon-number><br/>
<evo-icon-number number="2"></evo-icon-number><br/>
<evo-icon-number number="3"></evo-icon-number><br/>
<evo-icon-number number="4"></evo-icon-number><br/>
<evo-icon-number number="5"></evo-icon-number><br/>
<evo-icon-number number="6"></evo-icon-number><br/>
<evo-icon-number number="7"></evo-icon-number><br/>
<evo-icon-number number="8"></evo-icon-number><br/>
<evo-icon-number number="9"></evo-icon-number><br/>

<h3>If <strong>number</strong> input param is not set or not valid, there will be no text:</h3>
<evo-icon-number></evo-icon-number><br/>
        `,
})).add('CSS customization', () => ({
    template: `
<h3>Use host styles to set width and height:</h3>

<pre>
width: 200px;
height: 200px;
</pre>

<evo-icon-number number="1" style="width: 200px; height: 200px;"></evo-icon-number><br/>

<h3>Use CSS custom props to set colors:</h3>

<h3>Defaults are:</h3>
<pre>
--evo-icon-number-background-color: #21c68b;
--evo-icon-number-shadow-color: #bedce3;
--evo-icon-number-text-color: #ffffff;
--evo-icon-number-border-color: #231f20;
</pre>

<evo-icon-number number="2" style="width: 200px;height: 200px;--evo-icon-number-background-color: yellow;
    --evo-icon-number-shadow-color: red;
    --evo-icon-number-text-color: red;
    --evo-icon-number-border-color: green;"></evo-icon-number><br/>
        `,
}));
