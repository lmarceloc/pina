/* global React, ReactDOM */
const { useState, useEffect, useRef } = React;

// ─────────────────────────────────────────────────────────────
// VARIAÇÃO A — EDITORIAL MINIMALISTA
// Preto / off-white / hairline gold
// ─────────────────────────────────────────────────────────────

const SERVICES_A = [
  { n: "01", name: "Cortes Femininos", desc: "Cortes autorais que valorizam o formato do rosto e o estilo de vida.", time: "60 min" },
  { n: "02", name: "Maquiagem", desc: "Make social, noivas e madrinhas — pele perfeita, olhar marcante.", time: "75 min" },
  { n: "03", name: "Sobrancelhas", desc: "Design personalizado por visagismo, micropigmentação e henna.", time: "45 min" },
  { n: "04", name: "Unhas", desc: "Manicure clássica, francesinha, alongamento em fibra e gel.", time: "60 min" },
  { n: "05", name: "Cílios", desc: "Extensão fio a fio, volume russo e lifting de cílios.", time: "90 min" },
];

const TEAM_A = [
  { name: "Carolina Pina", role: "Diretora Criativa & Hair Stylist" },
  { name: "Marina Costa", role: "Especialista em Maquiagem" },
  { name: "Letícia Alves", role: "Designer de Sobrancelhas" },
  { name: "Bruna Ramos", role: "Nail Designer" },
];

const useReveal = () => {
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.setAttribute("data-revealed", "true");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
};

function PinaLogoA({ color = "#FAF8F4", size = 1 }) {
  return (
    <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", lineHeight: 1, color }}>
      <div style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontWeight: 300,
        letterSpacing: `${0.18 * size}em`,
        fontSize: `${44 * size}px`,
        paddingLeft: `${0.18 * size}em`,
      }}>PINA</div>
      <div style={{
        fontFamily: "'Inter', sans-serif",
        fontWeight: 300,
        letterSpacing: `${0.4 * size}em`,
        fontSize: `${8 * size}px`,
        marginTop: `${6 * size}px`,
        paddingLeft: `${0.4 * size}em`,
        opacity: 0.85,
      }}>BEAUTY CONCEPT</div>
    </div>
  );
}

function NavA({ onMenu }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      padding: scrolled ? "16px 48px" : "28px 48px",
      transition: "all 400ms cubic-bezier(.2,.8,.2,1)",
      background: scrolled ? "rgba(10,10,10,0.85)" : "transparent",
      backdropFilter: scrolled ? "blur(18px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(212,175,113,0.15)" : "1px solid transparent",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      color: "#FAF8F4",
    }}>
      <PinaLogoA size={0.55} />
      <ul style={{ display: "flex", gap: 36, listStyle: "none", margin: 0, padding: 0,
        fontFamily: "'Inter', sans-serif", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 400 }}>
        {["Sobre", "Serviços", "Equipe", "Galeria", "Contato"].map((l) => (
          <li key={l}><a href={`#${l.toLowerCase()}`} style={{ color: "inherit", textDecoration: "none", opacity: 0.8 }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
            onMouseLeave={(e) => e.currentTarget.style.opacity = 0.8}>{l}</a></li>
        ))}
      </ul>
      <a href="https://wa.me/5542998144294" target="_blank" rel="noreferrer" style={{
        fontFamily: "'Inter', sans-serif", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase",
        color: "#FAF8F4", textDecoration: "none", border: "1px solid #D4AF71", padding: "10px 20px",
        transition: "all 300ms",
      }}
      onMouseEnter={(e) => { e.currentTarget.style.background = "#D4AF71"; e.currentTarget.style.color = "#0A0A0A"; }}
      onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#FAF8F4"; }}
      >Agendar</a>
    </nav>
  );
}

