import React, { createContext, useState } from 'react';

const ProfileContext = createContext();

function ProfileProvider({ children }) {
  const [stateA, setStateA] = useState('initialStateA');
  const contextValue = {
    stateA,
    setStateA,
  };

  return (
    <ProfileContext.Provider value={ contextValue }>
      { children }
    </ProfileContext.Provider>
  );
}

export default ProfileProvider;