const services = [
  {
    title: "Signature Gel",
    description: "艶・フォルム・ケアを丁寧に仕上げるスタンダードコース。爪への負担を抑えたフィルイン対応。",
    price: "¥7,500",
    duration: "75分",
    badge: "定番"
  },
  {
    title: "Nuance Art",
    description: "くすみカラーやシアーを重ね、指先の雰囲気を変えるニュアンスデザイン。アート2本付き。",
    price: "¥9,200",
    duration: "90分",
    badge: "人気"
  },
  {
    title: "Gloss Treatment",
    description: "自爪ケアと艶コートで、ジェルを休みたい方に。甘皮周りも整え美しい質感に。",
    price: "¥6,200",
    duration: "60分",
    badge: "ケア"
  },
  {
    title: "Bridal Styling",
    description: "ドレスやリングに合わせた特別なデザイン提案。アート相談込みのカウンセリング付き。",
    price: "¥12,800",
    duration: "110分",
    badge: "特別"
  }
];

const highlights = [
  { icon: "◎", title: "持ちの良さ", detail: "フィルインとフォルム重視で、艶が続く仕上がり。" },
  { icon: "✦", title: "肌映えカラー", detail: "数十色のニュアンスから似合う色をセレクト。" },
  { icon: "☾", title: "プライベート空間", detail: "1席のみの静かなサロンでリラックス。" }
];

const gallery = [
  { title: "Champagne Glow", note: "微ラメ×フォグピンク" },
  { title: "Sheer Rose", note: "赤みベージュで指先美人" },
  { title: "Petal Smoke", note: "シアーグレージュの奥行き" },
  { title: "Golden Hour", note: "オレンジベースの透明感" },
  { title: "Milky Quartz", note: "ミルキーホワイトの艶" },
  { title: "Sepia Marble", note: "マーブルで柔らかなニュアンス" }
];