function HeroA() {
  return (
    <section style={{
      minHeight: "100vh", position: "relative",
      background: "linear-gradient(180deg, #0A0A0A 0%, #161310 100%)",
      color: "#FAF8F4", overflow: "hidden",
      display: "grid", gridTemplateColumns: "1.1fr 0.9fr", alignItems: "center",
    }}>
      {/* Left: text */}
      <div style={{ padding: "0 80px", position: "relative", zIndex: 2 }}>
        <div data-reveal style={{
          fontFamily: "'Inter', sans-serif", fontSize: 11, letterSpacing: "0.4em",
          textTransform: "uppercase", color: "#D4AF71", marginBottom: 32,
        }}>
          <span style={{ display: "inline-block", width: 40, height: 1, background: "#D4AF71",
            verticalAlign: "middle", marginRight: 16 }} />
          Salão de Beleza · Ponta Grossa
        </div>
        <h1 data-reveal style={{
          fontFamily: "'Cormorant Garamond', serif", fontWeight: 300,
          fontSize: "clamp(56px, 7vw, 104px)", lineHeight: 0.98, letterSpacing: "-0.02em",
          margin: 0, marginBottom: 40,
        }}>
          A arte de<br/>
          <em style={{ fontStyle: "italic", fontWeight: 300, color: "#D4AF71" }}>transformar</em><br/>
          mulheres<br/>em divas.
        </h1>
        <p data-reveal style={{
          fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: 16, lineHeight: 1.7,
          maxWidth: 440, opacity: 0.75, margin: 0, marginBottom: 48,
        }}>
          Há mais de uma década embelezando e gerando valor à imagem de cada pessoa que passa pelo Pina. Um conceito completo de beleza, em um só lugar.
        </p>
        <div data-reveal style={{ display: "flex", gap: 16 }}>
          <a href="https://wa.me/5542998144294" target="_blank" rel="noreferrer" style={{
            background: "#D4AF71", color: "#0A0A0A", padding: "18px 36px",
            fontFamily: "'Inter', sans-serif", fontSize: 11, letterSpacing: "0.22em",
            textTransform: "uppercase", textDecoration: "none", fontWeight: 500,
          }}>Agendar pelo WhatsApp</a>
          <a href="#servicos" style={{
            border: "1px solid rgba(250,248,244,0.25)", color: "#FAF8F4", padding: "18px 36px",
            fontFamily: "'Inter', sans-serif", fontSize: 11, letterSpacing: "0.22em",
            textTransform: "uppercase", textDecoration: "none", fontWeight: 400,
          }}>Ver serviços</a>
        </div>
      </div>

      {/* Right: image placeholder + logo */}
      <div style={{ position: "relative", height: "100vh" }}>
        <div style={{
          position: "absolute", inset: "10% 10% 10% 0",
          background: `repeating-linear-gradient(45deg, #1a1614 0 2px, #14110f 2px 12px)`,
          border: "1px solid rgba(212,175,113,0.2)",
        }}>
          <div style={{
            position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "rgba(250,248,244,0.35)",
            letterSpacing: "0.2em",
          }}>EDITORIAL · RETRATO DE CLIENTE</div>
        </div>
        {/* gold corner accent */}
        <div style={{ position: "absolute", top: "10%", right: "10%", width: 80, height: 1, background: "#D4AF71" }} />
        <div style={{ position: "absolute", top: "10%", right: "10%", width: 1, height: 80, background: "#D4AF71" }} />
        <div style={{ position: "absolute", bottom: "10%", left: 0, width: 80, height: 1, background: "#D4AF71" }} />
        <div style={{ position: "absolute", bottom: "10%", left: 0, width: 1, height: 80, background: "#D4AF71" }} />
      </div>

      {/* scroll indicator */}
      <div style={{
        position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)",
        fontFamily: "'Inter', sans-serif", fontSize: 9, letterSpacing: "0.4em",
        textTransform: "uppercase", color: "rgba(250,248,244,0.5)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 12,
      }}>
        Role para descobrir
        <div style={{ width: 1, height: 40, background: "linear-gradient(180deg, #D4AF71, transparent)" }} />
      </div>
    </section>
  );
}

