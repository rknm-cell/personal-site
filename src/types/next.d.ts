declare global {
  interface Window {
    __BUILD_MANIFEST: Record<string, unknown>;
    __BUILD_MANIFEST_CB?: () => void;
  }
}

export {}; 