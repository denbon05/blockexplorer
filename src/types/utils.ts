export type ApiReturn<T extends (...args: any) => any> = Awaited<ReturnType<T>>;
