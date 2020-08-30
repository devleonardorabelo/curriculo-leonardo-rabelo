import React, { createContext, useState, useEffect } from 'react';
import { ComponentProps } from '../../types';

import LoadProfileGithub from '../../services/loadProfileInfo';

const ProfileContext = createContext(null);

export const ProfileProvider: React.FC = ({ children }: ComponentProps) => {
  const [profile, setProfile] = useState({});

  const loadProfileInfo = async () => {
    const data = await LoadProfileGithub('devleonardorabelo');
    setProfile(data.body);
  };

  useEffect(() => {
    loadProfileInfo();
  }, []);

  return (
    <ProfileContext.Provider value={profile}>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileContext;
