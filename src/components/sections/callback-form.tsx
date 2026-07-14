"use client";

import { m } from "motion/react";
import { useRef, useState } from "react";

import { MagneticButton } from "@/components/animations/MagneticButton";
import { interestOptions } from "@/config/site";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

interface FormState {
  name: string;
  phone: string;
  email: string;
  interest: string;
  message: string;
}

const initialForm: FormState = {
  name: "",
  phone: "",
  email: "",
  interest: interestOptions[0],
  message: "",
};

const inputClass =
  "rounded-[3px] border border-[#d9d0bf] bg-white px-3.5 py-[13px] font-sans text-[15px] text-[#1b2634] outline-none transition-[border-color,box-shadow] duration-300 focus:border-gold focus:shadow-[0_0_0_3px_rgba(198,160,82,0.15)]";
const labelTextClass = "text-[13px] font-semibold text-[#2a3543]";

export function CallbackForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [error, setError] = useState("");
  const [submittedName, setSubmittedName] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const reduced = usePrefersReducedMotion();
  const timerRef = useRef<number | null>(null);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setError("");
  }

  function handleSubmit() {
    if (!form.name.trim()) {
      setError("Please enter your name.");
      return;
    }
    const digits = form.phone.replace(/\D/g, "");
    if (digits.length < 10) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }
    if (form.email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    setError("");
    if (timerRef.current) window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      setSubmittedName(form.name.trim().split(" ")[0] ?? form.name.trim());
      setLoading(false);
    }, reduced ? 0 : 700);
  }

  function reset() {
    setForm(initialForm);
    setError("");
    setSubmittedName(null);
    setLoading(false);
  }

  if (submittedName) {
    return (
      <m.div
        initial={reduced ? false : { opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-[6px] border border-line-soft bg-cream-card p-10"
      >
        <div className="px-2.5 py-10 text-center">
          <m.div
            initial={reduced ? false : { scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            className="mx-auto flex size-[60px] items-center justify-center rounded-full bg-navy font-serif text-[30px] text-gold shadow-[0_0_28px_-6px_rgba(198,160,82,0.55)]"
          >
            ✓
          </m.div>
          <h3 className="mt-[22px] font-serif text-[28px]">
            Thank you, {submittedName}.
          </h3>
          <p className="mt-2.5 text-[15px] leading-[1.6] text-muted-ink">
            Your request has been received. A research advisor will reach out to
            you shortly.
          </p>
          <MagneticButton
            onClick={reset}
            className="mt-[26px] rounded-[2px] border border-gold px-6 py-3 font-sans font-semibold text-navy hover:bg-gold"
          >
            Submit another enquiry
          </MagneticButton>
        </div>
      </m.div>
    );
  }

  return (
    <div className="rounded-[6px] border border-line-soft bg-cream-card p-10 shadow-[0_20px_48px_-36px_rgba(14,31,56,0.2)]">
      <h3 className="mb-1.5 font-serif text-[26px] font-medium">
        Request a callback
      </h3>
      <p className="mb-[26px] text-[14px] text-[#77828f]">
        Fields marked * are required.
      </p>
      <div className="flex flex-col gap-[18px]">
        <label className="flex flex-col gap-[7px]">
          <span className={labelTextClass}>Full name *</span>
          <input
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="e.g. Rahul Sharma"
            className={inputClass}
          />
        </label>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <label className="flex flex-col gap-[7px]">
            <span className={labelTextClass}>Phone *</span>
            <input
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              placeholder="10-digit mobile"
              inputMode="tel"
              className={inputClass}
            />
          </label>
          <label className="flex flex-col gap-[7px]">
            <span className={labelTextClass}>Email</span>
            <input
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              placeholder="you@email.com"
              inputMode="email"
              className={inputClass}
            />
          </label>
        </div>
        <label className="flex flex-col gap-[7px]">
          <span className={labelTextClass}>I&apos;m interested in</span>
          <select
            value={form.interest}
            onChange={(e) => update("interest", e.target.value)}
            className={inputClass}
          >
            {interestOptions.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-[7px]">
          <span className={labelTextClass}>Message</span>
          <textarea
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
            rows={3}
            placeholder="Tell us about your goals (optional)"
            className={`${inputClass} resize-y`}
          />
        </label>
        {error ? (
          <m.div
            initial={reduced ? false : { opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-[3px] border border-[#e6c6bd] bg-[#f8e9e5] px-3.5 py-[11px] text-[13.5px] text-[#a3402f]"
          >
            {error}
          </m.div>
        ) : null}
        <MagneticButton
          onClick={handleSubmit}
          disabled={loading}
          className="rounded-[2px] bg-navy p-4 font-sans text-[15.5px] font-semibold text-cream hover:bg-navy-deep disabled:cursor-wait disabled:opacity-80"
        >
          {loading ? (
            <span className="inline-flex items-center gap-2">
              <span
                aria-hidden
                className="size-4 animate-spin rounded-full border-2 border-cream/30 border-t-gold"
              />
              Sending…
            </span>
          ) : (
            "Request Callback"
          )}
        </MagneticButton>
        <p className="text-[11.5px] leading-[1.55] text-[#8a948d]">
          By submitting, you agree to be contacted about our services.
          Investments are subject to market risks.
        </p>
      </div>
    </div>
  );
}
