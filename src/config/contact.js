// Public contact details verified against the local official technical sheets.
// This module is bundled in the browser. Never put secrets here.
export const contact = {
  phoneDisplay: "+52 442 320 9124",
  phoneInternational: "+524423209124",
  whatsappNumber: "524424934252",
  whatsappDisplay: "+52 442 493 4252",
  officeDisplay: "+52 442 254 6698",
  officeInternational: "+524422546698",
  publicEmail: "ventas@gutterkelmexico.com",
  formRecipient: null, // Confirm separately; do not assume publicEmail is the recipient.
  formCc: null,
  senderName: "Gutterkel México", // Provisional existing brand name.
  senderEmail: null, // Requires an approved sender/domain.
  location: "Querétaro, México",
  address: "Álvaro Obregón No. 35, Col. Santa Bárbara, Corregidora, Querétaro, C.P. 76906",
  mapsUrl: null,
  privacyUrl: null, // No published privacy notice has been confirmed.
};

export const contactLinks = {
  phone: `tel:${contact.phoneInternational}`,
  office: `tel:${contact.officeInternational}`,
  whatsapp: `https://wa.me/${contact.whatsappNumber}`,
  email: `mailto:${contact.publicEmail}`,
};
