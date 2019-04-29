export interface Config {
    designUrl: string;
}

export class StoryHelper {
    static setDecoratorConfig(config: Config) {
        return {
            design: {
                type: 'figma',
                url: config.designUrl,
            },
        };
    }
}
