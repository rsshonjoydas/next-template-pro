const env = {
  APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000/',
  NODE_ENV: process.env.NEXT_PUBLIC_NODE_ENV || 'production',
  NAME: process.env.NEXT_PUBLIC_NAME || 'Shonjoy',
  EMAIL: process.env.NEXT_PUBLIC_EMAIL || 'rsshonjoy@gmail.com',
  PHONE: process.env.NEXT_PUBLIC_PHONE || '+880 1311 401 701',
  ADDRESS: process.env.NEXT_PUBLIC_ADDRESS || 'Dhaka, Bangladesh',
  TWITTER_URL: process.env.NEXT_PUBLIC_TWITTER_URL || 'rsshonjoydas',
  GITHUB_URL: process.env.NEXT_PUBLIC_GITHUB_URL || 'rsshonjoydas',
};

export default env;
