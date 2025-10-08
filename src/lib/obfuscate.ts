/**
 * Email obfuscation utilities to prevent bot scraping
 * while maintaining functionality for legitimate users
 */

/**
 * Obfuscates an email address by encoding it
 * @param email - The email address to obfuscate
 * @returns Base64 encoded email
 */
export const obfuscateEmail = (email: string): string => {
  return btoa(email);
};

/**
 * Deobfuscates an email address
 * @param obfuscated - The obfuscated email
 * @returns Original email address
 */
export const deobfuscateEmail = (obfuscated: string): string => {
  try {
    return atob(obfuscated);
  } catch {
    return '';
  }
};

/**
 * Creates a mailto link with obfuscated email
 * This helps prevent email harvesting bots
 */
export const createMailtoLink = (
  obfuscatedEmail: string,
  subject?: string,
  body?: string
): string => {
  const email = deobfuscateEmail(obfuscatedEmail);
  let mailto = `mailto:${email}`;
  
  const params = new URLSearchParams();
  if (subject) params.append('subject', subject);
  if (body) params.append('body', body);
  
  const queryString = params.toString();
  if (queryString) {
    mailto += `?${queryString}`;
  }
  
  return mailto;
};

/**
 * Display email in a human-readable but bot-resistant format
 * Example: "user [at] domain [dot] com"
 */
export const displayObfuscatedEmail = (email: string): string => {
  return email.replace('@', ' [at] ').replace(/\./g, ' [dot] ');
};

/**
 * ROT13 cipher for simple email obfuscation in HTML
 * More secure than plain text, decoded by JavaScript
 */
export const rot13 = (str: string): string => {
  return str.replace(/[a-zA-Z]/g, (char) => {
    const start = char <= 'Z' ? 65 : 97;
    return String.fromCharCode(((char.charCodeAt(0) - start + 13) % 26) + start);
  });
};
