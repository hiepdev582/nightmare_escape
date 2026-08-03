import type { AuthResponse } from "~/types/api";

export const useAuthStore = defineStore("auth", () => {
  const token = ref<string | null>(null);
  const userInfo = ref<Partial<AuthResponse> | null>(null);

  const isLoggedIn = computed(() => !!token.value);

  const setAuth = (data: AuthResponse) => {
    token.value = data.token;
    userInfo.value = {
      username: data.username,
      email: data.email,
    };
  };

  const clearAuth = () => {
    token.value = null;
    userInfo.value = null;
    navigateTo(ROUTES.AUTH.LOGIN);
  };

  return {
    token,
    userInfo,
    isLoggedIn,
    setAuth,
    clearAuth,
  };
});
