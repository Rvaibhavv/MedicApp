import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  const updateUserData = (data) => {
    setUserData(data);
    console.log('User Data Updated in Context:', data); // Log when data is set
  };

  console.log('Current User Data:', userData); // Log the current user data

  return (
    <UserContext.Provider value={{ userData, setUserData: updateUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
