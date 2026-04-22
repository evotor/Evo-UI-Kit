/**
 * Режим ввода для компонента evo-quantity
 */
export enum InputMode {
    /** Значение обновляется только при завершении ручного ввода (confirm/cancel) */
    MANUAL = 'MANUAL',
    /** Значение обновляется при нажатии на кнопки +/- */
    PER_BUTTONS = 'PER_BUTTONS',
}
