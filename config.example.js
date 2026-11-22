/**
 * Public Runtime Configuration Example for GitHub Pages / Static Hosting
 *
 * IMPORTANT SECURITY NOTE:
 * - SUPABASE_ANON_KEY (Publishable Key) is public by design.
 * - NEVER place SUPABASE_SERVICE_ROLE_KEY or any private secret here.
 * - All data protection MUST be enforced by PostgreSQL RLS policies,
 *   SECURITY DEFINER RPC functions, and Supabase Edge Functions (/sql/*).
 *
 * Deployment:
 *   Copy this file to `public/config.js` (or set VITE_SUPABASE_URL and
 *   VITE_SUPABASE_ANON_KEY at build time) before deploying.
 */
window.APP_CONFIG = Object.freeze({
  SUPABASE_URL: 'https://YOUR_PROJECT_REF.supabase.co',
  SUPABASE_ANON_KEY: 'YOUR_SUPABASE_PUBLISHABLE_ANON_KEY',
  DISCORD_INVITE_URL: 'https://discord.gg/YOUR_SCHOOL_INVITE',
  CONTACT_EMAIL: 'league.students@mss.edu',
});
