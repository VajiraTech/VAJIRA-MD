export interface EventBuffer<T> {
    push(value: T): void;
    error(error: Error): void;
    finish(): void;
    drain(): AsyncGenerator<T>;
}
export interface CreateEventBufferConfig {
    onDrainStart?: () => void;
    onDrainEnd?: () => void;
}
export declare function createEventBuffer<T>(config?: CreateEventBufferConfig): EventBuffer<T>;
