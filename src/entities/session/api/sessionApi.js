import { baseApi } from "@/shared/api/baseApi";
import { apiRoutes } from "@/shared/config/routes/apiRoutes";
// Лише "refresh" — це не дія користувача (немає форми чи кнопки),
// а фонове відновлення сесії при старті застосунку та в route-guard'і.
export const sessionApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    refresh: build.mutation({
      query: () => ({
        url: apiRoutes.auth.refresh,
        method: "POST",
      }),
      extraOptions: { skipAuth: true },
    }),
  }),
});
export const { useRefreshMutation } = sessionApi;
