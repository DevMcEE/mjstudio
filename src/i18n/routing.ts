import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';
import { config } from './config';

export const routing = defineRouting(config);

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);