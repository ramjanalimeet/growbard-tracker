import type { Service } from "@/lib/site";

// A post body is a list of simple blocks so articles can be written here
// without a CMS or Markdown tooling.
export type Block = { h2: string } | { p: string } | { ul: string[] };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  icon: Service["icon"];
  date: string; // YYYY-MM-DD
  readMinutes: number;
  body: Block[];
};

export const POSTS: Post[] = [
  {
    slug: "rank-in-google-map-pack-dhaka",
    title: "How to Rank Your Business in the Google Map Pack in Dhaka",
    excerpt:
      "The three businesses shown on the map at the top of Google get most of the calls. Here's what decides who gets those spots, and what you can do about it.",
    category: "Local SEO",
    icon: "pin",
    date: "2026-10-20",
    readMinutes: 6,
    body: [
      {
        p: "Search for \"dentist near me\" or \"AC repair Mirpur\" and Google shows a map with three businesses under it. This is the Map Pack, and for most local searches it gets more clicks than everything below it. If your business isn't in those three spots, most customers searching for you will never see you.",
      },
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
      { h2: "How long does it take?" },
      {
        p: "In less competitive areas, a well-optimized profile can start moving within a few weeks. In busy categories in central Dhaka it usually takes a few months of steady work on reviews, citations and content. The businesses that win are the ones that keep at it every month.",
      },
    ],
  },
  {
    slug: "google-business-profile-checklist",
    title: "Google Business Profile Checklist: 12 Things to Complete Today",
    excerpt:
      "A complete Google Business Profile gets more calls, direction requests and website visits. Use this checklist to find the gaps in yours.",
    category: "Local SEO",
    icon: "pin",
    date: "2026-10-14",
    readMinutes: 4,
    body: [
      {
        p: "Your Google Business Profile is often the first thing a customer sees, before your website or Facebook page. Google also favours complete, accurate profiles in local results. Go through this list and fix anything that's missing.",
      },
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
      { h2: "Keep it up to date" },
      {
        p: "A profile is not a one-time job. Set a weekly reminder to add a post and a few new photos, and check your hours before every holiday. Small, regular updates keep your profile fresh in Google's eyes and in your customers'.",
      },
    ],
  },
  {
    slug: "do-you-need-a-website-if-you-have-facebook",
    title: "Do You Need a Website If You Already Have a Facebook Page?",
    excerpt:
      "Many local businesses in Bangladesh run entirely on Facebook. It works, until it doesn't. Here's what a website adds that a page can't.",
    category: "Website Development",
    icon: "code",
    date: "2026-10-08",
    readMinutes: 5,
    body: [
      {
        p: "Facebook is a great place to reach customers, and for many businesses it's where most messages come from. But a Facebook page is rented space: you don't control how many people see your posts, and you can't shape how your business appears on Google.",
      },
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
      { h2: "Use both" },
      {
        p: "The best approach is to use Facebook to stay in touch with your community and your website to get found on Google and turn searchers into customers. Each one makes the other work better.",
      },
    ],
  },
  {
    slug: "google-ads-for-local-businesses",
    title: "Google Ads for Local Businesses: How to Stop Wasting Your Budget",
    excerpt:
      "Google Ads can bring calls from day one, or burn through your budget with nothing to show. These settings make the difference.",
    category: "Google Ads",
    icon: "ads",
    date: "2026-09-30",
    readMinutes: 5,
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
      { h2: "Measure what matters" },
      {
        p: "Clicks and impressions don't pay the bills. Judge your ads on cost per lead and, where you can, cost per customer. Once you know those numbers, you can confidently put more budget behind what works.",
      },
    ],
  },
  {
    slug: "facebook-vs-instagram-for-local-business",
    title: "Facebook vs Instagram: Where Should Your Local Business Post?",
    excerpt:
      "You don't have to be everywhere. Here's how to decide where to spend your social media time, and what to post once you do.",
    category: "Social Media Marketing",
    icon: "social",
    date: "2026-09-22",
    readMinutes: 4,
    body: [
      {
        p: "Social media can feel like a full-time job. The good news is that most local businesses only need to do one or two platforms well.",
      },
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
      { h2: "Consistency beats volume" },
      {
        p: "Three good posts a week, every week, will do more than a burst of daily posting that stops after a month. Plan a simple monthly calendar, and add a small ad budget behind your best posts to reach people in your area.",
      },
    ],
  },
];

export const POST_CATEGORIES = [...new Set(POSTS.map((p) => p.category))];

export function getPost(slug: string) {
  return POSTS.find((p) => p.slug === slug);
}

export function formatDate(date: string) {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
