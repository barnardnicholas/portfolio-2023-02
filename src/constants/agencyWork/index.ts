import { AgencyWorkItem } from '@/types/shared';
import blank from './blank';
// import decathlonLeader from './decathlonLeader';
import bolsterSystems from './bolsterSystems';
import suitsMe from './suitsMe';
import boundaryOutlet from './boundaryOutlet';

const agencyWork: Record<string, AgencyWorkItem> = {
  blank,
  [suitsMe.slug]: suitsMe,
  [bolsterSystems.slug]: bolsterSystems,
  [boundaryOutlet.slug]: boundaryOutlet,
  // [decathlonLeader.slug]: decathlonLeader,
};

export const agencySlugs = Object.keys(agencyWork).filter((key: string) => key !== 'blank');

export default agencyWork;
