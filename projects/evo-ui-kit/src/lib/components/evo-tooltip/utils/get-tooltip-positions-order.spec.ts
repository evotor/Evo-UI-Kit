import {EvoTooltipPosition} from '../enums/evo-tooltip-position';
import {getTooltipPositionsOrder} from './get-tooltip-positions-order';
import {EVO_DEFAULT_POSITIONS_ORDER} from '../constants/evo-tooltip-default-positions-order';

interface TestCase {
    description: string;
    position: EvoTooltipPosition;
    expectedFirst: EvoTooltipPosition;
    expectedSecond?: EvoTooltipPosition;
}

describe('getTooltipPositionOrder', () => {
    const testCases: TestCase[] = [
        {
            description: 'should return priority positions first for TOP position',
            position: EvoTooltipPosition.TOP,
            expectedFirst: EvoTooltipPosition.TOP,
            expectedSecond: EvoTooltipPosition.BOTTOM,
        },
        {
            description: 'should return priority positions first for BOTTOM position',
            position: EvoTooltipPosition.BOTTOM,
            expectedFirst: EvoTooltipPosition.BOTTOM,
            expectedSecond: EvoTooltipPosition.TOP,
        },
        {
            description: 'should return priority positions first for LEFT position',
            position: EvoTooltipPosition.LEFT,
            expectedFirst: EvoTooltipPosition.LEFT,
            expectedSecond: EvoTooltipPosition.RIGHT,
        },
        {
            description: 'should return priority positions first for RIGHT position',
            position: EvoTooltipPosition.RIGHT,
            expectedFirst: EvoTooltipPosition.RIGHT,
            expectedSecond: EvoTooltipPosition.LEFT,
        },
        {
            description: 'should rotate all positions starting from TOP_START',
            position: EvoTooltipPosition.TOP_START,
            expectedFirst: EvoTooltipPosition.TOP_START,
        },
    ];

    testCases.forEach((testCase) =>
        it(testCase.description, () => {
            const result: EvoTooltipPosition[] = getTooltipPositionsOrder(testCase.position);

            expect(result[0]).toBe(testCase.expectedFirst);

            if (testCase.expectedSecond) {
                expect(result[1]).toBe(testCase.expectedSecond);
            }

            expect(result.length).toBe(EVO_DEFAULT_POSITIONS_ORDER.length);
        }),
    );
});
