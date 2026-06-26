// Detects scroll containers from computed CSS, adapted from Floating UI's
// getOverflowAncestors (MIT). We only keep user-scrollable overflow values
// (auto|scroll|overlay); hidden/clip do not emit scroll events.
const OVERFLOW_REGEXP = /auto|scroll|overlay/;

function isScrollableElement(element: Element): boolean {
    const {overflow, overflowX, overflowY} = getComputedStyle(element);

    return OVERFLOW_REGEXP.test(overflow + overflowY + overflowX);
}

/**
 * Walks the DOM ancestors of `origin`, keeping only real scroll containers, and
 * appends the window (which covers page scroll). The result is the set of targets
 * whose scrolling can move the anchor on screen — no `cdkScrollable` markup needed.
 */
export function getScrollableAncestors(origin: Element): (Element | Window)[] {
    const document = origin.ownerDocument;
    const ancestors: (Element | Window)[] = [];

    let node: Element | null = origin.parentElement;

    while (node && node !== document.body && node !== document.documentElement) {
        if (isScrollableElement(node)) {
            ancestors.push(node);
        }

        node = node.parentElement;
    }

    ancestors.push(document.defaultView ?? window);

    return ancestors;
}
