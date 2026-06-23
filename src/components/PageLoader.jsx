import React from 'react';

export default function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-24 pb-16">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full border-4 border-cyan-300/30 border-t-cyan-300 animate-spin"></div>
        <p className="text-sm text-slate-400 font-medium">Loading...</p>
      </div>
    </div>
  );
}
