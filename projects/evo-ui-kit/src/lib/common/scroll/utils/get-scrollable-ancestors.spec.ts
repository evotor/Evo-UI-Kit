import {getScrollableAncestors} from './get-scrollable-ancestors';

describe('getScrollableAncestors', () => {
    let root: HTMLElement | null = null;

    afterEach(() => {
        root?.remove();
        root = null;
    });

    function build(html: string): HTMLElement {
        root = document.createElement('div');
        root.innerHTML = html;
        document.body.appendChild(root);

        return root;
    }

    it('should return only the window when there are no scrollable ancestors', () => {
        const anchor = build('<div style="overflow: visible"><div id="anchor"></div></div>').querySelector(
            '#anchor',
        ) as Element;

        expect(getScrollableAncestors(anchor)).toEqual([window]);
    });

    it('should collect overflow auto/scroll ancestors and append the window last', () => {
        const host = build(`
            <div class="auto" style="overflow: auto">
                <div class="visible" style="overflow: visible">
                    <div class="scroll-y" style="overflow-y: scroll">
                        <button id="anchor"></button>
                    </div>
                </div>
            </div>
        `);

        const anchor = host.querySelector('#anchor') as Element;
        const ancestors = getScrollableAncestors(anchor);

        expect(ancestors).toContain(host.querySelector('.scroll-y') as Element);
        expect(ancestors).toContain(host.querySelector('.auto') as Element);
        expect(ancestors).not.toContain(host.querySelector('.visible') as Element);
        expect(ancestors[ancestors.length - 1]).toBe(window);
    });
});
