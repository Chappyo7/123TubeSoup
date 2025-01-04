import React from 'react';
import { app } from '../lib/firebase/firebaseConfig';

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default AuthProvider;