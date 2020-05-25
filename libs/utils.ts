import { ActiveDomains, Contributor } from './types';

const ACTIVE_DOMAINS_URI = process.env.NEXT_PUBLIC_ACTIVE_DOMAINS_URI;
const CONTRIBUTORS_URI = process.env.NEXT_PUBLIC_CONTRIBUTORS_URI;

export const getActiveDomains = async (): Promise<ActiveDomains> => {
  try {
    const res = await fetch(ACTIVE_DOMAINS_URI);
    return await res.json();
  } catch (e) {
    console.error(e);
    return {};
  }
};

export const getContributors = async (): Promise<Contributor[]> => {
  try {
    const res = await fetch(CONTRIBUTORS_URI);
    return await res.json();
  } catch (e) {
    console.error(e);
    return [];
  }
};