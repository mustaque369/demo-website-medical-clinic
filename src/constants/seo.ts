import { CLINIC } from './clinic';

export const defaultTitle = `${CLINIC.doctor.name}, ${CLINIC.doctor.qualifications} | Neurologist & Brain Specialist` as const;

export const defaultDescription =
  `Expert neurological care by ${CLINIC.doctor.name}, ${CLINIC.doctor.qualifications}. Specialized treatment for Stroke, Migraine, Epilepsy, Parkinson's, Nerve Pain, EEG & EMG diagnostics. Book an appointment or WhatsApp today.` as const;

export const siteName = CLINIC.name;

export const ogImage =
  'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1200&h=630&q=80' as const;

/** Matches --color-teal-deep (#0c4a8a) so mobile browser chrome stays on-brand. */
export const themeColor = '#0c4a8a' as const;
