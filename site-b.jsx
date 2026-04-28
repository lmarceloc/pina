/* global React, ReactDOM */
const { useState: useStateB, useEffect: useEffectB } = React;

// ─────────────────────────────────────────────────────────────
// VARIAÇÃO B — LUXO QUENTE / NUDE
// Champanhe / nude / preto profundo / accent dourado
// Tipografia mais editorial, layouts cinematográficos
// ─────────────────────────────────────────────────────────────

const SERVICES_B = [
  { name: "Cortes", italic: "Femininos", desc: "Cortes que dialogam com sua personalidade." },
  { name: "Maquiagem", italic: "Couture", desc: "Make autoral para o seu momento mais importante." },
  { name: "Sobrancelhas", italic: "Visagismo", desc: "Design que harmoniza o olhar." },
  { name: "Unhas", italic: "Nail Art", desc: "Da clássica francesinha à arte autoral." },
  { name: "Cílios", italic: "Volume Russo", desc: "Olhar marcante, sem peso." },
];

const TEAM_B = [
  { name: "Carolina Pina", role: "Hair Stylist · Founder" },
  { name: "Marina Costa", role: "Make-up Artist" },
  { name: "Letícia Alves", role: "Brow Designer" },
  { name: "Bruna Ramos", role: "Nail Artist" },
];

