"use client";

export default function PrintButton() {
    return (
        <button
            type="button"
            onClick={() => window.print()}
            className="print:hidden inline-flex items-center gap-2 rounded border border-neutral-300 px-3 py-1.5 text-sm text-neutral-700 hover:border-neutral-900 hover:text-neutral-900 transition-colors"
        >
            Imprimir / Guardar PDF
        </button>
    );
}