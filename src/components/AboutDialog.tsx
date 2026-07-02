import { useEffect } from 'react';
import aboutBg from '../assets/about-bg.png';

interface AboutDialogProps {
  onClose: () => void;
}

export function AboutDialog({ onClose }: AboutDialogProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="About MAX Mind"
        className="relative flex w-[520px] max-w-[92vw] flex-col overflow-hidden rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundImage: `url(${aboutBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          minHeight: 'min(82vh, 760px)',
        }}
      >
        <div className="flex-1" aria-hidden="true" />
        <div className="bg-gradient-to-t from-black/90 via-black/60 to-transparent px-8 pb-8 pt-24 text-white">
          <h2 className="text-3xl font-bold drop-shadow-md">MAX Mind</h2>
          <p className="mt-1 text-sm opacity-90 drop-shadow">Version 0.1.0</p>
          <p className="mt-4 text-sm leading-relaxed opacity-90 drop-shadow">
            magicecole AI Transformation Mind mapping application.
            <br />
            XMind Zen 호환 네이티브 데스크톱 마인드맵.
          </p>
          <p className="mt-6 text-xs opacity-70 drop-shadow">
            © 2026 magicecole. All rights reserved.
          </p>
          <div className="mt-6 flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="rounded-md bg-white/90 px-4 py-1.5 text-sm font-medium text-gray-900 hover:bg-white focus:outline-none focus:ring-2 focus:ring-white/60"
            >
              확인
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
