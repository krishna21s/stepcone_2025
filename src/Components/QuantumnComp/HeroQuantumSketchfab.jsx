import React, { useMemo } from 'react';
import './heroQuantum.css';

/**
 * Simple hero: Left panel contains embedded quantum computer + overlaid title.
 * No other content, no lamp, no wires.
 */
export default function HeroQuantum() {

  const sketchfabSrc = useMemo(() => {
    const base = 'https://sketchfab.com/models/82006aac41744663a161ab844264ac2a/embed';
    const params = new URLSearchParams({
      // Behavior
      autospin: '0.3',
      autoplay: '1',
      preload: '1',
      transparent: '1',
      ui_theme: 'dark',
      // Hide UI components
      ui_infos: '0',
      ui_controls: '0',
      ui_hint: '0',
      ui_watermark: '0',     // May be ignored if not allowed
      ui_stop: '0',
      ui_annotations: '0',
      dnt: '1'
    });
    return `${base}?${params.toString()}`;
  }, []);

  return (
    <section className="hero-qc-simple">
      <div className="qc-panel">
        <div className="title-overlay">
          <h1 className="fest-title">STEPCONE 2026</h1>
        </div>
        <div className="embed-wrapper">
          <iframe
            title="Quantum Computer"
            src={sketchfabSrc}
            frameBorder="0"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            allowFullScreen
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
          />
        </div>
      </div>
    </section>
  );
}