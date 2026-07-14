"use client";

import { useState } from "react";

import { interestOptions } from "@/config/site";

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
  "rounded-[3px] border border-[#d9d0bf] bg-white px-3.5 py-[13px] font-sans text-[15px] text-[#1b2634] outline-none focus:border-gold";
const labelTextClass = "text-[13px] font-semibold text-[#2a3543]";

export function CallbackForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [error, setError] = useState("");
  const [submittedName, setSubmittedName] = useState<string | null>(null);

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
    setSubmittedName(form.name.trim().split(" ")[0] ?? form.name.trim());
    setError("");
  }

  function reset() {
    setForm(initialForm);
    setError("");
    setSubmittedName(null);
  }

  if (submittedName) {
    return (
      <div className="rounded-[6px] border border-line-soft bg-cream-card p-10">
        <div className="px-2.5 py-10 text-center">
          <div className="mx-auto flex size-[60px] items-center justify-center rounded-full bg-navy font-serif text-[30px] text-gold">
            ✓
          </div>
          <h3 className="mt-[22px] font-serif text-[28px]">
            Thank you, {submittedName}.
          </h3>
          <p className="mt-2.5 text-[15px] leading-[1.6] text-muted-ink">
            Your request has been received. A research advisor will reach out to
            you shortly.
          </p>
          <button
            type="button"
            onClick={reset}
            className="mt-[26px] rounded-[2px] border border-gold px-6 py-3 font-sans font-semibold text-navy transition-colors hover:bg-gold"
          >
            Submit another enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-[6px] border border-line-soft bg-cream-card p-10">
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
          <div className="rounded-[3px] border border-[#e6c6bd] bg-[#f8e9e5] px-3.5 py-[11px] text-[13.5px] text-[#a3402f]">
            {error}
          </div>
        ) : null}
        <button
          type="button"
          onClick={handleSubmit}
          className="rounded-[2px] bg-navy p-4 font-sans text-[15.5px] font-semibold text-cream transition-colors hover:bg-navy-deep"
        >
          Request Callback
        </button>
        <p className="text-[11.5px] leading-[1.55] text-[#8a948d]">
          By submitting, you agree to be contacted about our services.
          Investments are subject to market risks.
        </p>
      </div>
    </div>
  );
}