function AboutA() {
  return (
    <section id="sobre" style={{
      background: "#FAF8F4", color: "#0A0A0A", padding: "160px 80px",
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "0.4fr 0.6fr", gap: 96 }}>
        <div data-reveal>
          <div style={{
            fontFamily: "'Inter', sans-serif", fontSize: 11, letterSpacing: "0.4em",
            textTransform: "uppercase", color: "#8B6F3F", marginBottom: 24,
          }}>— O Conceito</div>
          <div style={{
            fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 300,
            fontSize: 28, lineHeight: 1.4, color: "#1a1a1a",
          }}>
            "Beleza como linguagem. Cada cliente, uma assinatura."
          </div>
        </div>
        <div data-reveal>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 56,
            lineHeight: 1.1, letterSpacing: "-0.02em", margin: 0, marginBottom: 32,
          }}>
            Um salão concebido<br/>para a mulher que<br/>sabe o que quer.
          </h2>
          <p style={{
            fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: 16,
            lineHeight: 1.8, color: "#3a3a3a", margin: 0, marginBottom: 24,
          }}>
            O Pina Beauty Concept nasceu da convicção de que beleza é mais do que estética — é confiança, presença, atitude. Aqui, cada serviço é pensado para revelar o melhor de quem você já é.
          </p>
          <p style={{
            fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: 16,
            lineHeight: 1.8, color: "#3a3a3a", margin: 0, marginBottom: 48,
          }}>
            Em Ponta Grossa, somos referência em transformações que respeitam a individualidade. Mais de 2.600 mulheres já passaram pelas nossas mãos.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32, paddingTop: 32, borderTop: "1px solid rgba(10,10,10,0.1)" }}>
            {[
              { n: "10+", l: "Anos de história" },
              { n: "2.6k", l: "Clientes atendidas" },
              { n: "8", l: "Especialidades" },
            ].map((s) => (
              <div key={s.l}>
                <div style={{
                  fontFamily: "'Cormorant Garamond', serif", fontWeight: 300,
                  fontSize: 48, lineHeight: 1, color: "#0A0A0A",
                }}>{s.n}</div>
                <div style={{
                  fontFamily: "'Inter', sans-serif", fontSize: 10, letterSpacing: "0.25em",
                  textTransform: "uppercase", color: "#8B6F3F", marginTop: 8,
                }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesA() {
  const [hovered, setHovered] = useState(null);
  return (
    <section id="serviços" style={{
      background: "#0A0A0A", color: "#FAF8F4", padding: "160px 80px",
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div data-reveal style={{ display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "end", marginBottom: 80, gap: 48 }}>
          <div>
            <div style={{
              fontFamily: "'Inter', sans-serif", fontSize: 11, letterSpacing: "0.4em",
              textTransform: "uppercase", color: "#D4AF71", marginBottom: 24,
            }}>— Especialidades</div>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 72,
              lineHeight: 1, letterSpacing: "-0.02em", margin: 0,
            }}>Nossos serviços</h2>
          </div>
          <p style={{
            fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: 16,
            lineHeight: 1.8, opacity: 0.7, margin: 0, maxWidth: 480, justifySelf: "end",
          }}>
            Um portfólio completo de cuidados, executado por profissionais especializadas em cada detalhe da sua transformação.
          </p>
        </div>

        <div>
          {SERVICES_A.map((s, i) => (
            <div
              key={s.name}
              data-reveal
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                display: "grid", gridTemplateColumns: "60px 1fr 2fr 120px 60px",
                gap: 32, alignItems: "center",
                padding: "40px 0", borderTop: "1px solid rgba(250,248,244,0.1)",
                borderBottom: i === SERVICES_A.length - 1 ? "1px solid rgba(250,248,244,0.1)" : "none",
                cursor: "pointer", transition: "all 400ms",
                paddingLeft: hovered === i ? 16 : 0,
                background: hovered === i ? "rgba(212,175,113,0.04)" : "transparent",
              }}
            >
              <div style={{
                fontFamily: "'Inter', sans-serif", fontSize: 11, letterSpacing: "0.2em",
                color: hovered === i ? "#D4AF71" : "rgba(250,248,244,0.4)",
                transition: "color 300ms",
              }}>{s.n}</div>
              <div style={{
                fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 36,
                fontStyle: hovered === i ? "italic" : "normal", transition: "all 300ms",
                color: hovered === i ? "#D4AF71" : "#FAF8F4",
              }}>{s.name}</div>
              <div style={{
                fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: 14,
                lineHeight: 1.6, opacity: 0.65,
              }}>{s.desc}</div>
              <div style={{
                fontFamily: "'Inter', sans-serif", fontSize: 11, letterSpacing: "0.2em",
                textTransform: "uppercase", opacity: 0.5,
              }}>{s.time}</div>
              <div style={{
                fontFamily: "'Cormorant Garamond', serif", fontSize: 28, color: "#D4AF71",
                transform: hovered === i ? "translateX(8px)" : "translateX(0)",
                transition: "transform 400ms cubic-bezier(.2,.8,.2,1)",
              }}>→</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamA() {
  return (
    <section id="equipe" style={{
      background: "#FAF8F4", color: "#0A0A0A", padding: "160px 80px",
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div data-reveal style={{ marginBottom: 80, textAlign: "center" }}>
          <div style={{
            fontFamily: "'Inter', sans-serif", fontSize: 11, letterSpacing: "0.4em",
            textTransform: "uppercase", color: "#8B6F3F", marginBottom: 24,
          }}>— A Equipe</div>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 72,
            lineHeight: 1, letterSpacing: "-0.02em", margin: 0,
          }}>
            Mãos que <em style={{ color: "#8B6F3F" }}>esculpem</em> beleza.
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
          {TEAM_A.map((p) => (
            <div key={p.name} data-reveal>
              <div style={{
                aspectRatio: "3/4",
                background: `repeating-linear-gradient(135deg, #ece4d6 0 2px, #f5efe3 2px 14px)`,
                border: "1px solid rgba(10,10,10,0.06)",
                marginBottom: 20, position: "relative",
              }}>
                <div style={{
                  position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: "rgba(10,10,10,0.3)",
                  letterSpacing: "0.2em",
                }}>RETRATO B&W</div>
              </div>
              <div style={{
                fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 22,
                marginBottom: 4,
              }}>{p.name}</div>
              <div style={{
                fontFamily: "'Inter', sans-serif", fontSize: 11, letterSpacing: "0.18em",
                textTransform: "uppercase", color: "#8B6F3F",
              }}>{p.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryA() {
  const items = Array.from({ length: 6 }, (_, i) => i);
  return (
    <section id="galeria" style={{
      background: "#0A0A0A", color: "#FAF8F4", padding: "160px 80px",
    }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <div data-reveal style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: 64, flexWrap: "wrap", gap: 24 }}>
          <div>
            <div style={{
              fontFamily: "'Inter', sans-serif", fontSize: 11, letterSpacing: "0.4em",
              textTransform: "uppercase", color: "#D4AF71", marginBottom: 24,
            }}>— @pinabeautyconcept</div>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 64,
              lineHeight: 1, letterSpacing: "-0.02em", margin: 0,
            }}>Inspirações<br/>recentes</h2>
          </div>
          <a href="https://www.instagram.com/pinabeautyconcept/" target="_blank" rel="noreferrer" style={{
            fontFamily: "'Inter', sans-serif", fontSize: 11, letterSpacing: "0.22em",
            textTransform: "uppercase", color: "#D4AF71", textDecoration: "none",
            borderBottom: "1px solid #D4AF71", paddingBottom: 4,
          }}>Seguir no Instagram →</a>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 4 }}>
          {items.map((i) => (
            <div key={i} data-reveal style={{
              aspectRatio: "1",
              background: i % 2 === 0
                ? `repeating-linear-gradient(45deg, #1a1614 0 2px, #14110f 2px 14px)`
                : `repeating-linear-gradient(135deg, #1c1916 0 2px, #161310 2px 14px)`,
              position: "relative",
              cursor: "pointer", overflow: "hidden",
            }}
            onMouseEnter={(e) => { e.currentTarget.querySelector(".overlay").style.opacity = 1; }}
            onMouseLeave={(e) => { e.currentTarget.querySelector(".overlay").style.opacity = 0; }}
            >
              <div style={{
                position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: "rgba(250,248,244,0.25)",
                letterSpacing: "0.2em",
              }}>POST {String(i+1).padStart(2,'0')}</div>
              <div className="overlay" style={{
                position: "absolute", inset: 0, background: "rgba(212,175,113,0.85)",
                display: "flex", alignItems: "center", justifyContent: "center",
                opacity: 0, transition: "opacity 400ms", color: "#0A0A0A",
                fontFamily: "'Cormorant Garamond', serif", fontSize: 24, fontStyle: "italic",
              }}>Ver no Instagram</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactA() {
  return (
    <section id="contato" style={{
      background: "#FAF8F4", color: "#0A0A0A", padding: "160px 80px",
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 96 }}>
        <div data-reveal>
          <div style={{
            fontFamily: "'Inter', sans-serif", fontSize: 11, letterSpacing: "0.4em",
            textTransform: "uppercase", color: "#8B6F3F", marginBottom: 24,
          }}>— Reserve seu momento</div>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 72,
            lineHeight: 1, letterSpacing: "-0.02em", margin: 0, marginBottom: 32,
          }}>
            Vamos<br/><em style={{ color: "#8B6F3F" }}>conversar</em>?
          </h2>
          <p style={{
            fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: 16,
            lineHeight: 1.8, opacity: 0.7, margin: 0, marginBottom: 48, maxWidth: 420,
          }}>
            Atendimento personalizado pelo WhatsApp. Conte o que tem em mente e vamos desenhar o serviço ideal para você.
          </p>
          <a href="https://wa.me/5542998144294" target="_blank" rel="noreferrer" style={{
            display: "inline-flex", alignItems: "center", gap: 16,
            background: "#0A0A0A", color: "#FAF8F4", padding: "22px 40px",
            fontFamily: "'Inter', sans-serif", fontSize: 12, letterSpacing: "0.22em",
            textTransform: "uppercase", textDecoration: "none", fontWeight: 500,
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413"/></svg>
            Falar no WhatsApp
          </a>

          <div style={{ marginTop: 80, paddingTop: 48, borderTop: "1px solid rgba(10,10,10,0.1)", display: "grid", gap: 32 }}>
            <div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: "#8B6F3F", marginBottom: 8 }}>Endereço</div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 300, lineHeight: 1.4 }}>Rua Raul Pompeia, 31<br/>Jardim Carvalho · Ponta Grossa · PR</div>
            </div>
            <div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: "#8B6F3F", marginBottom: 8 }}>Telefones</div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 300, lineHeight: 1.4 }}>(42) 3323-4294<br/>(42) 99814-4294</div>
            </div>
            <div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: "#8B6F3F", marginBottom: 8 }}>Horários</div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 300, lineHeight: 1.4 }}>Terça a sexta · 10h às 18h<br/>Sábado · 9h às 18h<br/><span style={{ opacity: 0.5 }}>Domingo e segunda · fechado</span></div>
            </div>
          </div>
        </div>

        <div data-reveal style={{ position: "relative" }}>
          <div style={{
            aspectRatio: "3/4",
            background: `repeating-linear-gradient(135deg, #ece4d6 0 2px, #f5efe3 2px 14px)`,
            border: "1px solid rgba(10,10,10,0.06)",
            position: "relative",
          }}>
            <div style={{
              position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "rgba(10,10,10,0.3)",
              letterSpacing: "0.2em",
            }}>FACHADA / INTERIOR</div>
          </div>
          <div style={{
            position: "absolute", bottom: -32, left: -32, right: 64,
            background: "#0A0A0A", color: "#FAF8F4", padding: 32,
          }}>
            <div style={{
              fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic",
              fontSize: 22, fontWeight: 300, lineHeight: 1.5,
            }}>
              "Cada cliente sai do Pina sentindo-se a melhor versão de si mesma."
            </div>
            <div style={{
              fontFamily: "'Inter', sans-serif", fontSize: 10, letterSpacing: "0.3em",
              textTransform: "uppercase", color: "#D4AF71", marginTop: 16,
            }}>— Filosofia da casa</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FooterA() {
  return (
    <footer style={{ background: "#0A0A0A", color: "#FAF8F4", padding: "80px 80px 40px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr 1fr", gap: 48, marginBottom: 64, alignItems: "start" }}>
          <PinaLogoA size={0.7} />
          <div style={{
            fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 24, fontStyle: "italic",
            lineHeight: 1.5, opacity: 0.7,
          }}>
            "A arte de embelezar e gerar valor à imagem de cada pessoa, transformando mulheres em divas."
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, fontFamily: "'Inter', sans-serif", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase" }}>
            <a href="https://www.instagram.com/pinabeautyconcept/" target="_blank" rel="noreferrer" style={{ color: "#D4AF71", textDecoration: "none" }}>Instagram</a>
            <a href="https://www.facebook.com/pinabeautconcep/" target="_blank" rel="noreferrer" style={{ color: "#D4AF71", textDecoration: "none" }}>Facebook</a>
            <a href="https://wa.me/5542998144294" target="_blank" rel="noreferrer" style={{ color: "#D4AF71", textDecoration: "none" }}>WhatsApp</a>
          </div>
        </div>
        <div style={{
          paddingTop: 32, borderTop: "1px solid rgba(250,248,244,0.1)",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          fontFamily: "'Inter', sans-serif", fontSize: 10, letterSpacing: "0.2em",
          textTransform: "uppercase", opacity: 0.5,
        }}>
          <div>© 2026 Pina Beauty Concept · Todos os direitos reservados</div>
          <div>Ponta Grossa · PR · Brasil</div>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsappA() {
  return (
    <a href="https://wa.me/5542998144294" target="_blank" rel="noreferrer" style={{
      position: "fixed", bottom: 24, right: 24, zIndex: 40,
      width: 56, height: 56, borderRadius: "50%",
      background: "#D4AF71", color: "#0A0A0A",
      display: "flex", alignItems: "center", justifyContent: "center",
      boxShadow: "0 12px 32px rgba(0,0,0,0.4)", textDecoration: "none",
      transition: "transform 300ms",
    }}
    onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.08)"}
    onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413"/></svg>
    </a>
  );
}

function SiteA() {
  useReveal();
  return (
    <div style={{ background: "#0A0A0A", overflowX: "hidden" }}>
      <NavA />
      <HeroA />
      <AboutA />
      <ServicesA />
      <TeamA />
      <GalleryA />
      <ContactA />
      <FooterA />
      <FloatingWhatsappA />
    </div>
  );
}

window.SiteA = SiteA;
