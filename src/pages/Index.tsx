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
          <a href="https://triolla.io" target="_blank" rel="noopener noreferrer" className="flex items-center" aria-label="Triolla">
            <svg xmlns="http://www.w3.org/2000/svg" width="92" height="30" viewBox="0 0 92 30" fill="none" className="h-7 w-auto">
              <path d="M10.7113 24.6835C11.1147 24.6835 11.4509 24.67 11.7198 24.6431C11.9888 24.5894 12.2577 24.5356 12.5267 24.4818V29C12.177 29.0538 11.8812 29.0941 11.6391 29.121C11.424 29.1748 11.0609 29.2017 10.5499 29.2017C8.99007 29.2017 7.59157 28.9328 6.35444 28.3949C5.1173 27.857 4.05498 27.1309 3.16747 26.2164C2.30686 25.2752 1.6345 24.1859 1.15041 22.9488C0.693205 21.6848 0.464604 20.3401 0.464604 18.9147V3.98839H5.30556V9.51515H11.5585V14.0334H5.30556V18.9147C5.30556 20.609 5.73587 21.9941 6.59648 23.0698C7.48399 24.1456 8.8556 24.6835 10.7113 24.6835ZM18.5422 29H13.7013V18.955C13.7013 17.5296 13.9299 16.1849 14.3871 14.9209C14.8443 13.6569 15.5166 12.5676 16.4041 11.6532C17.2917 10.7119 18.3809 9.97235 19.6718 9.43446C20.9627 8.89658 22.4419 8.62764 24.1093 8.62764C24.4052 8.62764 24.701 8.65453 24.9968 8.70832C25.2927 8.73521 25.5885 8.77556 25.8844 8.82935V13.5089C25.6154 13.4551 25.3599 13.4148 25.1179 13.3879C24.8758 13.3341 24.6203 13.3072 24.3514 13.3072C23.2487 13.3072 22.3209 13.4551 21.5678 13.751C20.8417 14.0468 20.25 14.4502 19.7928 14.9612C19.3356 15.4453 19.0129 16.037 18.8246 16.7362C18.6364 17.4086 18.5422 18.1347 18.5422 18.9147V29ZM31.5744 29H26.7334V8.82935H31.5744V29ZM26.0476 3.42361C26.0476 2.563 26.3166 1.83685 26.8544 1.24518C27.4192 0.653506 28.1857 0.357669 29.1539 0.357669C30.1221 0.357669 30.8751 0.666953 31.413 1.28552C31.9509 1.87719 32.2198 2.58989 32.2198 3.42361C32.2198 4.28422 31.9509 5.02381 31.413 5.64238C30.8751 6.23405 30.1221 6.52989 29.1539 6.52989C28.1857 6.52989 27.4192 6.23405 26.8544 5.64238C26.3166 5.02381 26.0476 4.28422 26.0476 3.42361ZM38.0788 18.9147C38.0788 19.7215 38.1729 20.4745 38.3612 21.1738C38.5763 21.873 38.8991 22.4916 39.3294 23.0295C39.7866 23.5405 40.3513 23.9439 41.0237 24.2397C41.7229 24.5356 42.5567 24.6835 43.5249 24.6835C44.493 24.6835 45.3133 24.5356 45.9857 24.2397C46.6849 23.9439 47.2497 23.5405 47.68 23.0295C48.1372 22.4916 48.4599 21.873 48.6482 21.1738C48.8634 20.4745 48.9709 19.7215 48.9709 18.9147C48.9709 18.1078 48.8634 17.3548 48.6482 16.6556C48.4599 15.9563 48.1372 15.3512 47.68 14.8402C47.2497 14.3023 46.6849 13.8855 45.9857 13.5896C45.3133 13.2938 44.493 13.1459 43.5249 13.1459C42.5567 13.1459 41.7229 13.2938 41.0237 13.5896C40.3513 13.8855 39.7866 14.3023 39.3294 14.8402C38.8991 15.3512 38.5763 15.9563 38.3612 16.6556C38.1729 17.3548 38.0788 18.1078 38.0788 18.9147ZM33.2378 18.9147C33.2378 17.4893 33.4664 16.158 33.9236 14.9209C34.3808 13.6569 35.0532 12.5676 35.9407 11.6532C36.8282 10.7119 37.904 9.97235 39.168 9.43446C40.4589 8.89658 41.9112 8.62764 43.5249 8.62764C45.1385 8.62764 46.5773 8.89658 47.8414 9.43446C49.1323 9.97235 50.2215 10.7119 51.109 11.6532C51.9965 12.5676 52.6689 13.6569 53.1261 14.9209C53.5833 16.158 53.8119 17.4893 53.8119 18.9147C53.8119 20.3401 53.5833 21.6848 53.1261 22.9488C52.6689 24.1859 51.9965 25.2752 51.109 26.2164C50.2215 27.1309 49.1323 27.857 47.8414 28.3949C46.5773 28.9328 45.1385 29.2017 43.5249 29.2017C41.9112 29.2017 40.4589 28.9328 39.168 28.3949C37.904 27.857 36.8282 27.1309 35.9407 26.2164C35.0532 25.2752 34.3808 24.1859 33.9236 22.9488C33.4664 21.6848 33.2378 20.3401 33.2378 18.9147ZM60.3176 29H55.4766V0.761082H60.3176V29ZM67.9919 29H63.1509V0.761082H67.9919V29ZM69.6553 18.8743C69.6553 17.4758 69.8839 16.158 70.3411 14.9209C70.7983 13.6569 71.4707 12.5676 72.3582 11.6532C73.2457 10.7119 74.3349 9.97235 75.6258 9.43446C76.9167 8.89658 78.3825 8.62764 80.023 8.62764C81.556 8.62764 82.941 8.86969 84.1782 9.35378C85.4153 9.83788 86.4642 10.5237 87.3248 11.4112C88.2123 12.2987 88.8981 13.3879 89.3822 14.6788C89.8932 15.9429 90.1756 17.3548 90.2294 18.9147C90.2563 19.4257 90.2697 20.0577 90.2697 20.8107C90.2697 21.5369 90.3101 22.3437 90.3907 23.2312C90.4714 24.1187 90.6193 25.06 90.8345 26.0551C91.0496 27.0233 91.3858 28.0049 91.843 29H87.0021C86.5449 28.0049 86.2087 26.9695 85.9935 25.8937C85.2943 26.9157 84.4068 27.7225 83.331 28.3142C82.2552 28.9059 80.9643 29.2017 79.4582 29.2017C78.0329 29.2017 76.715 28.9328 75.5048 28.3949C74.2946 27.857 73.2591 27.1309 72.3985 26.2164C71.5379 25.2752 70.8655 24.1859 70.3814 22.9488C69.8974 21.6848 69.6553 20.3266 69.6553 18.8743ZM80.023 13.1459C79.0279 13.1459 78.1808 13.2938 77.4815 13.5896C76.7823 13.8855 76.204 14.3023 75.7468 14.8402C75.3165 15.3512 74.9938 15.9563 74.7787 16.6556C74.5904 17.3548 74.4963 18.1078 74.4963 18.9147C74.4963 19.7215 74.5904 20.4745 74.7787 21.1738C74.9938 21.873 75.3165 22.4916 75.7468 23.0295C76.204 23.5405 76.7823 23.9439 77.4815 24.2397C78.1808 24.5356 79.0279 24.6835 80.023 24.6835C81.6905 24.6835 82.9948 24.2263 83.9361 23.3119C84.9043 22.3706 85.3884 20.9048 85.3884 18.9147C85.3077 17.1397 84.8505 15.7412 84.0168 14.7192C83.1831 13.6703 81.8518 13.1459 80.023 13.1459Z" fill="#0F0F0F"/>
            </svg>
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
          <div className="mt-12">
            <span className="text-sm text-muted-foreground">או חייגו אלינו</span>
            <a
              href="tel:+972737443322"
              dir="ltr"
              className="block mt-3 text-3xl md:text-4xl font-medium tracking-tighter-x hover:text-rainbow transition-colors"
            >
              +972-73-744-3322
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
      <div className="font-mono text-sm md:text-base text-foreground/70 mb-12 uppercase tracking-widest font-medium">{eyebrow}</div>
      {children}
    </div>
  </section>
);

export default Index;