function useRevealB() {
  useEffectB(() => {
    const els = document.querySelectorAll("[data-reveal-b]");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.setAttribute("data-revealed-b", "true");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function PinaLogoB({ color = "#1a0f0a", size = 1 }) {
  return (
    <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", lineHeight: 1, color }}>
      <div style={{
        fontFamily: "'Cormorant Garamond', serif", fontWeight: 300,
        letterSpacing: `${0.18 * size}em`, fontSize: `${44 * size}px`, paddingLeft: `${0.18 * size}em`,
      }}>PINA</div>
      <div style={{
        fontFamily: "'Jost', sans-serif", fontWeight: 300,
        letterSpacing: `${0.4 * size}em`, fontSize: `${8 * size}px`,
        marginTop: `${6 * size}px`, paddingLeft: `${0.4 * size}em`, opacity: 0.85,
      }}>BEAUTY CONCEPT</div>
    </div>
  );
}

function NavB() {
  const [scrolled, setScrolled] = useStateB(false);
  useEffectB(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      padding: scrolled ? "14px 56px" : "32px 56px",
      transition: "all 500ms cubic-bezier(.2,.8,.2,1)",
      background: scrolled ? "rgba(244,237,228,0.92)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      color: scrolled ? "#1a0f0a" : "#F4EDE4",
    }}>
      <PinaLogoB color="currentColor" size={0.5} />
      <ul style={{ display: "flex", gap: 40, listStyle: "none", margin: 0, padding: 0,
        fontFamily: "'Jost', sans-serif", fontSize: 12, letterSpacing: "0.18em", fontWeight: 300, textTransform: "uppercase" }}>
        {["Filosofia", "Atelier", "Equipe", "Galeria", "Visite-nos"].map((l, i) => (
          <li key={l}>
            <a href={`#sec${i}`} style={{ color: "inherit", textDecoration: "none", position: "relative", paddingBottom: 4 }}
              onMouseEnter={(e) => e.currentTarget.style.borderBottom = "1px solid #B8895A"}
              onMouseLeave={(e) => e.currentTarget.style.borderBottom = "1px solid transparent"}
            >{l}</a>
          </li>
        ))}
      </ul>
      <a href="https://wa.me/5542998144294" target="_blank" rel="noreferrer" style={{
        fontFamily: "'Cormorant Garamond', serif", fontSize: 16, fontStyle: "italic", fontWeight: 400,
        color: "currentColor", textDecoration: "none",
        borderBottom: "1px solid currentColor", paddingBottom: 2,
      }}>Reservar — WhatsApp</a>
    </nav>
  );
}

function HeroB() {
  return (
    <section id="sec0" style={{
      minHeight: "100vh", position: "relative", overflow: "hidden",
      background: "radial-gradient(ellipse at 70% 40%, #2a1a10 0%, #14090a 70%)",
      color: "#F4EDE4",
    }}>
      {/* Big italic background word */}
      <div style={{
        position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 300,
        fontSize: "clamp(280px, 38vw, 560px)", color: "rgba(184,137,90,0.06)",
        letterSpacing: "-0.04em", lineHeight: 1, userSelect: "none", pointerEvents: "none",
        whiteSpace: "nowrap",
      }}>Diva</div>

      {/* Centered hero content */}
      <div style={{
        position: "relative", zIndex: 2, minHeight: "100vh",
        display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",
        padding: "120px 56px 60px", textAlign: "center",
      }}>
        <div data-reveal-b style={{
          fontFamily: "'Jost', sans-serif", fontSize: 11, letterSpacing: "0.5em",
          textTransform: "uppercase", color: "#B8895A", marginBottom: 56, fontWeight: 300,
        }}>
          ✦ &nbsp; Beauty Atelier · Ponta Grossa &nbsp; ✦
        </div>
        <h1 data-reveal-b style={{
          fontFamily: "'Cormorant Garamond', serif", fontWeight: 300,
          fontSize: "clamp(64px, 9vw, 144px)", lineHeight: 0.95, letterSpacing: "-0.025em",
          margin: 0, marginBottom: 40, maxWidth: 1100,
        }}>
          Onde mulheres<br/>
          se tornam<br/>
          <em style={{ fontStyle: "italic", color: "#D4A574", fontWeight: 300 }}>obras-primas.</em>
        </h1>
        <p data-reveal-b style={{
          fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: 17, lineHeight: 1.7,
          maxWidth: 540, opacity: 0.75, margin: 0, marginBottom: 56,
        }}>
          Um atelier de beleza dedicado à arte de revelar a sua versão mais luminosa. Cada serviço, uma assinatura.
        </p>
        <div data-reveal-b style={{ display: "flex", gap: 24, alignItems: "center" }}>
          <a href="https://wa.me/5542998144294" target="_blank" rel="noreferrer" style={{
            background: "#F4EDE4", color: "#1a0f0a", padding: "20px 44px", borderRadius: 999,
            fontFamily: "'Jost', sans-serif", fontSize: 12, letterSpacing: "0.22em",
            textTransform: "uppercase", textDecoration: "none", fontWeight: 400,
            transition: "all 400ms",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "#D4A574"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "#F4EDE4"; }}
          >Reserve sua experiência</a>
          <a href="#sec1" style={{
            color: "#F4EDE4", fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic",
            fontSize: 18, textDecoration: "none", borderBottom: "1px solid rgba(244,237,228,0.4)", paddingBottom: 4,
          }}>conhecer o atelier</a>
        </div>

        {/* Stats strip */}
        <div data-reveal-b style={{
          marginTop: 96, display: "flex", gap: 80, justifyContent: "center",
          paddingTop: 40, borderTop: "1px solid rgba(184,137,90,0.25)",
        }}>
          {[
            { n: "10+", l: "Anos" },
            { n: "2.6k", l: "Clientes" },
            { n: "5★", l: "Avaliação" },
          ].map((s) => (
            <div key={s.l} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 300, fontSize: 36, color: "#D4A574" }}>{s.n}</div>
              <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", opacity: 0.6, marginTop: 4 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PhilosophyB() {
  return (
    <section id="sec1" style={{
      background: "#F4EDE4", color: "#1a0f0a", padding: "180px 56px",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
        <div data-reveal-b style={{
          fontFamily: "'Jost', sans-serif", fontSize: 11, letterSpacing: "0.5em",
          textTransform: "uppercase", color: "#B8895A", marginBottom: 40, fontWeight: 300,
        }}>— Filosofia</div>
        <h2 data-reveal-b style={{
          fontFamily: "'Cormorant Garamond', serif", fontWeight: 300,
          fontSize: "clamp(40px, 5vw, 72px)", lineHeight: 1.15, letterSpacing: "-0.02em",
          margin: 0, marginBottom: 40,
        }}>
          A beleza, para nós, é o <em style={{ color: "#B8895A" }}>cuidado</em><br/>
          que se transforma em <em style={{ color: "#B8895A" }}>presença</em>.
        </h2>
        <p data-reveal-b style={{
          fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: 18, lineHeight: 1.8,
          color: "#3a2a20", maxWidth: 760, margin: "0 auto 56px",
        }}>
          O Pina Beauty Concept é um atelier dedicado à arte de embelezar — não apenas pela técnica, mas pelo olhar atento, pelo tempo dedicado, pelo desejo genuíno de ver cada mulher sair daqui mais segura, mais sua, mais diva.
        </p>
        <div data-reveal-b style={{ display: "flex", justifyContent: "center", gap: 16, alignItems: "center" }}>
          <div style={{ width: 32, height: 1, background: "#B8895A" }} />
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: 22, color: "#B8895A" }}>Carolina Pina</div>
          <div style={{ width: 32, height: 1, background: "#B8895A" }} />
        </div>
      </div>
    </section>
  );
}

function AtelierB() {
  return (
    <section id="sec2" style={{
      background: "#1a0f0a", color: "#F4EDE4", padding: "180px 56px", position: "relative", overflow: "hidden",
    }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <div data-reveal-b style={{ textAlign: "center", marginBottom: 100 }}>
          <div style={{
            fontFamily: "'Jost', sans-serif", fontSize: 11, letterSpacing: "0.5em",
            textTransform: "uppercase", color: "#D4A574", marginBottom: 32, fontWeight: 300,
          }}>— Atelier</div>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif", fontWeight: 300,
            fontSize: "clamp(56px, 8vw, 112px)", lineHeight: 0.95, letterSpacing: "-0.03em",
            margin: 0,
          }}>
            Serviços<br/><em style={{ fontStyle: "italic", color: "#D4A574" }}>assinatura</em>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 1, background: "rgba(212,165,116,0.15)" }}>
          {SERVICES_B.map((s, i) => (
            <div key={s.name} data-reveal-b style={{
              background: "#1a0f0a", padding: "64px 40px",
              transition: "all 500ms",
              cursor: "pointer", position: "relative", minHeight: 320,
              display: "flex", flexDirection: "column", justifyContent: "space-between",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#241510"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "#1a0f0a"; }}
            >
              <div style={{
                fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 300,
                fontSize: 14, color: "#D4A574", letterSpacing: "0.05em",
              }}>nº {String(i+1).padStart(2,'0')}</div>
              <div>
                <div style={{
                  fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 56,
                  lineHeight: 1, letterSpacing: "-0.02em", marginBottom: 8,
                }}>{s.name}</div>
                <div style={{
                  fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 300,
                  fontSize: 32, color: "#D4A574", lineHeight: 1, marginBottom: 24,
                }}>{s.italic}</div>
                <p style={{
                  fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: 14,
                  lineHeight: 1.7, opacity: 0.7, margin: 0,
                }}>{s.desc}</p>
              </div>
              <div style={{
                fontFamily: "'Jost', sans-serif", fontSize: 10, letterSpacing: "0.3em",
                textTransform: "uppercase", color: "#D4A574",
              }}>Ver detalhes →</div>
            </div>
          ))}
          {/* Filler tile to balance grid */}
          <div style={{
            background: "linear-gradient(135deg, #D4A574 0%, #B8895A 100%)",
            padding: "64px 40px", color: "#1a0f0a",
            display: "flex", flexDirection: "column", justifyContent: "center",
          }}>
            <div style={{
              fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 300,
              fontSize: 36, lineHeight: 1.2, marginBottom: 24,
            }}>Algo<br/>mais especial?</div>
            <p style={{
              fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: 14,
              lineHeight: 1.7, margin: 0, marginBottom: 32,
            }}>Day spa, dia da noiva, pacotes para eventos. Conte-nos sobre seu momento.</p>
            <a href="https://wa.me/5542998144294" target="_blank" rel="noreferrer" style={{
              fontFamily: "'Jost', sans-serif", fontSize: 11, letterSpacing: "0.25em",
              textTransform: "uppercase", color: "#1a0f0a", textDecoration: "none",
              borderBottom: "1px solid #1a0f0a", paddingBottom: 4, alignSelf: "flex-start",
            }}>Conversar →</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function TeamB() {
  return (
    <section id="sec3" style={{
      background: "#F4EDE4", color: "#1a0f0a", padding: "180px 56px",
    }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <div data-reveal-b style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "end", marginBottom: 80 }}>
          <div>
            <div style={{
              fontFamily: "'Jost', sans-serif", fontSize: 11, letterSpacing: "0.5em",
              textTransform: "uppercase", color: "#B8895A", marginBottom: 32, fontWeight: 300,
            }}>— Equipe</div>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif", fontWeight: 300,
              fontSize: "clamp(48px, 7vw, 96px)", lineHeight: 0.95, letterSpacing: "-0.03em", margin: 0,
            }}>
              Profissionais<br/>
              <em style={{ color: "#B8895A" }}>apaixonadas.</em>
            </h2>
          </div>
          <p style={{
            fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: 17, lineHeight: 1.8,
            color: "#3a2a20", margin: 0, maxWidth: 480, justifySelf: "end",
          }}>
            Cada uma especialista em sua arte, todas movidas pelo mesmo propósito: revelar a beleza única que existe em você.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32 }}>
          {TEAM_B.map((p, i) => (
            <div key={p.name} data-reveal-b style={{ position: "relative" }}>
              <div style={{
                aspectRatio: "3/4",
                background: i % 2 === 0
                  ? `repeating-linear-gradient(45deg, #e8dcc8 0 2px, #f0e6d4 2px 14px)`
                  : `repeating-linear-gradient(135deg, #ddd0bb 0 2px, #e6dac4 2px 14px)`,
                position: "relative", overflow: "hidden",
                marginBottom: 24,
              }}>
                <div style={{
                  position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: "rgba(26,15,10,0.35)",
                  letterSpacing: "0.2em",
                }}>RETRATO PROFISSIONAL</div>
                <div style={{
                  position: "absolute", top: 16, left: 16,
                  fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: 14, color: "#B8895A",
                }}>nº 0{i+1}</div>
              </div>
              <div style={{
                fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 28,
                lineHeight: 1.1, marginBottom: 6,
              }}>{p.name}</div>
              <div style={{
                fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic",
                fontSize: 16, color: "#B8895A",
              }}>{p.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryB() {
  const items = Array.from({ length: 8 }, (_, i) => i);
  return (
    <section id="sec4" style={{
      background: "#1a0f0a", color: "#F4EDE4", padding: "180px 56px",
    }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <div data-reveal-b style={{ textAlign: "center", marginBottom: 80 }}>
          <div style={{
            fontFamily: "'Jost', sans-serif", fontSize: 11, letterSpacing: "0.5em",
            textTransform: "uppercase", color: "#D4A574", marginBottom: 32, fontWeight: 300,
          }}>— @pinabeautyconcept</div>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif", fontWeight: 300,
            fontSize: "clamp(48px, 7vw, 96px)", lineHeight: 0.95, letterSpacing: "-0.03em", margin: 0,
          }}>
            Diário<br/><em style={{ color: "#D4A574" }}>visual</em>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
          {items.map((i) => {
            const tall = i === 1 || i === 5;
            const wide = i === 3;
            return (
              <div key={i} data-reveal-b style={{
                aspectRatio: tall ? "3/4" : (wide ? "2/1" : "1"),
                gridColumn: wide ? "span 2" : "span 1",
                gridRow: tall ? "span 1" : "span 1",
                background: i % 3 === 0
                  ? `linear-gradient(135deg, #2a1a10 0%, #14090a 100%)`
                  : i % 3 === 1
                  ? `repeating-linear-gradient(45deg, #2a1a10 0 2px, #1a0f0a 2px 14px)`
                  : `repeating-linear-gradient(135deg, #241510 0 2px, #14090a 2px 14px)`,
                position: "relative", overflow: "hidden", cursor: "pointer",
                transition: "all 500ms",
              }}
              onMouseEnter={(e) => { e.currentTarget.querySelector(".ovB").style.opacity = 1; }}
              onMouseLeave={(e) => { e.currentTarget.querySelector(".ovB").style.opacity = 0; }}
              >
                <div style={{
                  position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: "rgba(244,237,228,0.25)",
                  letterSpacing: "0.2em",
                }}>FEED · {String(i+1).padStart(2,'0')}</div>
                <div className="ovB" style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(135deg, rgba(212,165,116,0.92) 0%, rgba(184,137,90,0.92) 100%)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  opacity: 0, transition: "opacity 500ms", color: "#1a0f0a",
                  fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: 22,
                }}>@pinabeautyconcept</div>
              </div>
            );
          })}
        </div>

        <div data-reveal-b style={{ textAlign: "center", marginTop: 64 }}>
          <a href="https://www.instagram.com/pinabeautyconcept/" target="_blank" rel="noreferrer" style={{
            fontFamily: "'Jost', sans-serif", fontSize: 12, letterSpacing: "0.3em",
            textTransform: "uppercase", color: "#D4A574", textDecoration: "none",
            border: "1px solid #D4A574", padding: "18px 40px", borderRadius: 999,
            display: "inline-block",
          }}>Seguir no Instagram</a>
        </div>
      </div>
    </section>
  );
}

function VisitB() {
  return (
    <section id="sec5" style={{
      background: "#F4EDE4", color: "#1a0f0a", padding: "180px 56px", position: "relative",
    }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
        <div data-reveal-b>
          <div style={{
            fontFamily: "'Jost', sans-serif", fontSize: 11, letterSpacing: "0.5em",
            textTransform: "uppercase", color: "#B8895A", marginBottom: 32, fontWeight: 300,
          }}>— Visite-nos</div>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif", fontWeight: 300,
            fontSize: "clamp(56px, 7vw, 104px)", lineHeight: 0.95, letterSpacing: "-0.03em",
            margin: 0, marginBottom: 48,
          }}>
            Reserve um<br/>
            <em style={{ color: "#B8895A" }}>momento</em><br/>
            só seu.
          </h2>

          <div style={{ display: "grid", gap: 32, marginBottom: 48 }}>
            <div>
              <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: "#B8895A", marginBottom: 8, fontWeight: 300 }}>Endereço</div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 26, fontWeight: 300, lineHeight: 1.4 }}>
                Rua Raul Pompeia, 31<br/>
                <span style={{ fontStyle: "italic", color: "#B8895A" }}>Jardim Carvalho</span> · Ponta Grossa, PR
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
              <div>
                <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: "#B8895A", marginBottom: 8, fontWeight: 300 }}>Telefone</div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 300, lineHeight: 1.4 }}>
                  (42) 3323-4294<br/>(42) 99814-4294
                </div>
              </div>
              <div>
                <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: "#B8895A", marginBottom: 8, fontWeight: 300 }}>Funcionamento</div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 300, lineHeight: 1.4 }}>
                  Ter — Sex · <span style={{ fontStyle: "italic", color: "#B8895A" }}>10h–18h</span><br/>
                  Sábado · <span style={{ fontStyle: "italic", color: "#B8895A" }}>9h–18h</span>
                </div>
              </div>
            </div>
          </div>

          <a href="https://wa.me/5542998144294" target="_blank" rel="noreferrer" style={{
            display: "inline-flex", alignItems: "center", gap: 16,
            background: "#1a0f0a", color: "#F4EDE4", padding: "22px 44px", borderRadius: 999,
            fontFamily: "'Jost', sans-serif", fontSize: 12, letterSpacing: "0.22em",
            textTransform: "uppercase", textDecoration: "none", fontWeight: 400,
            transition: "all 400ms",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "#B8895A"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "#1a0f0a"; }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413"/></svg>
            Falar no WhatsApp
          </a>
        </div>

        <div data-reveal-b style={{ position: "relative" }}>
          <div style={{
            aspectRatio: "4/5",
            background: `linear-gradient(135deg, #e8dcc8 0%, #d4c4a8 100%)`,
            position: "relative", overflow: "hidden",
          }}>
            <div style={{
              position: "absolute", inset: 0,
              background: `repeating-linear-gradient(45deg, transparent 0 24px, rgba(184,137,90,0.08) 24px 25px)`,
            }} />
            <div style={{
              position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "rgba(26,15,10,0.35)",
              letterSpacing: "0.2em",
            }}>FACHADA · ATELIER</div>
            <div style={{
              position: "absolute", bottom: 24, left: 24, right: 24,
              fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 300,
              fontSize: 28, lineHeight: 1.3, color: "#1a0f0a",
            }}>"Um espaço pensado<br/>para o seu cuidado."</div>
          </div>
          {/* corner decoration */}
          <div style={{ position: "absolute", top: -16, right: -16, width: 80, height: 80, border: "1px solid #B8895A", pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: -16, left: -16, width: 80, height: 80, border: "1px solid #B8895A", pointerEvents: "none" }} />
        </div>
      </div>
    </section>
  );
}

