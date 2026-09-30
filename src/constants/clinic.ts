/**
 * Single source of truth for every clinic detail used across the site.
 * Never hardcode a phone number, address, or map link inside a page/component —
 * import it from here so the whole site stays consistent.
 */
const COORDINATES = { latitude: "22.5726", longitude: "88.3639" } as const;

const PHONE_DIGITS = "919000000000";
const PHONE_DISPLAY = "+91 90000 00000";
const WHATSAPP_NUMBER = "919000000000";

export const CLINIC = {
  name: "Dr. Kanika Neurological Clinic & Brain Center",
  doctor: {
    name: "Dr. Kanika",
    qualifications: "MBBS, MD (Neurology)",
    title: "Consultant Neurologist & Clinical Neurophysiologist",
    shortTitle: "Neurologist & Neurophysiologist",
  },
  phone: PHONE_DISPLAY,
  phoneHref: `tel:+${PHONE_DIGITS}`,
  whatsappUrl: `https://wa.me/${WHATSAPP_NUMBER}`,
  whatsappDefaultText: "Hello Dr. Kanika Clinic, I would like to schedule a neurology consultation.",
  email: "info@drrajibdasclinic.com",
  address: {
    line1: "Suite 402, Apex Neurosciences Center",
    line2: "Park View Medical Enclave, Main Arterial Road",
    city: "Metro City",
    state: "State",
    postalCode: "700001",
    country: "IN",
    landmark: "Opposite City Health Park, 4th Floor",
    full: "Suite 402, Apex Neurosciences Center, Park View Medical Enclave, Main Arterial Road, Metro City, 700001",
  },
  coordinates: COORDINATES,
  hours: {
    weekdays: "Monday – Saturday: 9:00 AM – 7:00 PM",
    sunday: "Sunday: Closed for Routine OPD (Emergency On-Call)",
    emergency: "Emergency on-call available 24/7",
  },
  googleMapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117925.21689648937!2d88.26495046206148!3d22.535564937497746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  /** Canonical "get directions" target — used by every map link on the site. */
  googleMapsUrl: `https://www.google.com/maps/dir/?api=1&destination=${COORDINATES.latitude},${COORDINATES.longitude}`,
  reviewStats: {
    rating: "4.9",
    count: "248+",
    source: "Google Reviews",
  },
  stats: {
    yearsExperience: "15+",
    patientsTreated: "12,500+",
    diagnosticsPerformed: "3,800+",
    satisfactionRate: "99%",
  },
  social: {
    // Add when available
  },
} as const;

/** Builds a WhatsApp deep link pre-filled with an arbitrary message. */
export function whatsappLink(message: string = CLINIC.whatsappDefaultText): string {
  return `${CLINIC.whatsappUrl}?text=${encodeURIComponent(message)}`;
}

