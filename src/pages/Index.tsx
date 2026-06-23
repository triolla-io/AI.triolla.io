import { ArrowLeft, Check, X } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground" dir="rtl">
      {/* NAV */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-xl">
        <div className="max-w-[1400px] mx-auto px-8 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5">
            <span className="w-7 h-7 rounded-full rainbow-bar" />
            <span className="font-semibold tracking-tight text-lg">AI Integration Manager</span>
          </a>
          <div className="hidden md:flex items-center gap-1">
            <a href="#service" className="pill-ghost">השירות</a>
            <a href="#process" className="pill-ghost">תהליך</a>
            <a href="#cases" className="pill-ghost">דוגמאות</a>
          </div>
          <a href="#contact" className="pill-dark">
            דברו איתנו
            <ArrowLeft className="w-3.5 h-3.5" />
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-48 pb-32 px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center justify-center gap-2 mb-10 animate-fade-up">
            <span className="w-5 h-5 rounded-full rainbow-bar" />
            <span className="text-base text-foreground/80">AI Integration <span className="font-semibold">Manager</span></span>
          </div>

          <h1 className="text-center text-[clamp(3rem,9vw,8.5rem)] leading-[0.95] tracking-tighter-x font-black animate-fade-up" style={{ animationDelay: "0.1s" }}>
            הטמעת <span className="text-rainbow font-black">AI אמיתית</span>
            <br />
            בארגון שלך.
          </h1>

          <p className="text-center text-xl md:text-2xl text-muted-foreground mt-10 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            לא ייעוץ. לא מצגות. ביצוע בפועל — תוך 60 יום.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-12 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <a href="https://calendly.com/triolla/pitangoux-introductory-meeting-clone" target="_blank" rel="noopener noreferrer" className="pill-dark h-12 px-7 text-[15px]">
              קבעו שיחת אבחון
              <ArrowLeft className="w-4 h-4" />
            </a>

          </div>

          {/* big stat row */}
          <div className="mt-32 grid grid-cols-3 gap-px bg-border max-w-4xl mx-auto rounded-3xl overflow-hidden border border-border">
            {[
              { v: "60", s: "ימים", d: "מ-0 לתוצאה" },
              { v: "2–3", s: "תהליכים", d: "חיים בארגון" },
              { v: "100%", s: "ביצוע", d: "לא דיבורים" },
            ].map((s) => (
              <div key={s.d} className="bg-background p-8 text-center">
                <div className="text-5xl md:text-6xl font-medium tracking-tighter-x">
                  {s.v}<span className="text-muted-foreground text-2xl mr-2 font-light">{s.s}</span>
                </div>
                <div className="text-sm text-muted-foreground mt-2">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE */}
      <Section id="service" eyebrow="01 — מה זה השירות">
        <h2 className="text-[clamp(2.25rem,5vw,5rem)] leading-[1] tracking-tighter-x font-medium max-w-5xl">
          מומחה AI נכנס לארגון שלך{" "}
          <span className="text-muted-foreground">בונה פתרונות שעובדים ביום-יום.</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mt-20 max-w-5xl">
          <p className="text-xl leading-relaxed text-foreground/80">
            מומחה AI מנוסה מצטרף לארגון שלך למספר שבועות, עובד עם הצוותים מבפנים,
            מזהה נקודות בזבוז ועומס, ובונה בפועל פתרונות מבוססי AI שמשתמשים בהם ביום-יום.
          </p>
          <p className="text-xl leading-relaxed text-foreground/80">
            המטרה אינה <span className="line-through text-muted-foreground">"לבדוק AI"</span>,
            אלא להכניס שימוש אמיתי שמייצר חיסכון בזמן ושיפור ביצועים.
          </p>
        </div>
      </Section>

      {/* WHO */}
      <Section eyebrow="02 — למי זה מתאים">
        <h2 className="text-[clamp(2.25rem,5vw,5rem)] leading-[1] tracking-tighter-x font-medium">
          בנוי לארגונים <span className="text-rainbow font-semibold">שרוצים לזוז.</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-px bg-border mt-20 rounded-3xl overflow-hidden border border-border">
          {[
            { n: "01", t: "עומס תפעולי", d: "ארגונים עם עבודה ידנית חוזרת ותהליכים תופחים." },
            { n: "02", t: "צוותים תקועים", d: "מי שלא מצליח לתרגם את 'הייפ ה-AI' לפעולה אמיתית." },
            { n: "03", t: "הנהלה ממוקדת", d: "מחפשים שיפור יעילות מדיד בזמן קצר." },
          ].map((c) => (
            <div key={c.n} className="bg-background p-10">
              <div className="font-mono text-xs text-muted-foreground mb-8">{c.n}</div>
              <h3 className="text-2xl font-medium tracking-tight mb-3">{c.t}</h3>
              <p className="text-muted-foreground leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* PROCESS */}
      <Section id="process" eyebrow="03 — איך זה עובד">
        <h2 className="text-[clamp(2.25rem,5vw,5rem)] leading-[1] tracking-tighter-x font-medium">
          ארבעה שלבים. <span className="text-muted-foreground">מהירים. מדידים.</span>
        </h2>
        <div className="mt-20 divide-y divide-border border-y border-border">
          {[
            { n: "01", t: "מיפוי ממוקד", time: "שבועיים", b: ["ניתוח תהליכים בפועל דרך עבודה עם הצוותים", "זיהוי 5–10 הזדמנויות לשיפור"] },
            { n: "02", t: "בחירה", time: "שבוע", b: ["דירוג לפי impact וקלות יישום", "בחירה של 2–3 מקרים בלבד לביצוע"] },
            { n: "03", t: "בנייה והטמעה", time: "4–8 שבועות", b: ["פיתוח פתרונות עובדים: אוטומציות, agents, workflows", "הטמעה אצל המשתמשים והטמעה בשגרה"] },
            { n: "04", t: "מדידה והחלטה", time: "checkpoint", b: ["מדידת תוצאות והחלטה על הרחבה או עצירה"] },
          ].map((s) => (
            <div key={s.n} className="grid md:grid-cols-12 gap-6 py-10 group">
              <div className="md:col-span-2 font-mono text-sm text-muted-foreground">{s.n}</div>
              <div className="md:col-span-4">
                <h3 className="text-3xl md:text-4xl font-medium tracking-tighter-x">{s.t}</h3>
                <div className="text-sm text-muted-foreground mt-2 font-mono">{s.time}</div>
              </div>
              <ul className="md:col-span-6 space-y-3">
                {s.b.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-lg text-foreground/80">
                    <Check className="w-5 h-5 mt-1.5 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* DELIVERABLES + NOT */}
      <Section eyebrow="04 — מה מקבלים, מה לא">
        <h2 className="text-[clamp(2.25rem,5vw,5rem)] leading-[1] tracking-tighter-x font-medium">
          תוצרים, <span className="text-muted-foreground">לא מצגות.</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mt-20">
          <div className="rounded-3xl border border-border p-10">
            <div className="flex items-center gap-2 mb-8">
              <Check className="w-5 h-5" />
              <span className="text-sm font-medium">מה כן מקבלים</span>
            </div>
            <ul className="space-y-5">
              {[
                "2–3 תהליכים שעובדים עם AI בתוך הארגון",
                "חיסכון מוכח בזמן עבודה",
                "שיפור בזרימה ובקבלת החלטות",
                "מתודולוגיה שניתן להרחיב פנימה",
              ].map((t) => (
                <li key={t} className="text-lg flex gap-3"><Check className="w-5 h-5 mt-1 shrink-0" />{t}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-secondary p-10">
            <div className="flex items-center gap-2 mb-8">
              <X className="w-5 h-5" />
              <span className="text-sm font-medium">מה זה לא</span>
            </div>
            <ul className="space-y-5">
              {[
                "לא ייעוץ תאורטי",
                "לא פרויקט פיתוח ארוך",
                "לא החלפה של צוותי engineering",
                "המיקוד: פתרונות מהירים שעובדים עכשיו",
              ].map((t) => (
                <li key={t} className="text-lg flex gap-3 text-muted-foreground"><X className="w-5 h-5 mt-1 shrink-0" />{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* USE CASES */}
      <Section id="cases" eyebrow="05 — דוגמאות לשימושים">
        <h2 className="text-[clamp(2.25rem,5vw,5rem)] leading-[1] tracking-tighter-x font-medium">
          איפה זה <span className="text-rainbow font-semibold">כבר עובד.</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border mt-20 rounded-3xl overflow-hidden border border-border">
          {[
            "סיכום ותגובה לטיקטים ופניות",
            "אוטומציה של עדכון והעשרת נתונים",
            "סיווג והעדפה של משימות",
            "סיכום דוחות ומסמכים",
            "חיבור בין מערכות ותהליכים",
            "agents פנימיים לצוותים",
          ].map((u, i) => (
            <div key={u} className="bg-background p-8 hover:bg-secondary transition-colors">
              <div className="font-mono text-xs text-muted-foreground mb-4">{String(i + 1).padStart(2, "0")}</div>
              <p className="text-xl tracking-tight">{u}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* WHY */}
      <Section eyebrow="06 — למה זה עובד">
        <h2 className="text-[clamp(2.5rem,6vw,6.5rem)] leading-[0.95] tracking-tighter-x font-medium max-w-6xl">
          לא מנסים <span className="text-muted-foreground line-through">"להבין AI"</span> ,{" "}
          <span className="text-rainbow font-semibold">מתחילים מהעבודה הקיימת.</span>
        </h2>
        <p className="text-2xl text-muted-foreground mt-12 max-w-3xl leading-relaxed">
          מטפלים בנקודות שבהן יש בזבוז זמן אמיתי. תוך שבועות יש תוצאה שניתן למדוד.
        </p>
      </Section>

      {/* FRAMEWORK */}
      <Section eyebrow="07 — מסגרת עבודה">
        <h2 className="text-[clamp(2.25rem,5vw,5rem)] leading-[1] tracking-tighter-x font-medium">
          איך עובדים יחד.
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border mt-20 rounded-3xl overflow-hidden border border-border">
          {[
            { t: "התקשרות מוגדרת", d: "קצרה, ברורה, scope מוסכם" },
            { t: "נוכחות בארגון", d: "עבודה מבפנים, עם הצוותים" },
            { t: "Checkpoints", d: "נקודות בקרה ברורות" },
            { t: "Use cases ממוקדים", d: "מספר מצומצם, עומק" },
          ].map((f, i) => (
            <div key={f.t} className="bg-background p-8">
              <div className="font-mono text-xs text-muted-foreground mb-4">0{i + 1}</div>
              <h3 className="text-xl font-medium tracking-tight mb-2">{f.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* WORK MODEL */}
      <Section eyebrow="08 — מודל עבודה">
        <h2 className="text-[clamp(2.25rem,5vw,5rem)] leading-[1] tracking-tighter-x font-medium">
          מומחה AI <span className="text-rainbow font-semibold">במשרדי הארגון.</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border mt-20 rounded-3xl overflow-hidden border border-border">
          {[
            { t: "חודשיים אינטנסיביים", d: "מומחה AI במשרה מלאה, יושב במשרדי החברה, עובד עם הצוותים מבפנים.", v: "2 חודשים" },
            { t: "עלות חודשית לחצי משרה", d: "29,500 ש\"ח בחודש לחצי משרה,  ללא הפתעות. מיקוד מלא בביצוע.", v: "₪29,500" },
            { t: "המשך בוואטסורסינג", d: "לאחר שני החודשים, אפשרות להמשך עבודה במודל וואטסורסינג לעוד 18 חודשים.", v: "18 חודשים" },
            { t: "סדנה אסטרטגית להנהלה", d: "סדנה ייעודית להנהלת החברה למיפוי צרכים וזיהוי הזדמנויות AI, לפני תחילת ההטמעה.", v: "₪7,500" },
          ].map((c, i) => (
            <div key={c.t} className="bg-background p-10 flex flex-col">
              <div className="font-mono text-xs text-muted-foreground mb-8">0{i + 1}</div>
              <div className="text-5xl md:text-6xl font-medium tracking-tighter-x mb-4">{c.v}</div>
              <h3 className="text-2xl font-medium tracking-tight mb-3">{c.t}</h3>
              <p className="text-muted-foreground leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section id="contact" className="px-8 py-40">
        <div className="max-w-[1400px] mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-10">
            <span className="w-5 h-5 rounded-full rainbow-bar" />
            <span className="text-sm text-muted-foreground font-mono">— שורה תחתונה —</span>
          </div>
          <h2 className="text-[clamp(3rem,8vw,8rem)] leading-[0.95] tracking-tighter-x font-medium">
            <span className="text-rainbow font-semibold">60 יום</span>
            <br />
            מדיבור על AI
            <br />
            <span className="text-muted-foreground">לערך אמיתי.</span>
          </h2>
          <p className="text-xl text-muted-foreground mt-10 max-w-xl mx-auto">
            שיחת היכרות של 30 דקות, ללא התחייבות.
          </p>
          <div className="flex items-center justify-center gap-3 mt-12">
            <a href="https://calendly.com/triolla/pitangoux-introductory-meeting-clone" target="_blank" rel="noopener noreferrer" className="pill-dark h-12 px-7 text-[15px]">
              קבעו שיחת אבחון
              <ArrowLeft className="w-4 h-4" />
            </a>
            <a href="#process" className="pill-light h-12 px-7 text-[15px]">
              איך זה עובד
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border px-8 py-10">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-full rainbow-bar" />
            <span>AI Integration Manager</span>
          </div>
          <div className="font-mono text-xs">© {new Date().getFullYear()} · Built for execution</div>
        </div>
      </footer>
    </div>
  );
};

const Section = ({ id, eyebrow, children }: { id?: string; eyebrow: string; children: React.ReactNode }) => (
  <section id={id} className="px-8 py-32 border-t border-border">
    <div className="max-w-[1400px] mx-auto">
      <div className="font-mono text-xs text-muted-foreground mb-12 uppercase tracking-widest">{eyebrow}</div>
      {children}
    </div>
  </section>
);

export default Index;
