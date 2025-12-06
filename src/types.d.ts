// src/types.d.ts
declare module 'animejs' {
  export interface AnimeParams {
    [key: string]: any;
  }
  
  export interface AnimeInstance {
    play(): void;
    pause(): void;
    restart(): void;
  }
  
  export default function anime(params: AnimeParams): AnimeInstance;
}