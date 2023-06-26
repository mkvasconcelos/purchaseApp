'use client';
import React, { createContext, useState, ReactNode } from 'react';

export const NavContext = createContext<any>(null);

export function NavProvider({ children }: { children: ReactNode }) {
  const [navBar, setNavBar] = useState(false);

  return <NavContext.Provider value={{ navBar, setNavBar }}>{children}</NavContext.Provider>;
}