export default function Home() {
  return (
    <main>
      <div className="shell">
        <div className="topbar">
          <div className="brand">
            <span className="brand-dot" aria-hidden />
            Lustre Nail Atelier
          </div>
          <nav>
            <a className="nav-link" href="#services">
              Menu
            </a>
            <a className="nav-link" href="#gallery">
              Works
            </a>
            <a className="nav-link" href="#reserve">
              ご予約
            </a>
          </nav>
        </div>

        <section className="hero">
          <div>
            <span className="badge-small">New open / 恵比寿徒歩5分</span>
            <p className="eyebrow">Private nail salon</p>
            <h1>
              艶と質感で、
              <br />
              指先から気分を上げるサロン
            </h1>
            <p className="lede">
              肌映えするニュアンスカラー、フォルムにこだわった艶仕上げ。1席だけの静かな空間で、じっくり丁寧にケアを行います。
            </p>
            <div className="tagline">
              <span role="img" aria-label="sparkle">
                ✨
              </span>
              しっとりとした艶と、やわらかな光をまとうデザイン。
            </div>
            <div className="cta-row">
              <a className="button primary" href="tel:+818012345678">
                今すぐ予約する
              </a>
              <a className="button ghost" href="mailto:hello@lustre-nail.jp">
                デザイン相談する
              </a>
            </div>
            <div className="meta-row">
              <div className="meta-card">
                <span className="meta-label">Open</span>
                <span className="meta-value">11:00 - 20:30 (不定休)</span>
              </div>
              <div className="meta-card">
                <span className="meta-label">Location</span>
                <span className="meta-value">恵比寿西 1-xx-xx / 完全予約制</span>
              </div>
              <div className="meta-card">
                <span className="meta-label">Note</span>
                <span className="meta-value">フィルイン / パラジェル取扱い</span>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="panel-header" style={{ marginBottom: 8 }}>
              <div className="section-title">
                <span className="dot" />
                <strong>本日のおすすめカラー</strong>
              </div>
              <span className="pill">soft glow</span>
            </div>
            <div className="gallery-grid" style={{ marginTop: 0 }}>
              {gallery.slice(0, 4).map((item) => (
                <div className="gallery-cell" key={item.title}>
                  <div className="gallery-label">
                    <div className="gallery-title">{item.title}</div>
                    <div className="gallery-note">{item.note}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="highlight" style={{ marginTop: 16 }}>
              {highlights.map((item) => (
                <div className="item" key={item.title}>
                  <div className="icon">{item.icon}</div>
                  <div>
                    <div className="meta-value">{item.title}</div>
                    <p style={{ marginBottom: 0 }}>{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="panel" id="services">
          <div className="panel-header">
            <h2 className="section-title">
              <span className="dot" /> Menu
            </h2>
            <p>艶・質感・ケアを重視した、手元がきれいに見えるメニュー。</p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <div className="card" key={service.title}>
                <div className="panel-header" style={{ marginBottom: 8 }}>
                  <h3 style={{ margin: 0 }}>{service.title}</h3>
                  <span className="pill">{service.badge}</span>
                </div>
                <p>{service.description}</p>
                <div className="meta-row" style={{ gap: 8, marginTop: 10 }}>
                  <div className="meta-card" style={{ padding: "8px 10px" }}>
                    <span className="meta-label">Price</span>
                    <span className="price">{service.price}</span>
                  </div>
                  <div className="meta-card" style={{ padding: "8px 10px" }}>
                    <span className="meta-label">Time</span>
                    <span className="meta-value">{service.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="panel" id="gallery">
          <div className="panel-header">
            <h2 className="section-title">
              <span className="dot" /> Works
            </h2>
            <p>光の角度で表情が変わる、柔らかなニュアンスデザイン。</p>
          </div>
          <div className="gallery-grid">
            {gallery.map((item) => (
              <div className="gallery-cell" key={item.title}>
                <div className="gallery-label">
                  <div className="gallery-title">{item.title}</div>
                  <div className="gallery-note">{item.note}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="panel" id="reserve">
          <div className="panel-header">
            <h2 className="section-title">
              <span className="dot" /> Reservation
            </h2>
            <p>空き状況のご案内やデザイン相談もお気軽に。</p>
          </div>
          <div className="booking">
            <div className="form-card">
              <div className="panel-header" style={{ marginBottom: 10 }}>
                <div className="section-title">
                  <span className="dot" />
                  <strong>仮予約フォーム</strong>
                </div>
                <span className="pill">UI only</span>
              </div>
              <p className="small-text" style={{ marginBottom: 12 }}>
                送信ボタンはダミーです。入力の雰囲気を先に確認できます。
              </p>
              <form className="form-grid">
                <label className="field">
                  お名前
                  <input type="text" name="name" placeholder="例）山田 花子" />
                </label>
                <label className="field">
                  ご連絡先
                  <input type="text" name="contact" placeholder="電話番号またはメールアドレス" />
                  <span className="field-note">LINEをご希望の場合はIDやQR共有の旨をご記入ください</span>
                </label>
                <div className="field-row">
                  <label className="field">
                    希望日
                    <input type="date" name="date" />
                  </label>
                  <label className="field">
                    希望時間
                    <input type="time" name="time" />
                  </label>
                </div>
                <label className="field">
                  メニュー
                  <select name="menu" defaultValue="">
                    <option value="" disabled>
                      選択してください
                    </option>
                    {services.map((service) => (
                      <option key={service.title} value={service.title}>
                        {service.title}（{service.price}）
                      </option>
                    ))}
                  </select>
                </label>
                <label className="field">
                  デザインのご要望
                  <textarea
                    name="note"
                    rows={3}
                    placeholder="持ち込みデザインのテーマやカラー、オフの有無などをご記入ください"
                  />
                </label>
                <button type="submit" className="button primary full">
                  仮予約を送る
                </button>
              </form>
            </div>
            <div className="info-card">
              <h3 style={{ marginBottom: 8 }}>落ち着いたプライベート空間でお迎えします</h3>
              <p>
                フォーム送信後、24時間以内に折り返しご連絡します。お急ぎの方はお電話・LINEがスムーズです。
              </p>
              <div className="cta-row" style={{ marginTop: 12 }}>
                <a className="button ghost" href="tel:+818012345678">
                  電話で予約する
                </a>
                <a className="button ghost" href="https://line.me/ti/p/" target="_blank" rel="noreferrer">
                  LINEで問い合わせ
                </a>
              </div>
              <div className="meta-row" style={{ marginTop: 16 }}>
                <div className="meta-card">
                  <span className="meta-label">Address</span>
                  <span className="meta-value">恵比寿西 1-xx-xx / 完全予約制</span>
                </div>
                <div className="meta-card">
                  <span className="meta-label">Payment</span>
                  <span className="meta-value">現金・クレジット / 10分前のご来店を推奨</span>
                </div>
              </div>
              <p className="small-text" style={{ marginTop: 10 }}>
                キャンセル・時間変更は前日までにご連絡ください。遅刻の場合はメニュー変更のご相談をさせていただきます。
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
