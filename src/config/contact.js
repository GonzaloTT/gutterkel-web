// Provisional public values copied from the existing website; confirm with Gutterkel.
// This module is bundled in the browser. Never put secrets here.
export const contact = {
  phoneDisplay: "442 320 9124",
  phoneInternational: "+524423209124",
  whatsappNumber: "524423209124",
  publicEmail: "ventas@gutterkelmexico.com",
  formRecipient: null, // Confirm separately; do not assume publicEmail is the recipient.
  formCc: null,
  senderName: "Gutterkel México", // Provisional existing brand name.
  senderEmail: null, // Requires an approved sender/domain.
  location: "Querétaro, México",
  address: "Santa Bárbara, El Pueblito, Querétaro.", // Existing, unconfirmed address.
  mapsUrl: null,
  privacyUrl: null, // No published privacy notice has been confirmed.
};

export const contactLinks = {
  phone: `tel:${contact.phoneInternational}`,
  whatsapp: `https://wa.me/${contact.whatsappNumber}`,
  email: `mailto:${contact.publicEmail}`,
};
