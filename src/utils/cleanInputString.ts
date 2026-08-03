export const cleanInputString = (value?: string): string | undefined =>
    typeof value === 'string' ? value.trim().replace(/\s+/g, ' ') : value;

export const cleanOptionalInputString = (value?: string): string | undefined =>
    cleanInputString(value) || undefined;
