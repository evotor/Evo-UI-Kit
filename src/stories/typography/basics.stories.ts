import {moduleMetadata} from '@storybook/angular';
import {EvoNoteModule} from '@evotor-dev/ui-kit';

export default {
    title: 'Typography/Basics',

    decorators: [
        moduleMetadata({
            imports: [EvoNoteModule],
        }),
    ],
};

export const Default = () => ({
    styleUrls: [
        '../../assets/scss/story-global.scss',
        '../../assets/scss/colors.scss',
        '../../assets/scss/typography-basics.scss',
    ],
    template: `
<style>
.wrapper {
display:flex;
flex-direction: column;
gap: 24px;
}
</style>
<div class="wrapper">
    <div class="evo-header evo-header_h3">Fonts</div>

    <div class="section">
        <div class="section__title">UI-kit works with following fonts</div>

    <table class="table">
        <tr class="table__row table__row_head">
            <th class="table__cell table__cell_head">Font family</th>
            <th class="table__cell table__cell_head">CSS-variable (global in body)</th>
            <th class="table__cell table__cell_head">SCSS variable</th>
        </tr>
        <tr class="table__row">
            <td class="table__cell"><a href="https://fonts.google.com/noto/specimen/Noto+Sans">Noto Sans</a></td>
            <td class="table__cell"><code>--font</code></td>
            <td class="table__cell"><code>$font</code></td>
        </tr>
        <tr class="table__row">
            <td class="table__cell"><a href="https://fonts.google.com/specimen/Ubuntu">Ubuntu</a></td>
            <td class="table__cell"><code>--font-secondary</code></td>
            <td class="table__cell"><code>$font-secondary</code></td>
        </tr>
    </table>

    <evo-note class="section__info" type="info">To make typography synchronized with design, use following SCSS mixins in markup.</evo-note>
    </div>

    <div class="evo-header evo-header_h3">Typographic mixins</div>

    <div class="section">
        <div class="section__title">Headers (with adaptive)</div>

        <p class="evo-header evo-header_h1">evo-header(h1) = H1 Headline (in figma)</p>
        <p class="evo-header evo-header_h2">evo-header(h2) = H2 Headline</p>
        <p class="evo-header evo-header_h3">evo-header(h3) = H3 Headline</p>
        <p class="evo-header evo-header_h4">evo-header(h4) = H4 Headline</p>
        <p class="evo-header evo-header_h5">evo-header(h5) = H5 Headline</p>

        <evo-note class="section__info" type="info">To disable auto transition to mobile headers, use second boolean parameter of <code>evo-header()</code>.</evo-note>
    </div>

    <div class="section">
        <div class="section__title">Mobile Headers</div>

        <p class="evo-header-mobile evo-header-mobile_h1">evo-header-mobile(h1) = Mobile/H1 Headline (in figma)</p>
        <p class="evo-header-mobile evo-header-mobile_h2">evo-header-mobile(h2) = Mobile/H2 Headline</p>
        <p class="evo-header-mobile evo-header-mobile_h3">evo-header-mobile(h3) = Mobile/H3 Headline</p>
        <p class="evo-header-mobile evo-header-mobile_h4">evo-header-mobile(h4) = Mobile/H4 Headline</p>
        <p class="evo-header-mobile evo-header-mobile_h5">evo-header-mobile(h5) = Mobile/H5 Headline</p>

        <evo-note class="section__info" type="info">To disable auto transition to mobile headers, use second boolean parameter of <code>evo-header()</code>.</evo-note>
    </div>

    <div class="section">
        <div class="section__title">Subtitle</div>

        <p class="evo-subtitle evo-subtitle_s1">evo-subtitle(h1) = S1 Subtitle (in figma)</p>
        <p class="evo-subtitle evo-subtitle_s2">evo-subtitle(h2) = S2 Subtitle Bold</p>
    </div>

    <div class="section">
        <div class="section__title">Caption</div>

        <p class="evo-caption evo-caption_c1">evo-caption(c1) = C1 Caption (in figma)</p>
        <p class="evo-caption evo-caption_c2">evo-caption(c2) = C2 Caption Bold</p>
        <p class="evo-caption evo-caption_c3">evo-caption(c3) = C3 Caption Button</p>
    </div>

    <div class="section">
        <div class="section__title">Paragraphs</div>

        <p class="evo-paragraph evo-paragraph_p1">evo-paragraph(p1) = P1 Paragraph (in figma)</p>
        <p class="evo-paragraph evo-paragraph_p2">evo-paragraph(p2) = P2 Paragraph Bold</p>
        <p class="evo-paragraph evo-paragraph_p3">evo-paragraph(p3) = P3 Paragraph with Badge</p>
        <p class="evo-paragraph evo-paragraph_p4">evo-paragraph(p4) = P4 Paragraph Bold with Badge</p>
        <p class="evo-paragraph evo-paragraph_p5">evo-paragraph(p5) = P5 Paragraph Big Bold with Badge</p>
    </div>

    <div class="section">
        <div class="section__title">Fields</div>

        <p class="evo-field-typo evo-field-typo_label">evo-field-typo(label) = Field/Label (in figma)</p>
        <p class="evo-field-typo evo-field-typo_placeholder">evo-field-typo(placeholder) = Field/Placeholder</p>
        <p class="evo-field-typo evo-field-typo_placeholder-bold">evo-field-typo(placeholder-bold) = Field/Placeholder Bold</p>
        <p class="evo-field-typo evo-field-typo_hint">evo-field-typo(hint) = Field/Hint</p>
        <p class="evo-field-typo evo-field-typo_error">evo-field-typo(error) = Field/Error</p>
    </div>
</div>
    `,
});
