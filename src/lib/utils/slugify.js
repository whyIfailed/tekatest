// src/lib/utils/slugify.js
//@ts-ignore
export function slugify(text) {
  // 1. Convert to a standard string and lowercase
  let slug = text.toString().toLowerCase().trim();

  // 🔑 FIX: Transliteration for Vietnamese and other non-ASCII characters
  // This converts 'công việc' to 'cong viec'
  slug = slug.normalize('NFD') // Decompose combined characters (e.g., 'é' -> 'e' + accent)
             .replace(/[\u0300-\u036f]/g, "") // Remove the accents (the diacritics)
             .replace(/đ/g, 'd') // Specifically handle the Vietnamese 'đ'
             .replace(/[^a-z0-9\s-]/g, ''); // Remove remaining non-alphanumeric chars (besides spaces and hyphens)

  // 2. Apply standard slug rules (replacing spaces, cleaning hyphens)
  slug = slug
    .replace(/\s+/g, '-')      // Replace spaces with hyphens
    .replace(/\-\-+/g, '-')    // Collapse multiple hyphens
    .replace(/^-+/, '')        // Remove leading hyphens
    .replace(/-+$/, '');       // Remove trailing hyphens

  return slug;
}