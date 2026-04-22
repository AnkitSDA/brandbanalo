"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import "@/styles/css/ServiceForm.css";
import { submitToMailHandler } from "@/lib/mailHandler";

export default function ServiceCtaSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<{ type: "idle" | "ok" | "err"; msg: string }>({
    type: "idle",
    msg: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setStatus({ type: "idle", msg: "" });

    const res = await submitToMailHandler({
      form_type: "Inquiry Form",
      website: "", // honeypot (kept empty here; not rendered in UI)
      name: formData.name,
      email: formData.email,
      phone: formData.number,
      service: formData.service,
      message: formData.message,
      company_name: "",
    });

    if (!res.ok) {
      setStatus({ type: "err", msg: res.error || "Unable to submit right now." });
      setSubmitting(false);
      return;
    }

    setStatus({ type: "ok", msg: res.message || "Thanks! We'll contact you shortly." });
    setFormData({ name: "", email: "", number: "", service: "", message: "" });
    setSubmitting(false);
  };

  return (
    <section className="cta-section section-padding dark-bg-style">
      <div className="container">
        <div
          className="cta-wrapper"
          style={{
            backgroundImage: "url('/assets/img/cta/cta-bg.webp')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="row align-items-center">

            {/* LEFT CONTENT */}
            <div className="col-lg-8">
              <div className="cta-content">
                <h2 style={{ fontSize: "70px", color: "#fff" }}>
                  Have an idea in your mind? <br />
                  Let&apos;s build something great together
                </h2>

                <p style={{ fontSize: "20px", color: "#fff" }}>
                  Share your caseStudy details with us and our team will contact
                  you shortly.
                </p>

              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="col-lg-4">
              <form onSubmit={handleSubmit} className="service-form">

  <h4>Request a Free Quote</h4>

  <div className="row">

    {/* Name */}
    <div className="col-md-6">
      <div className="form-group">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
    </div>

    {/* Email */}
    <div className="col-md-6">
      <div className="form-group">
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
    </div>

    {/* Phone */}
    <div className="col-md-6">
      <div className="form-group">
        <input
          type="tel"
          name="number"
          placeholder="Phone Number"
          value={formData.number}
          onChange={handleChange}
          required
        />
      </div>
    </div>

    {/* Service */}
    <div className="col-md-6">
  <div className="form-group">
    <select name="service" onChange={handleChange} required style={{border:"1px solid #ddd", padding:"10px"}} value={formData.service}>
      <option value="">Select  Service</option>
      <option value="web">Web Designing</option>
      <option value="web">Web Development</option>
      <option value="seo">Social Media Management</option>
      <option value="digital">Ads Management</option>
      <option value="app">Lead Generation</option>
      <option value="uiux">Branding Designing & Development</option>
      <option value="uiux">SEO (Search Engine Optimization)</option>
    </select>
  </div>
</div>

    {/* Message */}
    <div className="col-12">
      <div className="form-group">
        <textarea
          name="message"
          placeholder="Your Message"
          rows={2}
          onChange={handleChange}
          value={formData.message}
        />
      </div>
    </div>

  </div>

  <button type="submit" className="submit-btn" disabled={submitting} aria-disabled={submitting}>
    {submitting ? "Sending..." : "Send Request"}
  </button>

  <div
    aria-live="polite"
    style={{
      marginTop: 10,
      fontWeight: 700,
      color: status.type === "err" ? "#b91c1c" : status.type === "ok" ? "#15803d" : "#111827",
      display: status.msg ? "block" : "none",
    }}
  >
    {status.msg}
  </div>

</form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
