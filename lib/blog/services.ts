import { ADS_SOCIAL_POSTS } from "@/lib/blog/services-ads-social";
import { LOCAL_WEB_POSTS } from "@/lib/blog/services-local-web";

// Articles built around each Growbard service, targeting buying-intent searches.
export const SERVICE_POSTS = [...LOCAL_WEB_POSTS, ...ADS_SOCIAL_POSTS];
