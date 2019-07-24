/*
 * Extra typings definitions
 */

// Allow .json files imports
declare module '*.json';

// SystemJS module definition
declare var module: NodeModule;
interface NodeModule {
  id: string;
}
declare interface Date {
  getUTCTime(): string;
  pad(number: number): string;
}

interface Window {
  eel: any;
}

declare var window: Window;
