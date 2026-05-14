import { useState } from "react";

      const assets = {
        logo: "https://streamlinecarports.kiwi/wp-content/uploads/2024/01/009_Streamline_black_full_png.svg",
        hero: "https://streamlinecarports.kiwi/wp-content/uploads/2024/01/double-carport.png",
        single: "https://streamlinecarports.kiwi/wp-content/uploads/2024/01/carports_sc5436cs-blk.jpg",
        double: "https://streamlinecarports.kiwi/wp-content/uploads/2024/01/carports_dc6060cs-blk.jpg",
        purlindek: "https://streamlinecarports.kiwi/wp-content/uploads/2024/01/PurlinDek-Profile-Render-1.png",
      };

      const singleSizes = [
        "4850 x 3000",
        "4850 x 3600",
        "5450 x 3000",
        "5450 x 3600",
        "6050 x 3000",
        "6050 x 3600",
        "7250 x 3000",
        "7250 x 3600",
      ];

      const doubleSizes = ["6050 x 6000", "7250 x 6000"];

      const colours = [
        ["Black", "#050505"],
        ["Grey Friars", "#4e5559"],
        ["Ironsand", "#4d473f"],
        ["Titania", "#e3ded0"],
        ["Zinc", "#b8bdba"],
      ];

      const projectGallery = [
        {
          title: "Wall-Mounted Black Double Carport Extension",
          meta: "Double Carport",
          image: "https://streamlinecarports.kiwi/wp-content/uploads/2024/05/20240417_153642-1024x635.jpg",
          href: "https://streamlinecarports.kiwi/projects/wall-mounted-black-double-carport-extension/",
        },
        {
          title: "Sleek Black Single-Bay Carport",
          meta: "Single Carport",
          image: "https://streamlinecarports.kiwi/wp-content/uploads/2024/01/Gallery-Images_0056-1024x683.jpg",
          href: "https://streamlinecarports.kiwi/projects/sleek-black-single-bay-carport-wall-mounted/",
        },
        {
          title: "Architectural Ironsand Double Carport",
          meta: "Double Carport",
          image: "https://streamlinecarports.kiwi/wp-content/uploads/2024/01/Gallery-Images_0048-1-1024x683.jpg",
          href: "https://streamlinecarports.kiwi/projects/architectural-ironsand-double-carport-on-base-plates/",
        },
        {
          title: "High-Clearance Motorhome Carport",
          meta: "Custom Project",
          image: "https://streamlinecarports.kiwi/wp-content/uploads/2024/02/20231124_121846-1024x683.jpg",
          href: "https://streamlinecarports.kiwi/projects/high-clearance-motorhome-carport-with-clearlight-roof/",
        },
      ];

      const applications = [
        ["Vehicles", "Protect cars, utes, trailers, boats, caravans, RVs and agricultural equipment from harsh weather."],
        ["Outdoor living", "Turn a plain outdoor area into a sheltered entertaining zone, BBQ space or garden shade structure."],
        ["Home extensions", "Create a covered verandah beside a home or bach while keeping the roofline clean and open."],
        ["Commercial spaces", "Use modular shelter for walkways, schools, rest homes, public spaces and reseller-led projects."],
      ];

      const options = [
        ["Dimensions", "Choose standard single or double carport dimensions, then request custom length, width or height where the site calls for it."],
        ["Height", "Standard clear height is 2.1m from concrete to roof. Longer posts can be ordered for extra clearance."],
        ["Posts", "100 x 100 square fluted roll formed steel posts create a strong, modern look. Post positions can be moved to suit access and layout."],
        ["Foundations", "Posts can be set in ground, or fixed to an existing driveway using top surface galvanised base plates where the concrete meets requirements."],
        ["Light", "Clearlite panels can be added for daylight, solar charging or brighter outdoor living areas."],
        ["Colour", "Roofing and trim can be mixed across Black, Grey Friars, Ironsand, Titania and Zinc to suit the home, bach or commercial site."],
      ];

      const materialFeatures = [
        ["01", "PurlinDek roofing uses a 75mm rib profile that can span up to 6m without extra support or bracing."],
        ["02", "Fewer purlins and fixings can mean a cleaner underside and a faster, simpler installation workflow."],
        ["03", "The roof profile is designed for strong water carrying capacity in heavy rain and tested NZ conditions."],
        ["04", "Pre-painted steel coatings, roll formed components and a 25-year durability statement support long-term performance."],
      ];

      const audienceCopy = {
        buyers: {
          title: "For homeowners and normal buyers",
          body: "Use the page to compare single and double kitset options, understand likely carport dimensions, and get clear guidance before requesting a quote or contacting a reseller.",
          bullets: ["Straightforward size and material comparison", "Clear notes on height, colours, clearlites and consent basics", "Direct path to build your carport or find a local reseller"],
          cta: "Build your carport",
        },
        resellers: {
          title: "For resellers and trade partners",
          body: "Give trade customers a faster way to qualify projects by size, consent pathway, engineered kitset requirements and delivery options before moving into a wholesale quote.",
          bullets: ["Standard SKUs plus custom quote prompts", "PurlinDek talking points for premium positioning", "NZ-wide freight via Mainfreight depot collection and project support cues"],
          cta: "Become a reseller",
        },
      };

      const faqs = [
        {
          question: "What carport dimensions are available?",
          answer:
            "Streamline single carport sizes currently include 4850 x 3000, 4850 x 3600, 5450 x 3000, 5450 x 3600, 6050 x 3000, 6050 x 3600, 7250 x 3000 and 7250 x 3600. Double carport sizes currently include 6050 x 6000 and 7250 x 6000. Custom length, width and height options can be quoted through Streamline or a local distributor.",
        },
        {
          question: "What carport size can I build without consent in NZ?",
          answer:
            "In New Zealand, a ground-level carport up to 20m2 generally does not need a building consent. A carport over 20m2 and up to 40m2 may also be exempt when the design is carried out or reviewed by a Chartered Professional Engineer, or the design/construction is carried out or supervised by a Licensed Building Practitioner. At least one side must remain open, and local council checks are still needed for district plan, boundary, stormwater and site-specific requirements.",
        },
        {
          question: "Do Streamline carport kitsets include engineering?",
          answer:
            "Yes. Streamline carports are fully engineered and supplied with an up-to-date PS1. That gives buyers, builders and resellers a clearer path when confirming wind, weather and consent requirements for a specific site.",
        },
        {
          question: "Should I choose a single or double carport?",
          answer:
            "Choose a single carport for one vehicle, a ute, boat, trailer, compact outdoor living area or a narrow driveway. Choose a double carport when you need two vehicle bays, a wider clear span, more covered storage, or a shelter that can serve both parking and outdoor living.",
        },
        {
          question: "What makes PurlinDek different from standard carport roofing materials?",
          answer:
            "PurlinDek is an engineered steel roofing profile with a 75mm rib that can span up to 6m without extra supports. Compared with many standard steel profiles, that can reduce purlins, fixings, beams and brackets, giving a cleaner underside and a more efficient install.",
        },
        {
          question: "Can I change the roof colour, trim colour or post layout?",
          answer:
            "Yes. Streamline carports can be customised by size, height, colour, trim colour and post placement. Current colour options include Black, Grey Friars, Ironsand, Titania and Zinc, with options to match the roof and trim or create contrast.",
        },
        {
          question: "Can clearlite panels be added?",
          answer:
            "Yes. Clearlite panels can be added to let natural light into the covered area or support solar charging. One clearlite can make a noticeable difference, and panels can be planned into the layout during quoting.",
        },
        {
          question: "Can a Streamline carport be fixed to an existing driveway?",
          answer:
            "Yes, in many cases. Streamline can use top surface galvanised base plates for existing concrete, but the slab needs to meet the required specifications so the carport remains strong and compliant for the site.",
        },
        {
          question: "How are kitset carports delivered?",
          answer:
            "Streamline carports are supplied in kitset packs and can be freighted NZ-wide. Options include factory collection in Palmerston North or delivery to your nearest Mainfreight depot for convenient local pick-up.",
        },
        {
          question: "Can resellers quote custom carport projects?",
          answer:
            "Yes. Resellers can use the standard size range for faster quoting, then request custom sizes or project-specific details where a customer needs a different width, length, post position, clearance height or finish.",
        },
      ];

      function Header() {
        return (
          <header className="site-header">
            <div className="header-inner">
              <a className="brand" href="https://streamlinecarports.kiwi/carports/" aria-label="Streamline Carports">
                <img src={assets.logo} alt="Streamline Carports logo" />
              </a>
              <nav className="nav" aria-label="Primary navigation">
                <a href="#types">Carports</a>
                <a href="#materials">PurlinDek</a>
                <a href="#design">Design Options</a>
                <a href="#faq">FAQs</a>
                <a href="#paths">Find a Reseller</a>
              </nav>
              <a className="btn small" href="#types">Build your carport</a>
              <button className="mobile-menu" aria-label="Open navigation">
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </header>
        );
      }

      function StickyBanner() {
        return (
          <aside className="sticky-cta" aria-label="Carport action shortcuts">
            <div className="sticky-cta-inner">
              <div>
                <span className="sticky-cta-title">Ready to choose your Streamline carport?</span>
                <span className="sticky-cta-text">Compare carport types or start a reseller conversation.</span>
              </div>
              <div className="button-row">
                <a className="btn fill" href="#types">Build your carport</a>
                <a className="btn" href="https://streamlinecarports.kiwi/become-a-reseller/">Become a reseller</a>
              </div>
            </div>
          </aside>
        );
      }

      function Hero() {
        return (
          <>
            <section className="hero">
              <div className="hero-grid">
                <div className="hero-copy">
                  <p className="eyebrow">Customise your carport solution</p>
                  <h2 className="hero-display">Strong, clean shelter — built to your site.</h2>
                  <h1 className="hero-seo">Carports for Sale NZ: Single & Double Kitsets</h1>
                  <p className="lead">
                    Select a single or double footprint, then tailor the carport dimensions, height, colour, trim and light options for your home, bach, business or reseller project.
                  </p>
                  <div className="button-row">
                    <a className="btn fill" href="#types">Compare carport types</a>
                    <a className="btn" href="#faq">Read carport FAQs</a>
                  </div>
                </div>
                <div className="hero-proof">
                  <strong>2.1m</strong>
                  <span>standard clear height, with extra height available where required.</span>
                </div>
              </div>
            </section>
            <div className="proof-grid">
              <div className="proof-item">
                <strong>NZ-made steel</strong>
                <span>Roll formed components from Palmerston North.</span>
              </div>
              <div className="proof-item">
                <strong>Up to 6m span</strong>
                <span>PurlinDek roofing supports a clean, open underside.</span>
              </div>
              <div className="proof-item">
                <strong>Kitset delivery</strong>
                <span>Freighted NZ-wide with Mainfreight depot collection available.</span>
              </div>
            </div>
          </>
        );
      }

      function Intro() {
        return (
          <section className="section" id="overview">
            <div className="wrap split">
              <div className="wide-copy">
                <p className="eyebrow">Create a custom carport kitset</p>
                <h2>One modular structure, plenty of practical uses.</h2>
                <p className="lead">
                  Streamline carports are built to protect vehicles, boats, caravans, equipment and outdoor areas while keeping the structure simple, strong and uncluttered.
                </p>
                <ul className="line-list">
                  <li>Choose a single or double carport footprint, then refine size and colour options.</li>
                  <li>Use clearlites to bring in natural light or help charge solar panels.</li>
                  <li>Keep the finish clean with PurlinDek roofing, integrated fascia/gutter and minimal framing.</li>
                  <li>Use the same modular system for homes, baches, schools, walkways, rest homes and public spaces.</li>
                </ul>
              </div>
              <div className="project-gallery" aria-label="Streamline project gallery">
                {projectGallery.map((project, index) => (
                  <a className={`project-shot ${index === 0 ? "featured" : ""}`} href={project.href} key={project.title}>
                    <img src={project.image} alt={project.title} />
                    <span>
                      <strong>{project.title}</strong>
                      <em>{project.meta}</em>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </section>
        );
      }

      function Types() {
        return (
          <section className="section stone" id="types">
            <div className="wrap">
              <div className="section-head">
                <div>
                  <p className="eyebrow">Single & double carport types</p>
                  <h2>Start with the right footprint.</h2>
                </div>
                <p>
                  Standard carport kitsets suit common NZ driveways and shelter needs, while custom sizes can be quoted for tighter sites, extra clearance or trade projects.
                </p>
              </div>
              <div className="type-grid">
                <a className="type-card" href="https://streamlinecarports.kiwi/product/carport-single/">
                  <figure>
                    <img src={assets.single} alt="Black single Streamline carport protecting one vehicle" />
                  </figure>
                  <div className="type-body">
                    <h3>Single carports</h3>
                    <p>
                      A compact flat-roof carport for one car, ute, boat, trailer, bikes, BBQ cover or a narrow outdoor shelter. Standard height is 2.1m, with longer posts available.
                    </p>
                    <div className="size-pills" aria-label="Single carport sizes">
                      {singleSizes.map((size) => (
                        <span key={size}>{size}</span>
                      ))}
                    </div>
                  </div>
                </a>
                <a className="type-card" href="https://streamlinecarports.kiwi/product/carport-double/">
                  <figure>
                    <img src={assets.double} alt="Black double Streamline carport protecting two vehicles" />
                  </figure>
                  <div className="type-body">
                    <h3>Double carports</h3>
                    <p>
                      A wider clear-span option for two vehicles, caravans, RVs, commercial assets or a combined parking and outdoor living zone with a clean modern roofline.
                    </p>
                    <div className="size-pills" aria-label="Double carport sizes">
                      {doubleSizes.map((size) => (
                        <span key={size}>{size}</span>
                      ))}
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </section>
        );
      }

      function Materials() {
        return (
          <section className="section" id="materials">
            <div className="wrap materials-grid">
              <div>
                <p className="eyebrow">Carport materials</p>
                <h2>PurlinDek roofing keeps the structure open and clean.</h2>
                <p className="lead">
                  Streamline carports use strong, sustainable steel and PurlinDek roofing rather than a busy frame of beams and brackets. The result is a durable NZ-made kitset with modern lines and a practical install process.
                </p>
                <div className="image-panel">
                  <img src={assets.purlindek} alt="PurlinDek steel roofing profile render" />
                  <p className="caption">PurlinDek 600 profile with high rib strength and long-span capacity.</p>
                </div>
              </div>
              <div className="feature-stack">
                {materialFeatures.map(([number, text]) => (
                  <div className="feature" key={number}>
                    <span className="number">{number}</span>
                    <p>{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      }

      function DesignOptions() {
        const [audience, setAudience] = useState("buyers");
        const selected = audienceCopy[audience];

        return (
          <section className="section mist" id="design">
            <div className="wrap design-layout">
              <aside>
                <p className="eyebrow">Design options</p>
                <h2>Built around the site, not just the SKU.</h2>
                <p className="lead">{selected.body}</p>
                <div className="audience-toggle" aria-label="Audience view">
                  <button className={audience === "buyers" ? "active" : ""} onClick={() => setAudience("buyers")}>Buyers</button>
                  <button className={audience === "resellers" ? "active" : ""} onClick={() => setAudience("resellers")}>Resellers</button>
                </div>
                <h3>{selected.title}</h3>
                <ul className="line-list">
                  {selected.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <div className="swatches" aria-label="Colour options">
                  {colours.map(([name, value]) => (
                    <span className="swatch" key={name}>
                      <i style={{ background: value }}></i>
                      {name}
                    </span>
                  ))}
                </div>
                <div className="button-row">
                  <a className="btn fill" href={audience === "buyers" ? "#types" : "https://streamlinecarports.kiwi/become-a-reseller/"}>{selected.cta}</a>
                </div>
              </aside>
              <div>
                <div className="option-board">
                  {options.map(([label, copy]) => (
                    <div className="option-row" key={label}>
                      <strong>{label}</strong>
                      <p>{copy}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
      }

      function Applications() {
        return (
          <section className="section dark">
            <div className="wrap">
              <div className="section-head">
                <div>
                  <p className="eyebrow">Modular structures</p>
                  <h2>More than a driveway cover.</h2>
                </div>
                <p>
                  Explore practical uses across residential driveways, lifestyle blocks, outdoor living areas, schools, walkways and commercial sites.
                </p>
              </div>
              <div className="applications">
                {applications.map(([title, copy]) => (
                  <article className="application" key={title}>
                    <strong>{title}</strong>
                    <p>{copy}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        );
      }

      function Paths() {
        return (
          <section className="section stone" id="paths">
            <div className="wrap path-grid">
              <article className="path">
                <p className="eyebrow">Homeowners & buyers</p>
                <h3>Ready to plan a carport?</h3>
                <p>
                  Compare single and double carport dimensions, check design options, then move into the build path or speak with a local reseller.
                </p>
                <ul>
                  <li>Protect cars, boats, caravans and outdoor areas.</li>
                  <li>Confirm site clearance, colour, clearlites and delivery.</li>
                  <li>Ask about PS1 and local council requirements early.</li>
                </ul>
                <div className="button-row">
                  <a className="btn fill" href="#types">Build your carport</a>
                  <a className="btn" href="https://streamlinecarports.kiwi/contact-us#reseller">Find a reseller</a>
                </div>
              </article>
              <article className="path">
                <p className="eyebrow">Resellers & trade</p>
                <h3>Support customers with clearer kitset details.</h3>
                <p>
                  Help customers compare the system, qualify consent questions and understand the PurlinDek advantage before moving into a custom quote.
                </p>
                <ul>
                  <li>Standard kitset sizes with custom design support.</li>
                  <li>Cleaner install story: fewer purlins, fewer fixings, less visual clutter.</li>
                  <li>NZ-wide freight via factory collection or Mainfreight depot delivery.</li>
                </ul>
                <div className="button-row">
                  <a className="btn fill" href="https://streamlinecarports.kiwi/become-a-reseller/">Become a reseller</a>
                  <a className="btn" href="https://streamlinecarports.kiwi/contact-us/">Request trade info</a>
                </div>
              </article>
            </div>
          </section>
        );
      }

      function FAQ() {
        const [open, setOpen] = useState(0);

        return (
          <section className="section" id="faq">
            <div className="wrap faq-layout">
              <div>
                <p className="eyebrow">Carport questions</p>
                <h2>Carport FAQs for buyers and resellers.</h2>
                <p className="lead">
                  Clear answers for homeowners, builders and resellers comparing kitset sizes, materials, design flexibility and consent basics in New Zealand.
                </p>
              </div>
              <div className="faq-list">
                {faqs.map((faq, index) => (
                  <div className="faq-item" key={faq.question}>
                    <button className="faq-question" onClick={() => setOpen(open === index ? -1 : index)} aria-expanded={open === index}>
                      <span>{faq.question}</span>
                      <span className="faq-icon">{open === index ? "-" : "+"}</span>
                    </button>
                    {open === index && <div className="faq-answer">{faq.answer}</div>}
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      }

      function Newsletter() {
        return (
          <section className="section tight dark">
            <div className="wrap newsletter">
              <div>
                <h2>Don't miss out.</h2>
                <p>Sign up for newsletter to stay in the loop.</p>
              </div>
              <form className="signup">
                <input type="email" placeholder="Email Address" aria-label="Email Address" />
                <button type="button">subscribe</button>
              </form>
            </div>
          </section>
        );
      }

      function Footer() {
        return (
          <footer className="footer">
            <div className="wrap footer-grid">
              <div className="footer-links">
                <a href="https://streamlinecarports.kiwi/bbq-shelter/">BBQ Shelter</a>
                <a href="https://streamlinecarports.kiwi/carports/">Carports</a>
                <a href="https://streamlinecarports.kiwi/the-streamline-difference/">Why Choose Streamline</a>
                <a href="https://streamlinecarports.kiwi/projects/">Projects</a>
                <a href="https://streamlinecarports.kiwi/faqs/">FAQs</a>
                <a href="https://streamlinecarports.kiwi/about/">About Streamline</a>
                <a href="https://streamlinecarports.kiwi/sustainability/">Sustainability</a>
                <a href="https://streamlinecarports.kiwi/about/warranty/">Warranty</a>
              </div>
              <div className="footer-cta">
                <span>0800 227 767</span>
                <a href="#types">Build your carport</a>
                <a href="https://streamlinecarports.kiwi/contact-us#reseller">Find a reseller</a>
              </div>
            </div>
          </footer>
        );
      }

      function App() {
        return (
          <div className="page">
            <Header />
            <main>
              <Hero />
              <Intro />
              <Types />
              <Materials />
              <DesignOptions />
              <Applications />
              <Paths />
              <FAQ />
              <Newsletter />
            </main>
            <Footer />
            <StickyBanner />
          </div>
        );
      }

export default App;
