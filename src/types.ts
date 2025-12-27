import type { LucideIcon } from 'lucide-react';

// Mouse position tracking
export interface MousePosition {
  x: number;
  y: number;
}

// Engineering principle card
export interface Principle {
  icon: LucideIcon;
  text: string;
}

// Email form submission response
export interface EmailSubmissionResponse {
  success: boolean;
  message?: string;
  error?: string;
}

// Beta signup data
export interface BetaSignup {
  email: string;
  timestamp: Date;
  source?: string;
}
