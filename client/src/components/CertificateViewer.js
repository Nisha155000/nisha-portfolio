import React from 'react';

export default function CertificateViewer({ open, item, onClose }) {
  if (!open || !item) return null;

  return (
    <div className="cert-modal-backdrop" role="presentation" onClick={onClose}>
      <div
        className="cert-modal"
        role="dialog"
        aria-modal="true"
        aria-label="Certificate preview"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="cert-close" type="button" onClick={onClose} aria-label="Close certificate preview">
          ×
        </button>
        <div className="cert-sheet">
          <div className="cert-badges">
            <span>Certificate</span>
            <span>2025</span>
          </div>
          <div className="cert-title">{item.title}</div>
          <div className="cert-subtitle">{item.subtitle}</div>
          <div className="cert-presented">Presented to</div>
          <div className="cert-name">Nisha G</div>
          <div className="cert-body">{item.description}</div>
          <div className="cert-footer">
            <span>{item.footerLeft}</span>
            <span>{item.footerRight}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
