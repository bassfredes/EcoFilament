function Toast({ show, message, onClose }: { show: boolean; message: string; onClose: () => void }) {
  if (!show) return null;
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-[#232B33] text-white px-6 py-3 rounded-full shadow-lg border border-[#6FCF97] z-50 flex items-center gap-2 animate-fade-in">
      <span>{message}</span>
      <button
        className="ml-3 text-[#6FCF97] font-bold text-lg focus:outline-none"
        onClick={onClose}
        aria-label="Cerrar notificación"
      >
        ×
      </button>
    </div>
  );
}

export default Toast;