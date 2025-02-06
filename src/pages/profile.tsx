import { useIsMobile } from '../hooks/useIsMobile';
import { ProfilePageDesktop } from './desktop';
import { ProfilePageMobile } from './mobile';

export const ProfilePage = () => {
  const isMobile = useIsMobile();

  if (isMobile) return <ProfilePageMobile />;

  return <ProfilePageDesktop />;
};
