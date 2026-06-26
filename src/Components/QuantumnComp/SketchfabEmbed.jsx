import React, { useMemo } from 'react';

/**
 * Sketchfab iframe embed wrapper.
 * We keep background transparent and hide UI so it blends into your scene.
 *
 * Props:
 * - brightness: number (1 = normal). We map lamp intensity to CSS filter for a subtle visual sync.
 * - mobile: boolean – layout sizing
 */
export default function SketchfabEmbed({ brightness = 1, mobile = false }) {
  const src = useMemo(() => {
    const base = 'https://sketchfab.com/models/82006aac41744663a161ab844264ac2a/embed';
    const params = new URLSearchParams({
      autospin: '0.3',
      autoplay: '1',
      preload: '1',
      transparent: '1',
      ui_theme: 'dark',
      ui_watermark: '0',
      ui_infos: '0',
      ui_controls: '0',
      ui_hint: '0',
      dnt: '1'
    });
    return `${base}?${params.toString()}`;
  }, []);

  return (
    <div
      className="sketchfab-frame"
      style={{
        filter: `brightness(${brightness})`,
      }}
    >
      <iframe
        title="Quantum Computer • Sketchfab"
        src={src}
        frameBorder="0"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        allowFullScreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
      />
      <div className="skfb-attr">
        Model: <a href="https://sketchfab.com/3d-models/quantum-computer-82006aac41744663a161ab844264ac2a" target="_blank" rel="noreferrer">Quantum Computer</a> by <a href="https://sketchfab.com/yanix" target="_blank" rel="noreferrer">yanix</a> on <a href="https://sketchfab.com" target="_blank" rel="noreferrer">Sketchfab</a>
      </div>
    </div>
  );
}