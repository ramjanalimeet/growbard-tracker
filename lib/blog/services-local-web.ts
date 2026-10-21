import { FACT, SRC } from "@/lib/blog/sources";
import type { PostData } from "@/lib/posts";

const UPDATED = "2026-10-21";

export const LOCAL_WEB_POSTS: PostData[] = [
  {
    slug: "google-maps-marketing-service",
    keyword: "Google Maps marketing service",
    title: "Google Maps Marketing Service: Get More Calls from Maps",
    excerpt:
      "How a Google Maps marketing service gets your business into the top three map results, what it includes and what it costs in Bangladesh.",
    category: "Local SEO",
    icon: "pin",
    date: "2026-07-01",
    updated: UPDATED,
    body: [
      {
        p: "A Google Maps marketing service gets your business shown in the map results people see when they search for a product or service nearby. Those three businesses under the map, often called the Map Pack, receive a large share of the calls and direction requests, so moving into them can transform a local business.",
      },
      {
        p: `${FACT.googleShare} That makes Google Maps the main place where local customers in Bangladesh compare businesses before they call.`,
      },
      { h2: "How Google decides who shows on Maps" },
      {
        p: `Google says local results are based on three factors: [relevance, distance and prominence](${SRC.gbpRanking}). A Google Maps marketing service works on the two you can influence.`,
      },
      {
        table: {
          caption: "Google's local ranking factors and what we do about them",
          head: ["Factor", "What it means", "How we improve it"],
          rows: [
            ["Relevance", "How well your profile matches the search", "Categories, services, description, posts and website pages"],
            ["Distance", "How far you are from the searcher or searched area", "Accurate address or service areas, area pages on your website"],
            ["Prominence", "How well known and trusted you are", "Reviews, citations, links and an active, complete profile"],
          ],
        },
      },
      { h2: "What a Google Maps marketing service includes" },
      {
        ul: [
          "Full [Google Business Profile optimization](/blog/google-business-profile-optimization-service)",
          "A review process that brings in genuine reviews every month",
          "Weekly posts, offers and fresh photos",
          "Citations with consistent name, address and phone number",
          "Service and area pages on your website that support your profile",
          "Monthly reports on calls, direction requests and website clicks",
        ],
      },
      { h2: "What not to do" },
      {
        p: `Fake reviews, keyword-stuffed business names and fake addresses break [Google's Business Profile guidelines](${SRC.gbpGuidelines}) and can get your listing suspended. Real results come from a complete profile and genuine customer reviews.`,
      },
      { h2: "How long it takes" },
      {
        p: "Small fixes can help within weeks. Moving into the top three for competitive searches usually takes 2–6 months, depending on your category and area. See how this works for [businesses in Dhaka](/blog/rank-in-google-map-pack-dhaka).",
      },
      { h2: "A month of Google Maps marketing" },
      {
        ul: [
          `**Week 1:** review rankings across your service area and fix profile gaps`,
          `**Week 2:** publish posts and photos, send review requests to recent customers`,
          `**Week 3:** add or update citations and website area pages`,
          `**Week 4:** report calls, direction requests and ranking changes, then plan next month`,
        ],
      },
      { h2: "Which businesses benefit most" },
      { p: `Any business where customers search with local intent: clinics and [dental practices](/industries/dental-clinics), showrooms, restaurants, repair and installation services, [car detailing](/industries/car-detailing), [interior designers](/industries/interior-design) and consultancies. If people search "near me" for what you do, Google Maps is likely your best source of new customers.` },
      { p: `Businesses with several branches need a profile per location; see [multi-location SEO](/blog/multi-location-seo-bangladesh).` },
      { h2: "Google Maps marketing with Growbard" },
      {
        p: "Google Maps marketing is the core of our [Local SEO service](/services/local-seo), included in every plan from [Starter at ৳10,500/month](/pricing). Chat with us on WhatsApp for a free check of your map rankings.",
      },
    ],
    faqs: [
      { q: "Can you guarantee a top 3 position on Google Maps?", a: "No one can guarantee rankings, and Google warns against providers who do. We focus on the factors Google publishes and report progress honestly." },
      { q: "Do I need a shop to appear on Google Maps?", a: "No. Service-area businesses can appear for the areas they serve without showing a public address." },
      { q: "Can I advertise on Google Maps?", a: "Yes, Google Ads can show ads on Maps. They work well alongside organic Map Pack rankings." },
    ],
    sources: [
      { label: "Google: How to improve your local ranking", url: SRC.gbpRanking },
      { label: "Google Business Profile guidelines", url: SRC.gbpGuidelines },
      { label: "StatCounter: Search engine market share in Bangladesh", url: SRC.statcounterSearch },
    ],
  },
  {
    slug: "local-seo-audit",
    keyword: "local SEO audit",
    title: "Local SEO Audit: 15 Checks to Find Lost Customers",
    excerpt:
      "A local SEO audit shows why competitors outrank you on Google Maps. Here are the 15 checks we run, and how to get a free audit of your business.",
    category: "Local SEO",
    icon: "pin",
    date: "2026-06-27",
    updated: UPDATED,
    body: [
      {
        p: "A local SEO audit is a review of everything that affects how your business appears in Google Maps and local search results. It shows exactly why competitors outrank you and which fixes will bring the most new customers for the least effort.",
      },
      { h2: "The 15 checks in our local SEO audit" },
      {
        table: {
          caption: "Local SEO audit checklist",
          head: ["Area", "What we check"],
          rows: [
            ["Google Business Profile", "Primary and secondary categories, services, description, hours, photos, posts, Q&A"],
            ["Reviews", "Count, average rating, recent reviews, reply rate compared with top 3 competitors"],
            ["Name, address, phone", "Consistency across Google, Facebook, your website and directories"],
            ["Citations", "Listings on trusted Bangladeshi and international directories"],
            ["Website: service pages", "A dedicated page for each main service"],
            ["Website: area pages", "Pages for the areas you serve, where relevant"],
            ["Titles and headings", "Keyword use in page titles, H1s and meta descriptions"],
            ["Structured data", `[LocalBusiness schema](${SRC.localBusinessSchema}) on your website`],
            ["Mobile speed", `[Core Web Vitals](${SRC.coreWebVitals}) and real mobile load times`],
            ["Contact options", "Click-to-call, WhatsApp and forms visible on mobile"],
            ["Tracking", "Call, WhatsApp and form tracking in place"],
            ["Search Console", `Indexing and search queries in [Google Search Console](${SRC.searchConsole})`],
            ["Rankings", "Map positions for your main searches across your service area"],
            ["Competitors", "What the top 3 do that you don't"],
            ["Guideline risks", "Anything that could lead to a suspension"],
          ],
        },
      },
      { h2: "Common problems we find" },
      {
        ul: [
          "The wrong primary category, which is one of the most common reasons for poor rankings",
          "Different phone numbers on Google, Facebook and the website",
          "One page on the website for every service",
          "No reviews in the last few months",
          "Slow mobile pages that lose visitors before they load",
        ],
      },
      { h2: "What happens after the audit" },
      {
        ol: [
          "You get a prioritized list: quick wins first, bigger projects after.",
          "We explain what you can fix yourself and what needs expert help.",
          "If you'd like us to do the work, we recommend the right [plan](/pricing).",
        ],
      },
      { h2: "How to read your audit results" },
      { p: `Focus on the gaps between you and the top three businesses for your main search. If they have three times your reviews, reviews come first. If your category is wrong, fix it today. If your website has no page for your main service, build one. Fix the biggest gap first, then move to the next.` },
      { h2: "Quick wins you can do today" },
      {
        ol: [
          `Check your primary category matches your main service.`,
          `Add every service to your Google profile.`,
          `Upload 10 recent photos of your work and premises.`,
          `Make sure your phone number and hours are correct everywhere.`,
          `Send your review link to five recent happy customers.`,
        ],
      },
      { p: `For the full picture, see what ongoing [local SEO services](/blog/local-seo-services-bangladesh) include and how our [Google Maps marketing service](/blog/google-maps-marketing-service) keeps improving these numbers every month.` },
      { h2: "Get a free local SEO audit" },
      {
        p: "Send us your business name or Google profile link on WhatsApp and we'll review it for free. Learn more about our [Local SEO service](/services/local-seo) or read what [local SEO services in Bangladesh](/blog/local-seo-services-bangladesh) include.",
      },
    ],
    faqs: [
      { q: "How long does a local SEO audit take?", a: "A focused audit of your profile, website and top competitors usually takes a few working days." },
      { q: "Is a free audit really useful?", a: "Yes. It shows the biggest gaps and quick wins. You can fix many of them yourself even if you don't hire us." },
      { q: "How often should I audit my local SEO?", a: "Every 6–12 months, or whenever your rankings or calls drop noticeably." },
    ],
    sources: [
      { label: "Google: LocalBusiness structured data", url: SRC.localBusinessSchema },
      { label: "web.dev: Core Web Vitals", url: SRC.coreWebVitals },
      { label: "Google Search Console", url: SRC.searchConsole },
    ],
  },
  {
    slug: "seo-for-clinics-and-hospitals-bangladesh",
    keyword: "SEO for clinics and hospitals in Bangladesh",
    title: "SEO for Clinics and Hospitals in Bangladesh: Get More Patients",
    metaTitle: "SEO for Clinics & Hospitals in Bangladesh",
    excerpt:
      "SEO for clinics and hospitals in Bangladesh: rank for doctor and treatment searches, build patient trust and turn Google visits into appointments.",
    category: "Local SEO",
    icon: "pin",
    date: "2026-06-23",
    updated: UPDATED,
    body: [
      {
        p: "SEO for clinics and hospitals in Bangladesh helps healthcare providers appear when patients search for doctors, treatments and diagnostic services nearby. Patients often search with urgency, so the clinics they see first get the appointment.",
      },
      { p: FACT.internetUsers },
      { h2: "What patients search for" },
      {
        table: {
          caption: "Common healthcare searches and the page that should rank",
          head: ["Search type", "Example", "Page that should rank"],
          rows: [
            ["Specialist near me", "gynecologist near me", "Doctor or department page + Google profile"],
            ["Treatment", "root canal cost Dhaka", "Treatment page with cost guidance"],
            ["Diagnostic test", "MRI price in Chattogram", "Test page with price and timings"],
            ["Clinic name", "your clinic name + reviews", "Google profile and home page"],
          ],
        },
      },
      { h2: "Pages every clinic website needs" },
      {
        ul: [
          "A page for each department and major treatment",
          "Doctor profiles with qualifications, specialties and chamber times",
          "Diagnostic tests with preparation instructions and prices where possible",
          "Location, parking, opening hours and emergency contact",
          "Online appointment requests, call and WhatsApp buttons",
        ],
      },
      { h2: "Build trust the right way" },
      {
        p: `Google expects health content to be accurate and written by or reviewed by qualified people. Its guidance on [creating helpful, reliable content](${SRC.helpfulContent}) is a good standard: show who wrote or reviewed each page, keep information up to date and avoid exaggerated claims.`,
      },
      { h2: "Google Business Profile for clinics" },
      {
        p: "Use the most specific category, list departments and services, add real photos of reception, rooms and equipment, and reply to every review without sharing patient details. Read our [dental clinic marketing guide](/blog/dental-clinic-marketing-dhaka) for a specialist example.",
      },
      { h2: "Local SEO for each branch and doctor" },
      { p: `Hospitals and clinic chains with several branches need a Google profile and a location page for each one. Senior consultants who see patients at specific chambers can also benefit from detailed doctor pages linked from each branch. Read our guide to [multi-location SEO](/blog/multi-location-seo-bangladesh).` },
      { h2: "Measuring patient enquiries" },
      {
        ul: [
          `Calls and direction requests from each Google profile`,
          `Appointment requests and WhatsApp messages from the website`,
          `Which department and doctor pages patients visit before booking`,
          `How new patients say they found you`,
        ],
      },
      { p: `Combine SEO with [Google Ads lead generation](/blog/google-ads-lead-generation) for high-value services, and keep reviews flowing with our [Google reviews guide](/blog/how-to-get-more-google-reviews).` },
      { h2: "Healthcare SEO with Growbard" },
      {
        p: "We help clinics and [dental practices](/industries/dental-clinics) across Bangladesh with [local SEO](/services/local-seo), websites and Google Ads. See our [pricing](/pricing) or chat with us on WhatsApp.",
      },
    ],
    faqs: [
      { q: "Should doctors have their own pages?", a: "Yes. Patients often search for doctors by name or specialty, and individual pages help them find and trust you." },
      { q: "Can we publish prices for tests?", a: "Where possible, yes. Price information answers a common question and helps patients choose you." },
      { q: "Can clinics advertise on Google?", a: "Yes, within Google's healthcare advertising policies. Ads for treatments and tests can work well alongside SEO." },
    ],
    sources: [
      { label: "DataReportal: Digital 2026 Bangladesh", url: SRC.datareportal },
      { label: "Google: Creating helpful, reliable, people-first content", url: SRC.helpfulContent },
    ],
  },
  {
    slug: "how-to-get-more-google-reviews",
    keyword: "how to get more Google reviews",
    title: "How to Get More Google Reviews for Your Business (Safely)",
    metaTitle: "How to Get More Google Reviews for Your Business",
    excerpt:
      "How to get more Google reviews without breaking Google's rules: a simple WhatsApp process, message templates and how to reply to every review.",
    category: "Local SEO",
    icon: "pin",
    date: "2026-06-19",
    updated: UPDATED,
    body: [
      {
        p: `Knowing how to get more Google reviews is one of the most valuable skills for a local business. Reviews influence where you appear on Google Maps and whether customers choose you once they see you. Google lists review count and rating as part of [prominence in local ranking](${SRC.gbpRanking}).`,
      },
      { h2: "The simple 4-step review process" },
      {
        ol: [
          "**Get your review link** from your Google Business Profile (the \"Ask for reviews\" button).",
          "**Ask at the right moment:** right after a successful job, visit or delivery.",
          "**Send it on WhatsApp** with a short, personal message.",
          "**Reply to every review** within a day or two.",
        ],
      },
      { h2: "Message templates you can use" },
      {
        table: {
          caption: "WhatsApp review request templates",
          head: ["Situation", "Message"],
          rows: [
            ["After a service", "\"Thank you for choosing us today! If you're happy with the work, would you share a quick review? It really helps us: [link]\""],
            ["After a purchase", "\"Hope you're enjoying your order! A short Google review would mean a lot to our small team: [link]\""],
            ["Follow-up (once)", "\"Just a gentle reminder about the review link, only if you have a minute. Thank you!\""],
          ],
        },
      },
      { h2: "What not to do" },
      {
        p: `Don't buy reviews, write fake ones, offer discounts in exchange for reviews or ask only happy customers through \"review gating\" tools. These break [Google's guidelines](${SRC.gbpGuidelines}) and can lead to removed reviews or a suspended profile.`,
      },
      { h2: "How to reply to reviews" },
      {
        ul: [
          "Thank the customer by name and mention the service",
          "Keep negative-review replies calm, short and helpful, and move details to a private conversation",
          "Never share private customer information",
          "Reply in the language the customer used",
        ],
      },
      { h2: "Turn reviews into a team habit" },
      { p: `Reviews work best when asking for them is part of everyone's routine. Give front-desk and delivery staff the review link, add a QR code at the counter and on receipts, and celebrate new reviews with the team. A weekly target, such as five new review requests per staff member, keeps it consistent.` },
      { h2: "Use reviews in your marketing" },
      {
        ul: [
          `Share great reviews (with permission) on Facebook and Instagram`,
          `Add reviews to your website's service and [landing pages](/blog/landing-page-design-service)`,
          `Mention your rating in ads where policies allow`,
          `Reply publicly to show future customers you care`,
        ],
      },
      { p: `Reviews are one part of a complete [local SEO service](/services/local-seo). See how they fit with the rest in our [Google Maps marketing guide](/blog/google-maps-marketing-service).` },
      { h2: "Make reviews part of your routine" },
      {
        p: "Add review requests to your job-completion checklist and track how many you send each week. A steady flow of recent reviews is better than a burst once a year. Our [Google Maps marketing service](/blog/google-maps-marketing-service) sets this up for you as part of [Local SEO](/services/local-seo).",
      },
    ],
    faqs: [
      { q: "Can I ask every customer for a review?", a: "Yes. Asking all customers is fine and encouraged. Only asking happy customers through filtering tools is not allowed." },
      { q: "Can I delete bad reviews?", a: "You can't delete them yourself. You can report reviews that break Google's policies, and reply professionally to the rest." },
      { q: "How many reviews do I need?", a: "Aim to match or beat the top three businesses in your area, and keep getting new ones every month." },
    ],
    sources: [
      { label: "Google: How to improve your local ranking", url: SRC.gbpRanking },
      { label: "Google Business Profile guidelines", url: SRC.gbpGuidelines },
    ],
  },
  {
    slug: "multi-location-seo-bangladesh",
    keyword: "multi-location SEO",
    title: "Multi-Location SEO for Businesses with Several Branches",
    excerpt:
      "Multi-location SEO for chains and businesses with branches across Bangladesh: separate profiles, location pages and reporting that shows each branch.",
    category: "Local SEO",
    icon: "pin",
    date: "2026-06-15",
    updated: UPDATED,
    body: [
      {
        p: "Multi-location SEO helps businesses with several branches, such as clinics, restaurants, showrooms or training centres, rank each branch in its own area. One website and one Google profile for the whole company usually means only the head office ranks.",
      },
      { h2: "The three building blocks" },
      {
        table: {
          caption: "What each branch needs",
          head: ["Building block", "What to set up"],
          rows: [
            ["Google Business Profile", "One verified profile per branch with its own address, phone, hours and photos"],
            ["Location page", "A unique page per branch on your website: address, map, services, team, directions"],
            ["Reviews", "A review process at every branch, with replies from a local manager"],
          ],
        },
      },
      { h2: "Make every location page unique" },
      {
        p: "Copying the same text and changing the city name doesn't help. Include what's genuinely different about each branch: the team, services available there, nearby landmarks, parking and opening hours. See how we structure our own [location pages](/locations), such as [Chattogram](/locations/chattogram) and [Khulna](/locations/khulna).",
      },
      { h2: "Keep details consistent" },
      {
        p: "Each branch's name, address and phone number should match exactly across Google, Facebook, directories and your website. Inconsistent details are one of the most common multi-location problems.",
      },
      { h2: "Add structured data" },
      {
        p: `Use [LocalBusiness structured data](${SRC.localBusinessSchema}) on each location page so Google can connect the page with the right branch.`,
      },
      { h2: "Report by branch" },
      {
        p: "Track calls, direction requests and leads per branch. This shows which locations need more attention and where to focus ads.",
      },
      { h2: "Common multi-location mistakes" },
      {
        ul: [
          `Using the head office phone number on every branch profile`,
          `Duplicate profiles for the same branch`,
          `Location pages with identical text`,
          `Branch managers unable to access or update their profile`,
          `Closing a branch without marking the profile as permanently closed`,
        ],
      },
      { h2: "Scaling to new branches" },
      {
        ol: [
          `Create and verify the Google profile before or at opening.`,
          `Publish the branch's location page with real photos.`,
          `Add the branch to key directories with identical details.`,
          `Start collecting reviews from the first week.`,
          `Run local [Google Ads](/blog/google-ads-lead-generation) around the opening.`,
        ],
      },
      { p: `Planning more cities? Our [location pages](/locations) show how we structure pages for districts across Bangladesh.` },
      { h2: "Multi-location SEO with Growbard" },
      {
        p: "We manage profiles and location pages for businesses with branches across Bangladesh as part of our [Local SEO service](/services/local-seo). Contact us on WhatsApp for a custom plan, or see our [pricing](/pricing).",
      },
    ],
    faqs: [
      { q: "Can I have one Google profile for all branches?", a: "No. Each branch with its own address and staff should have its own verified profile." },
      { q: "Do I need a separate website for each branch?", a: "No. One website with a strong page for each branch is usually best." },
      { q: "How do I manage reviews across branches?", a: "Give each branch its own review link and make one person responsible for replies at each location." },
    ],
    sources: [
      { label: "Google: LocalBusiness structured data", url: SRC.localBusinessSchema },
      { label: "Google Business Profile guidelines", url: SRC.gbpGuidelines },
    ],
  },
  {
    slug: "landing-page-design-service",
    keyword: "landing page design service",
    title: "Landing Page Design Service: Turn Ad Clicks into Leads",
    excerpt:
      "A landing page design service builds focused pages that turn Google and Facebook ad clicks into calls and WhatsApp leads. Here's what works.",
    category: "Website Development",
    icon: "code",
    date: "2026-06-11",
    updated: UPDATED,
    body: [
      {
        p: "A landing page design service creates a single, focused page for each campaign or service, built to turn visitors into leads. If you're paying for clicks from Google Ads or Facebook, sending them to your home page wastes money; a landing page gives them exactly what the ad promised.",
      },
      { h2: "Landing page vs home page" },
      {
        table: {
          caption: "Why ads perform better with landing pages",
          head: ["", "Home page", "Landing page"],
          rows: [
            ["Goal", "Introduce the whole business", "One action: call, WhatsApp or form"],
            ["Message", "General", "Matches the ad and search exactly"],
            ["Distractions", "Menus, many links", "Minimal navigation"],
            ["Google Ads impact", "Lower relevance", `Better landing page experience, part of [Quality Score](${SRC.adsQualityScore})`],
          ],
        },
      },
      { h2: "What a high-converting landing page includes" },
      {
        ol: [
          "A headline that repeats what the visitor searched for.",
          "A short explanation of the offer and who it's for.",
          "Proof: reviews, photos of real work, numbers.",
          "Clear pricing or a starting price where possible.",
          "Call and WhatsApp buttons visible at all times on mobile.",
          "A short form with only the fields you need.",
          "Answers to the top 3–5 questions.",
        ],
      },
      { h2: "Speed matters" },
      {
        p: `Most ad clicks come from phones. A slow page loses visitors before it loads. Test your page in [PageSpeed Insights](${SRC.pageSpeed}) and aim for good [Core Web Vitals](${SRC.coreWebVitals}).`,
      },
      { h2: "Test and improve" },
      {
        p: "Try different headlines, offers and form lengths, and keep the version with the lowest cost per lead. Even small changes can make a noticeable difference.",
      },
      { h2: "Landing page examples by industry" },
      {
        ul: [
          `**Dental clinic:** an implants page with cost guidance, doctor profile and appointment form`,
          `**Solar company:** a factory rooftop solar page with savings explanation and quote form`,
          `**Real estate:** one page per project with floor plans, location map and WhatsApp button`,
          `**Study-abroad:** one page per country with requirements and a counselling booking form`,
        ],
      },
      { h2: "Mistakes that kill conversions" },
      {
        ul: [
          `Forms asking for too much information`,
          `No phone or WhatsApp option on mobile`,
          `A headline that doesn't match the ad`,
          `Slow-loading hero images or videos`,
          `No reviews or proof`,
        ],
      },
      { p: `Pair landing pages with a [Google Ads audit](/blog/google-ads-audit-checklist) to make sure the clicks you're paying for are the right ones.` },
      { h2: "Landing pages with Growbard" },
      {
        p: "We build landing pages for every campaign we run, as part of our [website development](/services/web-development) and [Google Ads](/services/google-ads) services in the [Growth plan](/pricing). Read [Google Ads for lead generation](/blog/google-ads-lead-generation) to see how they work together.",
      },
    ],
    faqs: [
      { q: "How many landing pages do I need?", a: "Usually one per main service or campaign, so each ad sends visitors to a page that matches it." },
      { q: "Can a landing page rank on Google?", a: "It can, but most landing pages are built for ads. Service pages on your main website are better for organic rankings." },
      { q: "Should a landing page have a menu?", a: "Keep navigation minimal so visitors focus on the one action you want them to take." },
    ],
    sources: [
      { label: "Google Ads Help: About Quality Score", url: SRC.adsQualityScore },
      { label: "PageSpeed Insights", url: SRC.pageSpeed },
      { label: "web.dev: Core Web Vitals", url: SRC.coreWebVitals },
    ],
  },
  {
    slug: "website-redesign-service",
    keyword: "website redesign service",
    title: "Website Redesign Service: 9 Signs Your Site Needs a Rebuild",
    excerpt:
      "Nine clear signs your business website needs a redesign, what a website redesign service involves and how to keep your Google rankings while you switch.",
    category: "Website Development",
    icon: "code",
    date: "2026-06-08",
    updated: UPDATED,
    body: [
      {
        p: "A website redesign service rebuilds an outdated website so it loads fast, looks professional and brings in leads, without losing the Google rankings you've already earned. Many business websites in Bangladesh were built years ago for desktop screens and now underperform on mobile.",
      },
      { h2: "9 signs your website needs a redesign" },
      {
        ol: [
          "It's slow on mobile data.",
          "Visitors can't call or WhatsApp you in one tap.",
          "It looks outdated compared with competitors.",
          "You can't update it yourself, or updates keep breaking it.",
          "It doesn't have a page for each service.",
          "You get traffic but very few enquiries.",
          "It isn't secure (no HTTPS) or shows browser warnings.",
          "It doesn't reflect your current services, prices or brand.",
          "You don't know how many leads it brings.",
        ],
      },
      { h2: "How to redesign without losing rankings" },
      {
        table: {
          caption: "SEO-safe redesign checklist",
          head: ["Step", "Why it matters"],
          rows: [
            ["List all current URLs", "So nothing important disappears"],
            ["Set up 301 redirects", "Old links and rankings pass to the new pages"],
            ["Keep or improve content on ranking pages", "Google ranked that content for a reason"],
            ["Keep titles and headings focused", "Don't lose keywords that bring traffic"],
            ["Submit the new sitemap", `In [Google Search Console](${SRC.searchConsole})`],
            ["Monitor for 4–8 weeks", "Catch errors and broken links early"],
          ],
        },
      },
      { h2: "What a redesign usually includes" },
      {
        ul: [
          "Review of current traffic, rankings and leads",
          "New structure with service and location pages",
          "Mobile-first design and fast hosting",
          "Clear calls to action and tracking",
          "SEO migration with redirects",
        ],
      },
      { h2: "What to keep from your old website" },
      {
        ul: [
          `Pages that already rank or bring traffic`,
          `Your domain name and email setup`,
          `Content that answers customer questions well`,
          `Reviews, case studies and photos of real work`,
          `Any backlinks pointing to specific pages (redirect them)`,
        ],
      },
      { h2: "Redesign or start fresh?" },
      { p: `If your current site gets steady traffic and rankings, a careful redesign with redirects protects that value. If it gets almost no traffic and is built on an outdated system, starting fresh with an [SEO-friendly website](/blog/seo-friendly-website-development) is often simpler. Either way, plan for [ongoing maintenance](/blog/website-maintenance-service-bangladesh) after launch and check [website development costs](/blog/website-development-cost-in-bangladesh).` },
      { h2: "Website redesign with Growbard" },
      {
        p: "We redesign websites with SEO migration built in, as part of our [website development service](/services/web-development). Read our [website cost guide](/blog/website-development-cost-in-bangladesh) or see our [Growth plan](/pricing), which includes development and maintenance.",
      },
    ],
    faqs: [
      { q: "Will a redesign hurt my Google rankings?", a: "Not if it's done carefully with redirects and preserved content. Rankings can even improve thanks to better speed and structure." },
      { q: "How long does a redesign take?", a: "Usually 3–6 weeks for a typical business website, longer for large or e-commerce sites." },
      { q: "Can you keep my domain and emails?", a: "Yes. Redesigning the website doesn't affect your domain name or email accounts." },
    ],
    sources: [{ label: "Google Search Console", url: SRC.searchConsole }],
  },
  {
    slug: "website-maintenance-service-bangladesh",
    keyword: "website maintenance service in Bangladesh",
    title: "Website Maintenance Service in Bangladesh: What's Included",
    excerpt:
      "What a website maintenance service in Bangladesh covers, from updates, backups and security to speed and content changes, and why it protects your leads.",
    category: "Website Development",
    icon: "code",
    date: "2026-06-04",
    updated: UPDATED,
    body: [
      {
        p: "A website maintenance service in Bangladesh keeps your site secure, fast and up to date after launch. Websites aren't \"set and forget\": plugins, themes and servers need updates, and an unmaintained site can slow down, break or be hacked.",
      },
      { h2: "What maintenance includes" },
      {
        table: {
          caption: "Typical website maintenance tasks",
          head: ["Task", "How often", "Why it matters"],
          rows: [
            ["Software and plugin updates", "Monthly or as released", "Fixes security holes and bugs"],
            ["Backups", "Daily or weekly", "Restore quickly if something goes wrong"],
            ["Security monitoring", "Ongoing", "Detect malware and attacks early"],
            ["Uptime monitoring", "Ongoing", "Know immediately if the site goes down"],
            ["Speed checks", "Monthly", `Keep [Core Web Vitals](${SRC.coreWebVitals}) healthy`],
            ["Content changes", "As needed", "Keep services, prices and offers current"],
            ["Broken link and form tests", "Monthly", "Make sure leads still reach you"],
          ],
        },
      },
      { h2: "Signs your website isn't being maintained" },
      {
        ul: [
          "Contact forms that silently stop sending emails",
          "Old prices or services still listed",
          "Security warnings in the browser",
          "Pages getting slower every month",
          "Nobody knows the hosting or admin logins",
        ],
      },
      { h2: "The real cost of no maintenance" },
      {
        p: "A broken form or hacked site can cost weeks of lost enquiries before anyone notices. Regular maintenance is cheap compared with rebuilding a site or losing customers.",
      },
      { h2: "A simple monthly maintenance routine" },
      {
        ol: [
          `Take and test a full backup.`,
          `Apply software, theme and plugin updates on a staging copy first.`,
          `Check every contact form and WhatsApp button still works.`,
          `Run a speed test and fix anything that slowed down.`,
          `Review Search Console for errors and broken pages.`,
          `Update offers, prices and opening hours.`,
        ],
      },
      { h2: "Maintenance and SEO go together" },
      { p: `Search rankings depend on a site that stays fast, secure and up to date. Regular maintenance prevents the slow decline many business websites suffer. If your site is already slow, start with [speed optimization](/blog/website-speed-optimization-service); if it's badly outdated, consider a [website redesign](/blog/website-redesign-service). See our [website development service](/services/web-development) for how we handle both.` },
      { h2: "Website maintenance with Growbard" },
      {
        p: "Website development and maintenance are both included in our [Growth (৳24,500/month) and Dominate plans](/pricing), along with Local SEO and Google Ads. Learn more about our [website development service](/services/web-development).",
      },
    ],
    faqs: [
      { q: "Can you maintain a website you didn't build?", a: "Usually yes. We review the site first and let you know if anything needs fixing before ongoing maintenance." },
      { q: "Is hosting included in maintenance?", a: "It depends on the plan. We'll explain hosting options and costs clearly when we review your site." },
      { q: "How quickly are content changes made?", a: "Small text and image updates are typically done within one to two working days." },
    ],
    sources: [{ label: "web.dev: Core Web Vitals", url: SRC.coreWebVitals }],
  },
  {
    slug: "seo-friendly-website-development",
    keyword: "SEO-friendly website development",
    title: "SEO-Friendly Website Development: What It Means in Practice",
    metaTitle: "SEO-Friendly Website Development: What It Means",
    excerpt:
      "What SEO-friendly website development actually includes, from structure and speed to schema, and how to check whether a developer builds it in.",
    category: "Website Development",
    icon: "code",
    date: "2026-06-02",
    updated: UPDATED,
    body: [
      {
        p: "SEO-friendly website development means building a website so Google can find, understand and rank every page from day one. It's much cheaper to build SEO in than to fix it later, yet many sites in Bangladesh launch without the basics.",
      },
      { p: FACT.googleShare },
      { h2: "The essentials of an SEO-friendly website" },
      {
        table: {
          caption: "SEO features to ask your developer for",
          head: ["Feature", "What it does"],
          rows: [
            ["Clear page structure", "One page per service and location, logical URLs like /services/local-seo"],
            ["Unique titles and descriptions", "Each page tells Google and searchers what it's about"],
            ["One H1 per page", "A clear main heading that matches the search"],
            ["Fast loading", `Good [Core Web Vitals](${SRC.coreWebVitals}) on mobile`],
            ["Mobile-first design", "Most visitors in Bangladesh browse on phones"],
            ["Structured data", `[LocalBusiness](${SRC.localBusinessSchema}), FAQ and breadcrumb markup`],
            ["XML sitemap and robots.txt", "Helps Google discover every page"],
            ["Internal links", "Connects related pages so authority flows through the site"],
            ["Image alt text and sizing", "Accessible and fast images"],
          ],
        },
      },
      { h2: "How to check a website yourself" },
      {
        ol: [
          `Run it through [PageSpeed Insights](${SRC.pageSpeed}).`,
          "View a page's title in your browser tab and in Google search results.",
          `Add the site to [Google Search Console](${SRC.searchConsole}) and check for indexing problems.`,
          "Make sure each service has its own page.",
        ],
      },
      { h2: "Follow Google's own guidance" },
      {
        p: `Google's [SEO Starter Guide](${SRC.seoStarter}) explains the basics clearly. A good developer will already follow it.`,
      },
      { h2: "Content still matters most" },
      { p: `A technically perfect site with thin content won't rank. Google's guidance on [helpful, people-first content](${SRC.helpfulContent}) applies to every page: answer the questions your customers actually ask, show real experience and keep information current. Service pages should explain what you offer, who it's for, prices or price guidance, and how to get started.` },
      { h2: "SEO-friendly structure for a local business" },
      {
        ul: [
          `Home page focused on your main service and area`,
          `One page per service, e.g. /services/local-seo`,
          `One page per area you serve, where relevant, e.g. /locations/dhaka`,
          `A blog answering customer questions, linking to service pages`,
          `About, contact and reviews pages that build trust`,
        ],
      },
      { p: `This is exactly how our own site is structured, with [service pages](/services), [location pages](/locations) and this [blog](/blog).` },
      { h2: "SEO-friendly websites from Growbard" },
      {
        p: "Every website we build includes these features, as part of our [website development service](/services/web-development). Our own site, including its [service pages](/services) and [location pages](/locations), is built the same way. See our [pricing](/pricing).",
      },
    ],
    faqs: [
      { q: "Does an SEO-friendly website rank automatically?", a: "No. It removes technical barriers, but you still need good content, reviews and links to rank for competitive searches." },
      { q: "Is WordPress SEO-friendly?", a: "It can be, with the right theme, setup and maintenance. Any platform can be SEO-friendly or not depending on how it's built." },
      { q: "What is structured data?", a: "Code that describes your business, FAQs and pages to Google in a standard format, which can enable richer search results." },
    ],
    sources: [
      { label: "Google: SEO Starter Guide", url: SRC.seoStarter },
      { label: "Google: LocalBusiness structured data", url: SRC.localBusinessSchema },
      { label: "PageSpeed Insights", url: SRC.pageSpeed },
      { label: "StatCounter: Search engine market share in Bangladesh", url: SRC.statcounterSearch },
    ],
  },
  {
    slug: "website-speed-optimization-service",
    keyword: "website speed optimization service",
    title: "Website Speed Optimization Service: Faster Pages, More Leads",
    metaTitle: "Website Speed Optimization Service",
    excerpt:
      "A website speed optimization service fixes slow pages that lose visitors on mobile data. What we measure, what we fix and the results to expect.",
    category: "Website Development",
    icon: "code",
    date: "2026-06-01",
    updated: UPDATED,
    body: [
      {
        p: "A website speed optimization service makes your pages load faster, especially on phones and mobile data. A slow website loses visitors before they see your offer, wastes ad spend and can hold back your Google rankings.",
      },
      { p: FACT.subscriptions },
      { h2: "What we measure" },
      {
        p: `Google uses [Core Web Vitals](${SRC.coreWebVitals}) to measure real-world page experience.`,
      },
      {
        table: {
          caption: "Core Web Vitals and Google's \"good\" thresholds",
          head: ["Metric", "What it measures", "Good"],
          rows: [
            ["Largest Contentful Paint (LCP)", "How fast the main content appears", "2.5 seconds or less"],
            ["Interaction to Next Paint (INP)", "How quickly the page responds to taps", "200 milliseconds or less"],
            ["Cumulative Layout Shift (CLS)", "How much the layout jumps while loading", "0.1 or less"],
          ],
        },
      },
      { h2: "Common causes of slow websites" },
      {
        ul: [
          "Huge, uncompressed images and sliders",
          "Too many plugins and third-party scripts",
          "Cheap or overloaded hosting",
          "No caching",
          "Heavy themes loading code the site doesn't use",
        ],
      },
      { h2: "What we fix" },
      {
        ol: [
          "Compress and resize images and serve modern formats.",
          "Remove unused plugins and scripts.",
          "Add caching and a content delivery network where useful.",
          "Defer non-essential code.",
          "Move to better hosting if needed.",
        ],
      },
      { h2: "Check your site now" },
      {
        p: `Test your homepage in [PageSpeed Insights](${SRC.pageSpeed}) on mobile. If the results are poor, send us the link on WhatsApp and we'll explain what's slowing it down.`,
      },
      { h2: "Speed and Google Ads" },
      { p: `Landing page experience is part of Google Ads' [Quality Score](${SRC.adsQualityScore}), and a slow page also loses visitors you've already paid for. Speeding up your landing pages can lower cost per lead without changing your bids. See our guide to [landing page design](/blog/landing-page-design-service).` },
      { h2: "Keeping it fast" },
      {
        ul: [
          `Compress every new image before uploading`,
          `Review plugins and scripts every few months`,
          `Avoid autoplay videos and heavy sliders`,
          `Check Core Web Vitals monthly as part of [website maintenance](/blog/website-maintenance-service-bangladesh)`,
        ],
      },
      { h2: "Speed optimization with Growbard" },
      {
        p: "Speed work is part of our [website development and maintenance](/services/web-development) in the [Growth and Dominate plans](/pricing). Also read [SEO-friendly website development](/blog/seo-friendly-website-development).",
      },
    ],
    faqs: [
      { q: "Does speed affect Google rankings?", a: "Page experience, including Core Web Vitals, is one of many signals Google uses. Speed also strongly affects how many visitors become leads." },
      { q: "Why is my site fast on Wi-Fi but slow on mobile?", a: "Mobile connections and phones are slower, so heavy pages suffer more. Always test on mobile." },
      { q: "Can any website be made fast?", a: "Most can be improved significantly. Some very heavy sites are better rebuilt." },
    ],
    sources: [
      { label: "web.dev: Core Web Vitals", url: SRC.coreWebVitals },
      { label: "PageSpeed Insights", url: SRC.pageSpeed },
      { label: "BSS: BTRC internet subscriber data, May 2026", url: SRC.btrcViaBss },
    ],
  },
];
