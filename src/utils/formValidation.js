export const solutionOptions = [
  "Canalón continuo", "Cubre Pretil / Goterón", "Techos Falsos / Plafones",
  "Sistema de Anclaje", "Aislante Térmico", "Otro",
];
export const projectTypes = {
  residential: "Residencial", commercial: "Comercial", industrial: "Industrial",
  corporate: "Corporativo", other: "Otro",
};
export const fieldLimits = {
  name: 120, company: 160, phone: 60, email: 254, location: 180,
  projectType: 30, details: 5000, turnstileToken: 2048,
};
export const emptyContactForm = {
  name: "", company: "", phone: "", email: "", location: "",
  projectType: "", solutions: [], details: "",
};

export function normalizeText(value, multiline = false) {
  if (typeof value !== "string") return "";
  const text = value.replace(/\r\n?/g, "\n").trim();
  return multiline ? text : text.replace(/\s+/g, " ");
}

export function validateRequiredText(value, maxLength, required = true) {
  if (typeof value !== "string") return "Introduce un texto válido.";
  if (required && !value.trim()) return "Este campo es obligatorio.";
  if (value.length > maxLength) return `Utiliza como máximo ${maxLength} caracteres.`;
  if ([...value].some((character) => {
    const code = character.charCodeAt(0);
    return (code < 32 && ![9, 10, 13].includes(code)) || code === 127;
  })) return "El texto contiene caracteres no permitidos.";
  return null;
}

// Pure shared contract: browser and Pages Function run exactly the same validation.
export function validateContactPayload(input) {
  if (!input || typeof input !== "object" || Array.isArray(input)) {
    return { valid: false, data: null, errors: { form: "La solicitud debe ser un objeto JSON." } };
  }
  const errors = {};
  const data = {};
  const allowed = [...Object.keys(fieldLimits), "solutions"];
  if (Object.keys(input).some((key) => !allowed.includes(key))) errors.form = "La solicitud contiene campos desconocidos.";
  for (const [field, limit] of Object.entries(fieldLimits)) {
    const optional = field === "company" || field === "turnstileToken";
    const raw = input[field] === undefined && optional ? "" : input[field];
    const error = validateRequiredText(raw, limit, !optional);
    if (error) errors[field] = error;
    data[field] = normalizeText(raw, field === "details");
  }
  if (!errors.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = "Introduce un correo electrónico válido.";
  const digits = data.phone.replace(/\D/g, "");
  if (!errors.phone && (!/^[+\d().\s#x-]+(?:\s*ext\.?\s*\d+)?$/i.test(data.phone) || digits.length < 7 || digits.length > 22)) {
    errors.phone = "Introduce un teléfono válido, incluyendo la lada si corresponde.";
  }
  if (!errors.projectType && !Object.hasOwn(projectTypes, data.projectType)) errors.projectType = "Selecciona un tipo de proyecto válido.";
  if (!Array.isArray(input.solutions) || input.solutions.length < 1 || input.solutions.length > solutionOptions.length ||
      input.solutions.some((value) => typeof value !== "string" || !solutionOptions.includes(value.trim()))) {
    errors.solutions = "Selecciona al menos una solución válida.";
    data.solutions = [];
  } else {
    data.solutions = [...new Set(input.solutions.map((value) => value.trim()))];
  }
  return { valid: Object.keys(errors).length === 0, data, errors };
}
