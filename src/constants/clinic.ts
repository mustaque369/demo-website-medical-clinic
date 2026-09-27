export const CLINIC = {
  name: "Dr. Rajib Das Neurological Clinic & Brain Center",
  doctor: {
    name: "Dr. Rajib Das",
    qualifications: "MBBS, MD (Neurology)",
    title: "Consultant Neurologist & Clinical Neurophysiologist",
    shortTitle: "Neurologist & Neurophysiologist"
  },
  phone: "+91 90000 00000",
  phoneHref: "tel:+919000000000",
  whatsappUrl: "https://wa.me/919000000000",
  whatsappDefaultText: "Hello Dr. Rajib Das Clinic, I would like to schedule a neurology consultation.",
  email: "info@drrajibdasclinic.com",
  address: {
    line1: "Suite 402, Apex Neurosciences Center",
    line2: "Park View Medical Enclave, Main Arterial Road",
    city: "Metro City",
    state: "State",
    postalCode: "700001",
    country: "IN",
    landmark: "Opposite City Health Park, 4th Floor",
    full: "Suite 402, Apex Neurosciences Center, Park View Medical Enclave, Main Arterial Road, Metro City, 700001"
  },
  coordinates: {
    latitude: "22.5726",
    longitude: "88.3639"
  },
  hours: {
    weekdays: "Monday – Saturday: 9:00 AM – 7:00 PM",
    sunday: "Sunday: Closed for Routine OPD (Emergency On-Call)",
    emergency: "Emergency on-call available 24/7"
  },
  googleMapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117925.21689648937!2d88.26495046206148!3d22.535564937497746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  googleMapsUrl: "https://maps.google.com",
  reviewStats: {
    rating: "4.9",
    count: "248+",
    source: "Google Reviews"
  },
  stats: {
    yearsExperience: "15+",
    patientsTreated: "12,500+",
    diagnosticsPerformed: "3,800+",
    satisfactionRate: "99%"
  },
  social: {
    // Add when available
  }
} as const;