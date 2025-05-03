// Declaración global para window.gtag
export {};
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}
