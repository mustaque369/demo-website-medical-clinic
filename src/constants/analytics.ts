export const ANALYTICS = {
  plausibleDomain: import.meta.env.PUBLIC_PLAUSIBLE_DOMAIN || '',
  ga4MeasurementId: import.meta.env.PUBLIC_GA4_ID || '',
  // NOTE: import.meta.env.PROD is a boolean, not a string. Comparing it against
  // 'true' was always false, so the consent gate could never activate.
  enableConsentBanner: import.meta.env.PROD,
} as const;
