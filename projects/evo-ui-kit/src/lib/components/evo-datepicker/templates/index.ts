export const cssClasses = {
    DESCRIPTION: 'evo-datepicker__description',
    INPUT: 'evo-datepicker__input',
    TIME_PICKER: 'evo-datepicker__time-picker',
    TIME_LABEL: 'evo-datepicker__time-label',
    TIME_LABEL_FROM: 'evo-datepicker__time-label_from',
    TIME_LABEL_UNTIL: 'evo-datepicker__time-label_until',
    SELECTORS: 'evo-datepicker__selectors',
    SELECT: 'evo-datepicker__select',
    SELECTOR_HOUR: 'evo-datepicker__select_hour',
    SELECTOR_MINUTE: 'evo-datepicker__select_minute',
    SELECT_WRAPPER: 'evo-datepicker__select-wrapper',
    APPLY: 'evo-datepicker__apply',
    SELECT_FIELD: 'evo-datepicker__select-field'
};

 export const renderRangeTime = (classes) => {
    const template = `
        <div class="${classes.TIME_PICKER}">
            <label class="${classes.TIME_LABEL} ${classes.TIME_LABEL_FROM}"></label>
            <div class="${classes.SELECTORS}">
                <label class="${classes.SELECT_WRAPPER}">
                    <div class="${classes.SELECT_FIELD}">00</div>
                    <select value class="${classes.SELECT} ${classes.SELECTOR_HOUR}">
                        <option selected>00</option>
                        <option>01</option>
                        <option>02</option>
                        <option>03</option>
                        <option>04</option>
                        <option>05</option>
                        <option>06</option>
                        <option>07</option>
                        <option>08</option>
                        <option>09</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                        <option>13</option>
                        <option>14</option>
                        <option>15</option>
                        <option>16</option>
                        <option>17</option>
                        <option>18</option>
                        <option>19</option>
                        <option>20</option>
                        <option>21</option>
                        <option>22</option>
                        <option>23</option>
                    </select>
                </label>
                <span>:</span>
                <label class="${classes.SELECT_WRAPPER}">
                    <div class="${classes.SELECT_FIELD}">00</div>
                    <select class="${classes.SELECT} ${classes.SELECTOR_MINUTE}">
                        <option selected>00</option>
                        <option>15</option>
                        <option>30</option>
                        <option>45</option>
                    </select>
                </label>
            </div>
        </div>

        <div class="${classes.TIME_PICKER}">
            <label class="${classes.TIME_LABEL} ${classes.TIME_LABEL_UNTIL}"></label>

            <div class="${classes.SELECTORS}">
                <label class="${classes.SELECT_WRAPPER}">
                    <div class="${classes.SELECT_FIELD}">23</div>
                    <select value class="${classes.SELECT} ${classes.SELECTOR_HOUR}">
                        <option>00</option>
                        <option>01</option>
                        <option>02</option>
                        <option>03</option>
                        <option>04</option>
                        <option>05</option>
                        <option>06</option>
                        <option>07</option>
                        <option>08</option>
                        <option>09</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                        <option>13</option>
                        <option>14</option>
                        <option>15</option>
                        <option>16</option>
                        <option>17</option>
                        <option>18</option>
                        <option>19</option>
                        <option>20</option>
                        <option>21</option>
                        <option>22</option>
                        <option selected>23</option>
                    </select>
                </label>
                <span>:</span>
                <label class="${classes.SELECT_WRAPPER}">
                    <div class="${classes.SELECT_FIELD}">59</div>
                    <select class="${classes.SELECT} ${classes.SELECTOR_MINUTE}">
                        <option selected>00</option>
                        <option>15</option>
                        <option>30</option>
                        <option>45</option>
                        <option selected>59</option>
                    </select>
                </label>
            </div>
        </div>

        <button class="${classes.APPLY}"> Применить </button>
    `;
    return template;
};
