export function formatINR(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}

export function createWhatsAppLink(message?: string): string {
  const phone = '919633403404';
  const defaultText = 'Hello Dayoff Journeys! I would like to inquire about customized travel packages.';
  const encodedText = encodeURIComponent(message || defaultText);
  return `https://wa.me/${phone}?text=${encodedText}`;
}

export function classNames(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}
