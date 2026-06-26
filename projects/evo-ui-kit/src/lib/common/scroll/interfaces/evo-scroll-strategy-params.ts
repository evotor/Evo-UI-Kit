/**
 * Parameters for the EVO scroll strategies.
 * - `getOrigin` is used by the `close` strategy (observes the anchor's scroll ancestors) and by the
 *   `reposition` strategy (to close the overlay once the anchor scrolls out of its scroll container).
 * - `threshold` applies to the `close` strategy only.
 */
export interface EvoScrollStrategyParams {
    /**
     * Lazily resolves the overlay's anchor element. Resolved on `enable()` (when the overlay is
     * attached), so callers can pass a getter over an input that is set after the strategy is created
     * (e.g. the dropdown origin).
     */
    getOrigin?: () => Element | null;
    /** Amount of pixels the anchor has to move before the overlay is closed (close strategy only). */
    threshold?: number;
}
