import { FACT, SRC } from "@/lib/blog/sources";
import type { PostData } from "@/lib/posts";

// The first five articles.
export const STARTER_POSTS: PostData[] = [
  {
    slug: "rank-in-google-map-pack-dhaka",
    keyword: "rank in the Google Map Pack in Dhaka",
    title: "How to Rank Your Business in the Google Map Pack in Dhaka",
    excerpt:
      "The three businesses shown on the map at the top of Google get most of the calls. Here's what decides who gets those spots, and what you can do about it.",
    category: "Local SEO",
    icon: "pin",
    date: "2026-10-20",
    updated: "2026-10-21",
    body: [
      {
        p: "If you want to rank in the Google Map Pack in Dhaka, you first need to know how it works. Search for \"dentist near me\" or \"AC repair Mirpur\" and Google shows a map with three businesses under it. This is the Map Pack, and for most local searches it gets more clicks than everything below it. If your business isn't in those three spots, most customers searching for you will never see you.",
      },
      { p: FACT.googleShare },
      {
        p: "Google ranks businesses in the Map Pack on three things: relevance, distance and prominence. You can't move your shop closer to every customer, but you can work on the other two.",
      },
      { h2: "1. Relevance: tell Google exactly what you do" },
      {
        p: "Google needs to understand which searches your business should appear for. Most of this comes from your Google Business Profile.",
      },
      {
        ul: [
          "Choose the most specific primary category you can, such as \"Dental clinic\" rather than \"Clinic\".",
          "Add secondary categories for the other services you really offer.",
          "List every service in the Services section, with a short description for each.",
          "Write a business description that mentions what you do and the areas you serve, in plain language.",
        ],
      },
      { h2: "2. Prominence: show Google you're trusted" },
      {
        p: "Prominence is how well known and trusted your business looks online. Reviews are the biggest part of it.",
      },
      {
        ul: [
          "Ask every happy customer for a Google review. A short link sent on WhatsApp right after the job works best.",
          "Reply to every review, good or bad. It shows Google and customers that you're active.",
          "Get listed on trusted directories and local sites with exactly the same business name, address and phone number as your profile.",
          "Make sure your website shows the same name, address and phone number, and links to your Google profile.",
        ],
      },
      { h2: "3. Stay active" },
      {
        p: "Profiles that are updated regularly tend to perform better. Post updates or offers every week, add new photos of your work, keep your opening hours correct (including holidays), and answer questions people ask on your profile.",
      },
      { h2: "What Google itself says" },
      { p: `Google confirms that local results are based on [relevance, distance and prominence](${SRC.gbpRanking}), and that keeping your profile complete and accurate, collecting reviews and responding to them all help. Avoid shortcuts that break the [Business Profile guidelines](${SRC.gbpGuidelines}).` },
      {
        table: {
          caption: "Map Pack ranking factors at a glance",
          head: ["Factor", "You can influence it?", "Main actions"],
          rows: [
            ["Relevance", "Yes", "Categories, services, description, website service pages"],
            ["Distance", "Partly", "Accurate address or service areas, area pages"],
            ["Prominence", "Yes", "[Reviews](/blog/how-to-get-more-google-reviews), citations, links, regular activity"],
          ],
        },
      },
      { p: `Want this done for you? Our [Google Maps marketing service](/blog/google-maps-marketing-service) covers all three, or start with a free [local SEO audit](/blog/local-seo-audit).` },
      { h2: "How long does it take?" },
      {
        p: "In less competitive areas, a well-optimized profile can start moving within a few weeks. In busy categories in central Dhaka it usually takes a few months of steady work on reviews, citations and content. The businesses that win are the ones that keep at it every month.",
      },
    ],
    faqs: [
      {
        q: "How many businesses appear in the Google Map Pack?",
        a: "Usually three, shown under a map above the regular search results. More appear when someone taps \"More places\".",
      },
      {
        q: "Does my address need to be in central Dhaka to rank?",
        a: "No. Distance matters, but relevance and prominence matter too. Businesses can rank well in their own area with a strong profile and reviews.",
      },
      {
        q: "Can I pay Google to appear in the Map Pack?",
        a: "Ads can appear on Google Maps, but the organic Map Pack can't be bought. It's earned through relevance, distance and prominence.",
      },
    ],
    sources: [
      { label: "Google: How to improve your local ranking", url: SRC.gbpRanking },
      { label: "Google Business Profile guidelines", url: SRC.gbpGuidelines },
      { label: "StatCounter: Search engine market share in Bangladesh", url: SRC.statcounterSearch },
    ],
  },
  {
    slug: "google-business-profile-checklist",
    keyword: "google business profile checklist",
    title: "Google Business Profile Checklist: 12 Things to Complete Today",
    excerpt:
      "A complete Google Business Profile gets more calls, direction requests and website visits. Use this checklist to find the gaps in yours.",
    category: "Local SEO",
    icon: "pin",
    date: "2026-10-14",
    updated: "2026-10-21",
    body: [
      {
        p: "This Google Business Profile checklist covers everything your listing needs. Your Google Business Profile is often the first thing a customer sees, before your website or Facebook page. Google also favours complete, accurate profiles in local results. Go through this list and fix anything that's missing.",
      },
      { p: `You can manage your profile for free at [Google Business Profile](${SRC.gbpHome}). Everything below follows [Google's own guidelines](${SRC.gbpGuidelines}), so it's safe for your listing.` },
      { h2: "The checklist" },
      {
        ul: [
          "Business name exactly as it appears on your signboard, with no extra keywords.",
          "The most accurate primary category, plus relevant secondary categories.",
          "Phone number that is answered during business hours.",
          "Website link, ideally to a page about the service or location.",
          "Opening hours, plus special hours for Eid, Puja and other holidays.",
          "Service area or address, set correctly for how you work.",
          "A 750-character description of what you do and who you serve.",
          "Every service listed, with prices where you can share them.",
          "Logo and cover photo that look sharp on a phone.",
          "At least 10 real photos of your work, team and premises.",
          "A post published in the last 7 days.",
          "Replies to every review and every question.",
        ],
      },
      {
        table: {
          caption: "Which checklist items affect what",
          head: ["Item", "Helps rankings", "Helps customers choose you"],
          rows: [
            ["Categories and services", "Yes", "Yes"],
            ["Reviews and replies", "Yes", "Yes"],
            ["Photos", "Indirectly", "Yes"],
            ["Posts", "Indirectly", "Yes"],
            ["Accurate hours", "Indirectly", "Yes"],
          ],
        },
      },
      { p: `Need more reviews? Follow our guide on [how to get more Google reviews](/blog/how-to-get-more-google-reviews). Prefer to hand it over? See our [Google Business Profile optimization service](/blog/google-business-profile-optimization-service).` },
      { p: `Want a professional review of your profile? Ask for a free [local SEO audit](/blog/local-seo-audit), or see how our [Local SEO service](/services/local-seo) keeps profiles active every month.` },
      { h2: "Keep it up to date" },
      {
        p: "A profile is not a one-time job. Set a weekly reminder to add a post and a few new photos, and check your hours before every holiday. Small, regular updates keep your profile fresh in Google's eyes and in your customers'.",
      },
    ],
    faqs: [
      {
        q: "How often should I post on my Google Business Profile?",
        a: "Aim for at least one post a week. Regular activity keeps your profile fresh for customers and Google.",
      },
      {
        q: "Can I add keywords to my business name?",
        a: "No. Use your real business name. Adding keywords breaks Google's guidelines and can lead to suspension.",
      },
      {
        q: "How many photos should my profile have?",
        a: "There's no fixed number, but aim for at least 10 good photos and keep adding new ones every month.",
      },
    ],
    sources: [
      { label: "Google Business Profile", url: SRC.gbpHome },
      { label: "Google Business Profile guidelines", url: SRC.gbpGuidelines },
    ],
  },
  {
    slug: "do-you-need-a-website-if-you-have-facebook",
    keyword: "do I need a website if I have a Facebook page",
    title: "Do You Need a Website If You Already Have a Facebook Page?",
    excerpt:
      "Many local businesses in Bangladesh run entirely on Facebook. It works, until it doesn't. Here's what a website adds that a page can't.",
    category: "Website Development",
    icon: "code",
    date: "2026-10-08",
    updated: "2026-10-21",
    body: [
      {
        p: "Do you need a website if you have a Facebook page? It's one of the most common questions we hear from business owners. Facebook is a great place to reach customers, and for many businesses it's where most messages come from. But a Facebook page is rented space: you don't control how many people see your posts, and you can't shape how your business appears on Google.",
      },
      { p: FACT.facebookUsers },
      { p: FACT.googleShare },
      { h2: "What a website does that Facebook can't" },
      {
        ul: [
          "Shows up on Google when people search for your service, not just your name.",
          "Makes your Google Business Profile stronger, because Google can link the two.",
          "Lets you explain your services, prices and process in your own structure.",
          "Gives Google Ads a fast, focused landing page to send visitors to.",
          "Stays yours, even if your page is restricted or reach drops.",
        ],
      },
      { h2: "What a good small-business website needs" },
      {
        p: "You don't need dozens of pages. You need a fast, mobile-first site with a clear message and an easy way to contact you.",
      },
      {
        ul: [
          "A headline that says what you do and where.",
          "A page for each main service.",
          "Click-to-call and WhatsApp buttons that are always visible on mobile.",
          "Reviews and real photos to build trust.",
          "Your name, address and phone number matching your Google profile.",
        ],
      },
      {
        table: {
          caption: "Facebook page vs website",
          head: ["", "Facebook page", "Your website"],
          rows: [
            ["Found on Google for service searches", "Rarely", "Yes, with service pages"],
            ["You control reach", "No, depends on the algorithm", "Yes"],
            ["Works with Google Ads", "Limited", "Yes"],
            ["Ownership", "Rented from Meta", "Yours"],
            ["Messaging", "Messenger and WhatsApp", "WhatsApp, call and forms"],
          ],
        },
      },
      { p: `Thinking about building one? Read our [website development cost guide](/blog/website-development-cost-in-bangladesh) and what makes [an SEO-friendly website](/blog/seo-friendly-website-development).` },
      { p: `Our [website development service](/services/web-development) builds sites designed for Bangladeshi customers, with WhatsApp and call buttons on every page. Keep your Facebook page active too with [Facebook page management](/blog/facebook-page-management-service).` },
      { h2: "Use both" },
      {
        p: "The best approach is to use Facebook to stay in touch with your community and your website to get found on Google and turn searchers into customers. Each one makes the other work better.",
      },
    ],
    faqs: [
      {
        q: "Can a Facebook page rank on Google?",
        a: "Sometimes for your business name, but rarely for service searches like \"dentist in Uttara\". A website with service pages does that much better.",
      },
      {
        q: "How much does a small business website cost?",
        a: "It depends on the pages and features you need. Our website development cost guide explains the main price factors.",
      },
      {
        q: "Should I stop using Facebook if I build a website?",
        a: "No. Use both: Facebook for community and reach, your website for Google visibility and conversions.",
      },
    ],
    sources: [
      { label: "NapoleonCat: Social media users in Bangladesh", url: SRC.napoleoncat },
      { label: "StatCounter: Search engine market share in Bangladesh", url: SRC.statcounterSearch },
    ],
  },
  {
    slug: "google-ads-for-local-businesses",
    keyword: "google ads for local business",
    title: "Google Ads for Local Businesses: How to Stop Wasting Your Budget",
    excerpt:
      "Google Ads can bring calls from day one, or burn through your budget with nothing to show. These settings make the difference.",
    category: "Google Ads",
    icon: "ads",
    date: "2026-09-30",
    updated: "2026-10-21",
    body: [
      {
        p: "Google Ads puts your business at the top of search results for the searches you choose. For a local business that can mean calls the same day. But the default settings are built to spend money, not to bring you customers.",
      },
      { h2: "Five common budget leaks" },
      {
        ul: [
          "Targeting the whole country when you only serve part of Dhaka. Set your location to the areas you actually serve.",
          "Using broad match keywords without negatives, so your ads show for unrelated searches like \"free\" or \"jobs\".",
          "Sending clicks to your home page instead of a page about the exact service in the ad.",
          "Not tracking calls and WhatsApp clicks, so you can't tell which keywords bring customers.",
          "Running ads 24/7 when nobody is there to answer the phone at night.",
        ],
      },
      { h2: "A simple setup that works" },
      {
        ul: [
          "One campaign per service, with a small set of high-intent keywords such as \"[service] in [area]\".",
          "A growing negative keyword list, reviewed every week.",
          "Call and location assets so people can call or find you straight from the ad.",
          "Conversion tracking for calls, form submissions and WhatsApp clicks.",
          "A landing page with the same offer as the ad and a clear call to action.",
        ],
      },
      {
        table: {
          caption: "Budget leaks and their fixes",
          head: ["Leak", "Fix", "Google help"],
          rows: [
            ["Whole-country targeting", "Target only areas you serve", "[Location targeting](${SRC.adsLocations})"],
            ["Irrelevant searches", "Add negative keywords weekly", "[Negative keywords](${SRC.adsNegativeKeywords})"],
            ["Home-page landing", "Service-specific landing pages", "[Quality Score](${SRC.adsQualityScore})"],
            ["No tracking", "Track calls, WhatsApp and forms", "Conversion tracking"],
            ["24/7 ads", "Ad schedule for business hours", "Ad scheduling"],
          ],
        },
      },
      { p: `Run a full check with our [Google Ads audit checklist](/blog/google-ads-audit-checklist), and see [Google Ads lead generation](/blog/google-ads-lead-generation) for a setup that works.` },
      { p: `Our [Google Ads service](/services/google-ads) sets this up for you, and our guide on [how much Google Ads costs in Bangladesh](/blog/google-ads-cost-in-bangladesh) helps you plan a budget.` },
      { h2: "Measure what matters" },
      {
        p: "Clicks and impressions don't pay the bills. Judge your ads on cost per lead and, where you can, cost per customer. Once you know those numbers, you can confidently put more budget behind what works.",
      },
    ],
    faqs: [
      {
        q: "What are negative keywords?",
        a: "Words you tell Google not to show your ads for, such as \"free\" or \"job\", so you don't pay for irrelevant clicks.",
      },
      {
        q: "Should ads go to my home page?",
        a: "Usually not. Send each ad to a page about the exact service it promotes so more visitors turn into enquiries.",
      },
      {
        q: "How do I track calls from Google Ads?",
        a: "Use call assets with call reporting, and track clicks on phone and WhatsApp buttons on your website as conversions.",
      },
    ],
    sources: [
      { label: "Google Ads Help: Location targeting", url: SRC.adsLocations },
      { label: "Google Ads Help: About negative keywords", url: SRC.adsNegativeKeywords },
      { label: "Google Ads Help: About Quality Score", url: SRC.adsQualityScore },
    ],
  },
  {
    slug: "facebook-vs-instagram-for-local-business",
    keyword: "facebook vs instagram for business",
    title: "Facebook vs Instagram: Where Should Your Local Business Post?",
    excerpt:
      "You don't have to be everywhere. Here's how to decide where to spend your social media time, and what to post once you do.",
    category: "Social Media Marketing",
    icon: "social",
    date: "2026-09-22",
    updated: "2026-10-21",
    body: [
      {
        p: "Facebook vs Instagram for business: which one deserves your time? Social media can feel like a full-time job. The good news is that most local businesses only need to do one or two platforms well.",
      },
      { p: FACT.facebookUsers },
      { h2: "Facebook: reach, community and messages" },
      {
        p: "Facebook is still where many customers in Bangladesh look up businesses, read comments and send messages. It suits services that people research before buying, and businesses that rely on enquiries through Messenger.",
      },
      { h2: "Instagram: visuals and younger audiences" },
      {
        p: "Instagram works best when your work looks good in photos and short videos: salons, restaurants, fashion, interiors, events. Reels can reach people who don't follow you yet.",
      },
      { h2: "What to post on either" },
      {
        ul: [
          "Before-and-after photos or short videos of your work.",
          "Answers to questions customers ask you every week.",
          "Customer reviews and stories (with their permission).",
          "Behind-the-scenes posts that show your team and process.",
          "Clear offers with an easy next step: call, WhatsApp or book.",
        ],
      },
      {
        table: {
          caption: "Facebook vs Instagram at a glance",
          head: ["", "Facebook", "Instagram"],
          rows: [
            ["Audience size in Bangladesh", "Very large", "Smaller, younger, urban"],
            ["Best content", "Posts, videos, groups, events", "Reels, carousels, stories"],
            ["Best for", "Most local services, community, messages", "Visual brands: food, fashion, beauty, interiors"],
            ["Messaging", "Messenger and WhatsApp", "DMs and WhatsApp"],
          ],
        },
      },
      { p: `Go deeper with our [Instagram marketing plan](/blog/instagram-marketing-for-business-bangladesh) or [Facebook page management](/blog/facebook-page-management-service).` },
      { p: `Want to turn posts into enquiries? Try [click to WhatsApp ads](/blog/click-to-whatsapp-ads), or let our [social media marketing service](/services/social-media) handle it.` },
      { h2: "Consistency beats volume" },
      {
        p: "Three good posts a week, every week, will do more than a burst of daily posting that stops after a month. Plan a simple monthly calendar, and add a small ad budget behind your best posts to reach people in your area.",
      },
    ],
    faqs: [
      {
        q: "Can I post the same content on both?",
        a: "Yes, with small adjustments: vertical videos and strong visuals for Instagram, and slightly more text and links for Facebook.",
      },
      {
        q: "Which is better for B2B businesses?",
        a: "LinkedIn and Facebook usually work better for B2B in Bangladesh, with Instagram as a supporting channel for visual brands.",
      },
      {
        q: "How often should I post?",
        a: "Three good posts a week on your main platform is a solid, sustainable starting point.",
      },
    ],
    sources: [
      { label: "NapoleonCat: Social media users in Bangladesh", url: SRC.napoleoncat },
    ],
  },
];
