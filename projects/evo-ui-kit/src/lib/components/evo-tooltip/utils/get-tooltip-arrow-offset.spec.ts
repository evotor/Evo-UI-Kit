import {EvoTooltipPosition} from '../enums/evo-tooltip-position';
import {getTooltipArrowOffset} from './get-tooltip-arrow-offset';
import {EVO_TOOLTIP_ARROW_SIZE} from '../constants/evo-tooltip-arrow-size';
import {EVO_TOOLTIP_RADIUS} from '../constants/evo-tooltip-radius';
import {TooltipArrowCalcParams} from '../interfaces/tooltip-arrow-calc-params';

interface TestCase {
    description: string;
    params: TooltipArrowCalcParams;
    result: number;
}

describe('getTooltipArrowOffset', () => {
    const testCases: TestCase[] = [
        {
            description:
                'should calculate correct offset when tooltip is completely BEFORE the parent (no intersection)',
            params: {
                tooltipStart: 0,
                tooltipEnd: 100,
                parentStart: 120,
                parentEnd: 200,
                position: EvoTooltipPosition.LEFT,
            },
            // equals tooltip size (100)
            result: 100,
        },
        {
            description: 'should calculate correct offset when tooltip is aligned to parent start',
            params: {
                tooltipStart: 0,
                tooltipEnd: 100,
                parentStart: 0,
                parentEnd: 200,
                position: EvoTooltipPosition.TOP_START,
            },
            result: EVO_TOOLTIP_RADIUS,
        },
        {
            description: 'should calculate correct offset when tooltip is aligned to parent center',
            params: {
                tooltipStart: 40,
                tooltipEnd: 200,
                parentStart: 0,
                parentEnd: 240,
                position: EvoTooltipPosition.TOP,
            },
            // parentCenter (120) - tooltipStart (40) - arrow half (8)
            result: 120 - 40 - EVO_TOOLTIP_ARROW_SIZE / 2,
        },
        {
            description: 'should calculate correct offset when tooltip is aligned to parent end',
            params: {
                tooltipStart: 0,
                tooltipEnd: 200,
                parentStart: 160,
                parentEnd: 200,
                position: EvoTooltipPosition.TOP_END,
            },
            result: 200 - EVO_TOOLTIP_RADIUS - EVO_TOOLTIP_ARROW_SIZE, // // parentEnd (200) - tooltipStart (0) - radius (8) - arrow size (16)
        },
        {
            description:
                'should calculate correct offset when tooltip is completely AFTER the parent (no intersection)',
            params: {
                tooltipStart: 210,
                tooltipEnd: 300,
                parentStart: 0,
                parentEnd: 200,
                position: EvoTooltipPosition.RIGHT,
            },
            // negative arrow width as a fallback offset
            result: -EVO_TOOLTIP_ARROW_SIZE,
        },
        {
            description: 'should center the arrow on a micro parent (16px)',
            params: {
                tooltipStart: 40,
                tooltipEnd: 190,
                parentStart: 100,
                parentEnd: 116,
                position: EvoTooltipPosition.TOP,
            },
            // parentCenter (108) - tooltip start (40) - arrow half (8) = 60
            result: 108 - 40 - EVO_TOOLTIP_ARROW_SIZE / 2,
        },
        {
            description: 'should calculate correct offset when parent is micro (16px) and position is TOP_START',
            params: {
                tooltipStart: 90,
                tooltipEnd: 240,
                parentStart: 100,
                parentEnd: 116,
                position: EvoTooltipPosition.TOP_START,
            },
            // parent center (108) - tooltip start (90) - arrow half (8) = 10
            result: 108 - 90 - EVO_TOOLTIP_ARROW_SIZE / 2,
        },
        {
            description: 'should calculate correct offset when parent is micro (16px) and position is TOP_END',
            params: {
                tooltipStart: 0,
                tooltipEnd: 120,
                parentStart: 100,
                parentEnd: 116,
                position: EvoTooltipPosition.TOP_END,
            },
            // tooltip size (120) - radius (8) - arrow (16) = 96
            result: 120 - EVO_TOOLTIP_RADIUS - EVO_TOOLTIP_ARROW_SIZE,
        },
    ];

    testCases.forEach((testCase) =>
        it(testCase.description, () => {
            const result = getTooltipArrowOffset(testCase.params);

            expect(result).toBe(testCase.result);
        }),);
});
