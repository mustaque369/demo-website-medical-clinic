export const ANALYTICS = {
  plausibleDomain: import.meta.env.PUBLIC_PLAUSIBLE_DOMAIN || '',
  ga4MeasurementId: import.meta.env.PUBLIC_GA4_ID || '',
  enableConsentBanner: import.meta.env.PROD === 'true',
} as const;
