import { StateCreator, create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import type { AuthUser } from '@/interfaces/auth.interfaces';
import { checkAuth, login } from '@/services/auth.services';
import { ILoginForm } from '@/components/LoginForm';

export interface AuthSlice {
  user?: AuthUser;
  isLoggingIn: boolean;
  isCheckingAuth: boolean;

  onLogin: (loginData: ILoginForm) => void;
  onLogout: () => void;
  onCheckAuth: () => void;
}

export const createAuthSlice: StateCreator<AuthSlice, [['zustand/immer', never]]> = (
  set
) => ({
  user: undefined,
  isLoggingIn: false,
  isCheckingAuth: false,

  onLogin: async (loginData) => {
    try {
      set((state) => {
        state.isLoggingIn = true;
      });

      const users = await login(loginData);

      if (!users.length) throw new Error('The credentials you entered are incorrect');

      const loggedInUser = {
        id: users[0].id,
        username: users[0].username,
        email: users[0].email,
        isAdmin: users[0].isAdmin,
      };

      localStorage.setItem('user', JSON.stringify(loggedInUser));

      set((state) => {
        state.user = loggedInUser;
      });
    } catch (error) {
      alert(error);
    } finally {
      set((state) => {
        state.isLoggingIn = false;
      });
    }
  },

  onLogout: () => {
    localStorage.removeItem('user');
    set((state) => {
      state.user = undefined;
    });
  },

  onCheckAuth: async () => {
    const localStorageUser = localStorage.getItem('user');
    if (!localStorageUser) return;

    const user = JSON.parse(localStorageUser) as AuthUser;

    try {
      set((state) => {
        state.isCheckingAuth = true;
      });

      const users = await checkAuth(user.id, user.email);

      if (!users.length) throw new Error('Unauthorized user');

      const loggedInUser = {
        id: users[0].id,
        username: users[0].username,
        email: users[0].email,
        isAdmin: users[0].isAdmin,
      };

      set((state) => {
        state.user = loggedInUser;
      });
    } catch (error) {
      localStorage.removeItem('userId');
      alert(error);
    } finally {
      set((state) => {
        state.isCheckingAuth = false;
      });
    }
  },
});

export const useAuthStore = create<AuthSlice>()(immer(createAuthSlice));
