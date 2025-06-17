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
    styleUrls: ['../../assets/scss/story-global.scss', '../../assets/scss/colors.scss'],
    template: `
<style>
.wrapper {
display:flex;
flex-direction: column;
gap: 24px;
}
</style>
<div class="wrapper">
    <div class="evo-text-header evo-text-header_h3">Fonts</div>

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
            <td class="table__cell"><code>--evo-font</code></td>
            <td class="table__cell"><code>$font</code></td>
        </tr>
        <tr class="table__row">
            <td class="table__cell"><a href="https://fonts.google.com/specimen/Ubuntu">Ubuntu</a></td>
            <td class="table__cell"><code>--evo-font-secondary</code></td>
            <td class="table__cell"><code>$font-secondary</code></td>
        </tr>
    </table>

    <evo-note class="section__info" type="info">To make typography synchronized with design, use following SCSS mixins in markup.</evo-note>
    </div>

    <div class="evo-text-header evo-text-header_h3">Typographic mixins</div>

    <div class="section">
        <div class="section__title">Headers (with adaptive)</div>

        <p class="evo-text-header evo-text-header_h1">evo-text-header(h1) = H1 Headline (in figma)</p>
        <p class="evo-text-header evo-text-header_h2">evo-text-header(h2) = H2 Headline</p>
        <p class="evo-text-header evo-text-header_h3">evo-text-header(h3) = H3 Headline</p>
        <p class="evo-text-header evo-text-header_h4">evo-text-header(h4) = H4 Headline</p>
        <p class="evo-text-header evo-text-header_h5">evo-text-header(h5) = H5 Headline</p>

        <evo-note class="section__info" type="info">To disable auto transition to mobile headers, use second boolean parameter of <code>evo-text-header()</code> mixin.</evo-note>
    </div>

    <div class="section">
        <div class="section__title">Mobile Headers</div>

        <p class="evo-text-mobile-header evo-text-mobile-header_h1">evo-text-mobile-header(h1) = Mobile/H1 Headline (in figma)</p>
        <p class="evo-text-mobile-header evo-text-mobile-header_h2">evo-text-mobile-header(h2) = Mobile/H2 Headline</p>
        <p class="evo-text-mobile-header evo-text-mobile-header_h3">evo-text-mobile-header(h3) = Mobile/H3 Headline</p>
        <p class="evo-text-mobile-header evo-text-mobile-header_h4">evo-text-mobile-header(h4) = Mobile/H4 Headline</p>
        <p class="evo-text-mobile-header evo-text-mobile-header_h5">evo-text-mobile-header(h5) = Mobile/H5 Headline</p>
    </div>

    <div class="section">
        <div class="section__title">Subtitle</div>

        <p class="evo-text-subtitle evo-text-subtitle_s1">evo-text-subtitle(h1) = S1 Subtitle (in figma)</p>
        <p class="evo-text-subtitle evo-text-subtitle_s2">evo-text-subtitle(h2) = S2 Subtitle Bold</p>
    </div>

    <div class="section">
        <div class="section__title">Caption</div>

        <p class="evo-text-caption evo-text-caption_c1">evo-text-caption(c1) = C1 Caption (in figma)</p>
        <p class="evo-text-caption evo-text-caption_c2">evo-text-caption(c2) = C2 Caption Bold</p>
        <p class="evo-text-caption evo-text-caption_c3">evo-text-caption(c3) = C3 Caption Button</p>
    </div>

    <div class="section">
        <div class="section__title">Button</div>

        <p class="evo-text-button evo-text-button_b1">evo-text-button(b1) = B1 Button (in figma)</p>
        <p class="evo-text-button evo-text-button_b2">evo-text-button(b2) = B2 Button</p>
        <p class="evo-text-button evo-text-button_b3">evo-text-button(b3) = B3 Button</p>
    </div>

    <div class="section">
        <div class="section__title">Paragraphs</div>

        <p class="evo-text-paragraph evo-text-paragraph_p1">evo-text-paragraph(p1) = P1 Paragraph (in figma)</p>
        <p class="evo-text-paragraph evo-text-paragraph_p2">evo-text-paragraph(p2) = P2 Paragraph Bold</p>
        <p class="evo-text-paragraph evo-text-paragraph_p3">evo-text-paragraph(p3) = P3 Paragraph with Badge</p>
        <p class="evo-text-paragraph evo-text-paragraph_p4">evo-text-paragraph(p4) = P4 Paragraph Bold with Badge</p>
        <p class="evo-text-paragraph evo-text-paragraph_p5">evo-text-paragraph(p5) = P5 Paragraph Big with Icon</p>
        <p class="evo-text-paragraph evo-text-paragraph_p6">evo-text-paragraph(p6) = P6 Paragraph Big Bold with Icon</p>
    </div>

    <div class="section">
        <div class="section__title">Fields</div>

        <p class="evo-text-field evo-text-field_label">evo-text-field(label) = Field/Label (in figma)</p>
        <p class="evo-text-field evo-text-field_placeholder">evo-text-field(placeholder) = Field/Placeholder</p>
        <p class="evo-text-field evo-text-field_placeholder-bold">evo-text-field(placeholder-bold) = Field/Placeholder Bold</p>
        <p class="evo-text-field evo-text-field_hint">evo-text-field(hint) = Field/Hint</p>
        <p class="evo-text-field evo-text-field_error">evo-text-field(error) = Field/Error</p>
    </div>

    <div class="section">
        <div class="section__title">Tips</div>

        <p class="evo-text-tips">evo-text-tips() = Tips (in figma)</p>
    </div>
</div>
    `,
});
