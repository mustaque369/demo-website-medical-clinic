export const CLINIC = {
  name: "City Medical Clinic",
  doctor: {
    name: "Dr. Sarah Johnson",
    qualifications: "MD, FACP",
    title: "Senior Consultant Physician",
    shortTitle: "Consultant Physician"
  },
  phone: "+1 (555) 123-4567",
  phoneHref: "tel:+15551234567",
  whatsappUrl: "https://wa.me/15551234567",
  whatsappDefaultText: "Hi, I'd like to book an appointment at City Medical Clinic.",
  email: "info@citymedicalclinic.com",
  address: {
    line1: "123 Healthcare Avenue",
    line2: "Medical District",
    city: "Springfield",
    state: "IL",
    postalCode: "62701",
    country: "USA",
    landmark: "Near Central Hospital",
    full: "123 Healthcare Avenue, Medical District, Springfield, IL 62701, USA"
  },
  coordinates: {
    latitude: 39.7817,
    longitude: -89.6501
  },
  hours: {
    weekdays: "Mon-Fri: 8:00 AM - 6:00 PM",
    sunday: "Closed",
    emergency: "24/7 Emergency Line: +1 (555) 123-4567"
  },
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.123456789!2d-89.6501!3d39.7817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDQ2JzU0LjEiTiA4OcKwMzknMDAuNCJX!5e0!3m2!1sen!2sus!4v1234567890",
  googleMapsUrl: "https://goo.gl/maps/example",
  reviewStats: {
    rating: 4.8,
    count: 247,
    source: "Google Reviews"
  },
  stats: {
    yearsExperience: 15,
    patientsTreated: 12500,
    diagnosticsPerformed: 8900,
    satisfactionRate: 98
  },
  social: {
    facebook: "https://facebook.com/citymedicalclinic",
    instagram: "https://instagram.com/citymedicalclinic",
    twitter: "https://twitter.com/citymedclinic",
    linkedin: "https://linkedin.com/company/citymedicalclinic"
  }
} as const;