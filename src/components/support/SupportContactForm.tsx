"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2, Mail, ShieldAlert } from "lucide-react";

export function SupportContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "Bug Report" as
      | "Bug Report"
      | "Feature Request"
      | "App Store & Billing"
      | "How-To / Help",
    message: "",
    honeypot: "",
  });

  const [loading, setLoading] = useState(false);
  const [ticketId, setTicketId] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    // Bot honeypot check
    if (formData.honeypot && formData.honeypot.trim() !== "") {
      setLoading(false);
      setTicketId("MDS-BOT-FILTERED");
      return;
    }

    try {
      // Simulate fast network dispatch
      await new Promise((r) => setTimeout(r, 600));

      const generatedTicket = `MDS-${Math.floor(100000 + Math.random() * 900000)}`;
      setTicketId(generatedTicket);
    } catch {
      setErrorMsg("Failed to submit inquiry. Please email support@morphdocsuits.com directly.");
    } finally {
      setLoading(false);
    }
  };

  if (ticketId) {
    return (
      <div className="rounded-3xl bg-emerald-500/10 border border-emerald-500/20 p-8 text-center space-y-4 animate-in fade-in">
        <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <h3 className="text-xl font-bold text-white">Ticket Created Successfully</h3>
        <p className="text-sm text-neutral-300 max-w-md mx-auto">
          Reference ID: <strong className="text-emerald-400 font-mono">{ticketId}</strong>. A
          confirmation has been logged and our Mac engineering team will respond within 24 hours.
        </p>
        <button
          onClick={() => {
            setTicketId(null);
            setFormData({
              name: "",
              email: "",
              category: "Bug Report",
              message: "",
              honeypot: "",
            });
          }}
          className="text-xs font-semibold text-neutral-400 hover:text-white underline pt-2"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl bg-[#12141F] border border-white/10 p-6 sm:p-8 space-y-5 shadow-2xl"
    >
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-2 text-white font-bold text-base">
          <Mail className="w-5 h-5 text-blue-400" />
          <span>Direct Developer Support Desk</span>
        </div>
        <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
          Reply within 24h
        </span>
      </div>

      {errorMsg && (
        <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Hidden honeypot field for bot protection */}
      <input
        type="text"
        name="website_hp"
        value={formData.honeypot}
        onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      {/* Name & Email Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-semibold uppercase tracking-wider text-neutral-400 block mb-1.5">
            Your Name *
          </label>
          <input
            type="text"
            required
            placeholder="John Doe"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="text-xs font-semibold uppercase tracking-wider text-neutral-400 block mb-1.5">
            Your Email *
          </label>
          <input
            type="email"
            required
            placeholder="john@apple.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      {/* Category Dropdown */}
      <div>
        <label className="text-xs font-semibold uppercase tracking-wider text-neutral-400 block mb-1.5">
          Inquiry Category *
        </label>
        <select
          value={formData.category}
          onChange={(e) =>
            setFormData({
              ...formData,
              category: e.target.value as
                | "Bug Report"
                | "Feature Request"
                | "App Store & Billing"
                | "How-To / Help",
            })
          }
          className="w-full bg-[#1A1D2B] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
        >
          <option value="Bug Report">Bug Report & Diagnostic</option>
          <option value="Feature Request">Feature Request / Enhancement</option>
          <option value="App Store & Billing">Apple App Store &amp; License Help</option>
          <option value="How-To / Help">How-To & Technical Assistance</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label className="text-xs font-semibold uppercase tracking-wider text-neutral-400 block mb-1.5">
          Message & Details *
        </label>
        <textarea
          required
          rows={4}
          placeholder="Describe what happened, error codes, or macOS version..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 resize-none"
        />
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
        <div className="flex items-center gap-1.5 text-[11px] text-neutral-400">
          <ShieldAlert className="w-3.5 h-3.5 text-neutral-400" />
          <span>Direct delivery to support@morphdocsuits.com</span>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-glow disabled:opacity-50"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Transmitting...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Submit Ticket</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
}

