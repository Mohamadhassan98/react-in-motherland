export interface CopilotTypes {
    start?: () => void;
    copilotEvents?: {
        on: (handlerName: string, callback: (step?: number) => void) => void;
        off: (handlerName: string) => void;
    };
}
