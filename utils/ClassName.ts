import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Tailwind sınıflarını güvenli bir şekilde birleştirir.
 * Çakışmaları çözer (twMerge) ve koşullu sınıfları yönetir (clsx).
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}