function FooterB() {
  return (
    <footer style={{ background: "#14090a", color: "#F4EDE4", padding: "100px 56px 40px" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <div style={{
          textAlign: "center", paddingBottom: 80, borderBottom: "1px solid rgba(184,137,90,0.2)",
        }}>
          <div style={{
            fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 300,
            fontSize: "clamp(40px, 5vw, 64px)", lineHeight: 1.2, color: "#D4A574",
            marginBottom: 32, maxWidth: 800, margin: "0 auto 32px",
          }}>
            "Transformar mulheres em divas é, antes de tudo, uma forma de cuidado."
          </div>
          <PinaLogoB color="#F4EDE4" size={0.6} />
        </div>

        <div style={{
          paddingTop: 40, display: "flex", flexWrap: "wrap", gap: 24,
          justifyContent: "space-between", alignItems: "center",
          fontFamily: "'Jost', sans-serif", fontSize: 11, letterSpacing: "0.2em",
          textTransform: "uppercase", opacity: 0.6, fontWeight: 300,
        }}>
          <div>© 2026 · Pina Beauty Concept</div>
          <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
            <a href="https://www.instagram.com/pinabeautyconcept/" target="_blank" rel="noreferrer" style={{ color: "#D4A574", textDecoration: "none" }}>Instagram</a>
            <a href="https://www.facebook.com/pinabeautconcep/" target="_blank" rel="noreferrer" style={{ color: "#D4A574", textDecoration: "none" }}>Facebook</a>
            <a href="https://wa.me/5542998144294" target="_blank" rel="noreferrer" style={{ color: "#D4A574", textDecoration: "none" }}>WhatsApp</a>
          </div>
          <div>Ponta Grossa · PR</div>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsappB() {
  return (
    <a href="https://wa.me/5542998144294" target="_blank" rel="noreferrer" style={{
      position: "fixed", bottom: 28, right: 28, zIndex: 40,
      padding: "16px 24px", borderRadius: 999,
      background: "#1a0f0a", color: "#F4EDE4",
      fontFamily: "'Jost', sans-serif", fontSize: 11, letterSpacing: "0.2em",
      textTransform: "uppercase", textDecoration: "none", fontWeight: 400,
      display: "flex", alignItems: "center", gap: 10,
      boxShadow: "0 16px 40px rgba(26,15,10,0.4)",
      border: "1px solid #B8895A",
      transition: "all 400ms",
    }}
    onMouseEnter={(e) => { e.currentTarget.style.background = "#B8895A"; e.currentTarget.style.color = "#1a0f0a"; }}
    onMouseLeave={(e) => { e.currentTarget.style.background = "#1a0f0a"; e.currentTarget.style.color = "#F4EDE4"; }}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413"/></svg>
      Reservar
    </a>
  );
}

function SiteB() {
  useRevealB();
  return (
    <div style={{ background: "#1a0f0a", overflowX: "hidden" }}>
      <NavB />
      <HeroB />
      <PhilosophyB />
      <AtelierB />
      <TeamB />
      <GalleryB />
      <VisitB />
      <FooterB />
      <FloatingWhatsappB />
    </div>
  );
}

window.SiteB = SiteB;
