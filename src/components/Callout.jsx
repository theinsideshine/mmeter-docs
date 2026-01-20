import React from 'react';

const styles = {
  note: { borderLeft: '4px solid #3b82f6', background: 'rgba(59,130,246,.08)' },
  tip: { borderLeft: '4px solid #10b981', background: 'rgba(16,185,129,.08)' },
  warn: { borderLeft: '4px solid #f59e0b', background: 'rgba(245,158,11,.10)' },
};

export default function Callout({ type = 'note', title, children }) {
  return (
    <div style={{ padding: '12px 14px', borderRadius: 10, margin: '16px 0', ...styles[type] }}>
      {title && <div style={{ fontWeight: 700, marginBottom: 6 }}>{title}</div>}
      <div>{children}</div>
    </div>
  );
}
