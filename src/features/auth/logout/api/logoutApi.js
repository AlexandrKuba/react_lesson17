import { baseApi } from "@/shared/api/baseApi";
import { apiRoutes } from "@/shared/config/routes/apiRoutes";
export const logoutApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    logout: build.mutation({
      query: () => ({
        url: apiRoutes.auth.logout,
        method: "POST",
      }),
      extraOptions: { skipAuth: true },
    }),
  }),
});
export const { useLogoutMutation } = logoutApi;
