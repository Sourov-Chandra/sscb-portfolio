"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const contactItems = [
  {
    icon: "✉",
    label: "Email",
    value: "sourov.cb.tech@email.com",
    href: "mailto:you@email.com",
  },
  {
    icon: "📍",
    label: "Location",
    value: "Thakurgaon, Bangladesh",
    href: null,
  },
  {
    icon: "⚡",
    label: "Response Time",
    value: "Within 24 hours",
    href: null,
  },
];

const socialLinks = [
  { label: "GH", href: "https://github.com/Sourov-Chandra", title: "GitHub" },
  {
    label: "LI",
    href: "https://www.linkedin.com/in/sourov-chandra-barmon/",
    title: "LinkedIn",
  },
  { label: "X", href: "https://x.com/Sourov_tpi", title: "Twitter" },
  {
    label: "DR",
    href: "https://www.facebook.com/sourov.chandra.barmon.dev",
    title: "Dribbble",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    // ── Replace with your actual email API call ──────────────────────────
    // EmailJS:  await emailjs.send("SERVICE_ID", "TEMPLATE_ID", formData, "PUBLIC_KEY");
    // Resend:   await fetch("/api/contact", { method:"POST", body: JSON.stringify(formData) });
    // ────────────────────────────────────────────────────────────────────
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("sent");
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <>
      {/* ── Responsive styles ── */}
      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.3fr;
          gap: 4rem;
          align-items: start;
        }
        .name-email-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        /* Tablet */
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }

        /* Mobile */
        @media (max-width: 540px) {
          .name-email-row {
            grid-template-columns: 1fr;
          }
          .contact-section {
            padding: 80px 1.25rem 60px !important;
          }
          .contact-heading {
            font-size: 1.6rem !important;
          }
          .social-row {
            flex-wrap: wrap;
          }
          .form-card {
            padding: 1.25rem !important;
          }
        }
      `}</style>

      <section
        id="contact"
        ref={ref}
        className="contact-section"
        style={{
          background: "var(--bg, #080c0e)",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          padding: "100px 2rem 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Grid background */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(0,229,204,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,229,204,0.03) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
            pointerEvents: "none",
          }}
        />

        {/* Radial glow */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: "-200px",
            right: "-200px",
            width: "600px",
            height: "600px",
            background:
              "radial-gradient(circle, rgba(0,229,204,0.06) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            width: "100%",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* ── Section header ── */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            custom={0}
            style={{ marginBottom: "3rem" }}
          >
            <p
              style={{
                fontSize: "0.65rem",
                letterSpacing: "3px",
                color: "var(--cyan, #00ffc8)",
                textTransform: "uppercase",
                marginBottom: "0.5rem",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontFamily: "var(--mono, monospace)",
              }}
            >
              <span style={{ color: "#708d85" }}>{"// "}</span> Get In Touch
            </p>
            <h2
              className="contact-heading"
              style={{
                fontFamily: "var(--display, sans-serif)",
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                fontWeight: 800,
                marginBottom: "1rem",
                color: "var(--text, #e8f4f0)",
              }}
            >
              Let&apos;s Build Something
              <br />
              <span style={{ color: "var(--cyan, #00ffc8)" }}>
                Great Together.
              </span>
            </h2>
            <div
              style={{
                width: "50px",
                height: "2px",
                background:
                  "linear-gradient(90deg, var(--cyan, #00ffc8), transparent)",
              }}
            />
          </motion.div>

          {/* ── Two-column layout ── */}
          <div className="contact-grid">
            {/* LEFT — info */}
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              custom={1}
            >
              <p
                style={{
                  fontSize: "0.82rem",
                  color: "var(--text2, #8aa8a0)",
                  lineHeight: 2,
                  marginBottom: "2rem",
                  fontFamily: "var(--mono, monospace)",
                }}
              >
                I&apos;m currently open to new opportunities. Whether you have a
                project in mind, want to collaborate, or just want to say hi —
                my inbox is always open.
              </p>

              {/* Contact items */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                {contactItems.map((item, i) => {
                  const Tag = item.href ? motion.a : motion.div;
                  return (
                    <Tag
                      key={item.label}
                      {...(item.href ? { href: item.href } : {})}
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                      variants={fadeUp}
                      custom={i + 2}
                      whileHover={{ x: 4 }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        padding: "1rem 1.25rem",
                        background: "var(--bg2, #0d1417)",
                        border: "1px solid rgba(0,255,200,0.15)",
                        transition: "border-color 0.3s",
                        cursor: item.href ? "pointer" : "default",
                        textDecoration: "none",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor =
                          "rgba(0,255,200,0.45)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor =
                          "rgba(0,255,200,0.15)";
                      }}
                    >
                      <div
                        style={{
                          width: "40px",
                          height: "40px",
                          background: "rgba(0,229,204,0.08)",
                          border: "1px solid rgba(0,229,204,0.15)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "1rem",
                          flexShrink: 0,
                        }}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <div
                          style={{
                            fontSize: "0.6rem",
                            color: "var(--text3, #8aa8a0)",
                            letterSpacing: "1.5px",
                            textTransform: "uppercase",
                            fontFamily: "var(--mono, monospace)",
                          }}
                        >
                          {item.label}
                        </div>
                        <div
                          style={{
                            fontSize: "0.82rem",
                            color: "var(--text, #e8f4f0)",
                            marginTop: "2px",
                            fontFamily: "var(--mono, monospace)",
                          }}
                        >
                          {item.value}
                        </div>
                      </div>
                    </Tag>
                  );
                })}
              </div>

              {/* Social links */}
              <div
                className="social-row"
                style={{ display: "flex", gap: "0.75rem", marginTop: "2rem" }}
              >
                {socialLinks.map((s, i) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    title={s.title}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={fadeUp}
                    custom={i + 5}
                    whileHover={{ y: -3 }}
                    style={{
                      width: "40px",
                      height: "40px",
                      border: "1px solid rgba(0,255,200,0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--text3, #8aa8a0)",
                      textDecoration: "none",
                      fontSize: "0.72rem",
                      fontFamily: "var(--mono, monospace)",
                      fontWeight: 700,
                      transition: "color 0.2s, border-color 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "var(--cyan, #00ffc8)";
                      e.currentTarget.style.borderColor = "rgba(0,255,200,0.45)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "var(--text3, #8aa8a0)";
                      e.currentTarget.style.borderColor = "rgba(0,255,200,0.15)";
                    }}
                  >
                    {s.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* RIGHT — form */}
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              custom={2}
              style={{ position: "relative" }}
            >
              <div
                className="form-card"
                style={{
                  background: "var(--bg2, #0d1417)",
                  border: "1px solid rgba(0,255,200,0.15)",
                  padding: "2rem",
                  position: "relative",
                }}
              >
                {/* Top label tab */}
                <div
                  style={{
                    position: "absolute",
                    top: "-1px",
                    left: "1.5rem",
                    background: "var(--cyan, #00ffc8)",
                    color: "#080c0e",
                    fontSize: "0.6rem",
                    padding: "2px 10px",
                    letterSpacing: "1px",
                    fontFamily: "var(--mono, monospace)",
                    fontWeight: 700,
                  }}
                >
                  contact.send()
                </div>

                <form onSubmit={handleSubmit} style={{ marginTop: "0.5rem" }}>
                  {/* Name + Email row — stacks on mobile via CSS */}
                  <div className="name-email-row">
                    <FormField
                      label="Name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <FormField
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="john@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div style={{ marginBottom: "1rem" }}>
                    <FormField
                      label="Subject"
                      name="subject"
                      type="text"
                      placeholder="Project Inquiry"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div style={{ marginBottom: "1.5rem" }}>
                    <FormField
                      label="Message"
                      name="message"
                      type="textarea"
                      placeholder="Tell me about your project..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={status === "sending" || status === "sent"}
                    whileHover={status === "idle" ? { scale: 1.01 } : {}}
                    whileTap={status === "idle" ? { scale: 0.98 } : {}}
                    style={{
                      width: "100%",
                      background:
                        status === "sent"
                          ? "#00e599"
                          : status === "error"
                            ? "#e24b4a"
                            : "var(--cyan, #00ffc8)",
                      color: "#080c0e",
                      border: "none",
                      padding: "14px",
                      fontFamily: "var(--mono, monospace)",
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      letterSpacing: "1px",
                      cursor: status === "idle" ? "pointer" : "not-allowed",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      clipPath:
                        "polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px))",
                      transition: "background 0.3s",
                    }}
                  >
                    {status === "sending" && <Spinner />}
                    {status === "idle" && "Send Message →"}
                    {status === "sending" && "Sending..."}
                    {status === "sent" && "✓ Message Sent!"}
                    {status === "error" && "✗ Failed — Try Again"}
                  </motion.button>
                </form>
              </div>

              {/* Decorative corner */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  bottom: "-12px",
                  right: "-12px",
                  width: "60px",
                  height: "60px",
                  border: "1px solid rgba(0,229,204,0.15)",
                  pointerEvents: "none",
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ── Sub-components ─────────────────────────────────────────────────────── */

function FormField({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  required,
}) {
  const [focused, setFocused] = useState(false);

  const inputStyle = {
    width: "100%",
    background: "var(--bg3, #111820)",
    border: `1px solid ${focused ? "var(--cyan, #00ffc8)" : "rgba(0,255,200,0.15)"}`,
    color: "var(--text, #e8f4f0)",
    fontFamily: "var(--mono, monospace)",
    fontSize: "0.78rem",
    padding: "10px 14px",
    outline: "none",
    transition: "border-color 0.2s",
    resize: type === "textarea" ? "vertical" : undefined,
    minHeight: type === "textarea" ? "110px" : undefined,
    boxSizing: "border-box",
  };

  return (
    <div style={{ width: "100%" }}>
      <label
        style={{
          fontSize: "0.6rem",
          color: focused ? "var(--cyan, #00ffc8)" : "var(--text3, #8aa8a0)",
          letterSpacing: "1.5px",
          textTransform: "uppercase",
          display: "block",
          marginBottom: "0.4rem",
          fontFamily: "var(--mono, monospace)",
          transition: "color 0.2s",
        }}
      >
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={inputStyle}
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={inputStyle}
        />
      )}
    </div>
  );
}

function Spinner() {
  return (
    <span
      style={{
        display: "inline-block",
        width: "14px",
        height: "14px",
        border: "2px solid rgba(8,12,14,0.3)",
        borderTop: "2px solid #080c0e",
        borderRadius: "50%",
        animation: "spin 0.7s linear infinite",
      }}
    >
      <style>{`@keyframes spin { to { transform: rotate(360deg) } }`}</style>
    </span>
  );
}
