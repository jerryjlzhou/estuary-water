"use client";

import { type FormEvent, useState } from "react";

const businessTypes = [
  "Cafe / Coffee House",
  "Hotel / Resort",
  "Restaurant / Fine Dining",
  "Bar / Lounge",
  "Sporting Venue / Event",
  "Fashion / Cultural Event",
  "Corporate",
  "Other",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      business: formData.get("business") as string,
      businessType: formData.get("businessType") as string,
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const result = (await res.json()) as { error?: string };
        throw new Error(result.error ?? "Something went wrong.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Failed to send enquiry. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="flex h-full min-h-[300px] items-center justify-center">
        <div className="text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center">
            <div className="h-3 w-3 rotate-45 bg-accent" />
          </div>
          <h3 className="font-serif text-2xl font-medium text-primary">
            Thank You
          </h3>
          <p className="mt-3 text-sm text-muted">
            Your enquiry has been received. We&apos;ll be in touch shortly.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <label
          htmlFor="name"
          className="block text-xs font-medium tracking-[0.15em] uppercase text-primary/60"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="mt-2 w-full border-b border-primary/20 bg-transparent py-3 text-sm text-primary outline-none transition-colors focus:border-primary"
          placeholder="Your full name"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-xs font-medium tracking-[0.15em] uppercase text-primary/60"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-2 w-full border-b border-primary/20 bg-transparent py-3 text-sm text-primary outline-none transition-colors focus:border-primary"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label
          htmlFor="business"
          className="block text-xs font-medium tracking-[0.15em] uppercase text-primary/60"
        >
          Business Name
        </label>
        <input
          type="text"
          id="business"
          name="business"
          className="mt-2 w-full border-b border-primary/20 bg-transparent py-3 text-sm text-primary outline-none transition-colors focus:border-primary"
          placeholder="Your business or venue"
        />
      </div>

      <div>
        <label
          htmlFor="businessType"
          className="block text-xs font-medium tracking-[0.15em] uppercase text-primary/60"
        >
          Business Type
        </label>
        <select
          id="businessType"
          name="businessType"
          className="mt-2 w-full border-b border-primary/20 bg-transparent py-3 text-sm text-primary outline-none transition-colors focus:border-primary"
          defaultValue=""
        >
          <option value="" disabled>
            Select your business type
          </option>
          {businessTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-xs font-medium tracking-[0.15em] uppercase text-primary/60"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="mt-2 w-full resize-none border-b border-primary/20 bg-transparent py-3 text-sm text-primary outline-none transition-colors focus:border-primary"
          placeholder="Tell us about your enquiry..."
        />
      </div>

      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="mt-4 w-full border border-primary bg-primary px-8 py-3.5 text-xs font-medium tracking-[0.2em] uppercase text-white transition-all duration-300 hover:bg-primary-light disabled:opacity-50 sm:w-auto"
      >
        {loading ? "Sending..." : "Send Enquiry"}
      </button>
    </form>
  );
}
