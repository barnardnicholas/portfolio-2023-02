import { AgencyWork } from '@/types/shared';
import blank from './blank';
import decathlonLeader from './decathlonLeader';
import bolsterSystems from './bolsterSystems';
import suitsMe from './suitsMe';

const agencyWork: Record<string, AgencyWork> = {
  blank,
  [decathlonLeader.slug]: decathlonLeader,
  [bolsterSystems.slug]: bolsterSystems,
  [suitsMe.slug]: suitsMe,
};

export const agencySlugs = Object.keys(agencyWork).filter((key: string) => key !== 'blank');

export default agencyWork;
