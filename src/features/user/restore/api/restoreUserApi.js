import { baseApi } from "@/shared/api/baseApi";
import { apiRoutes } from "@/shared/config/routes/apiRoutes";
export const restoreUserApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    restoreUser: build.mutation({
      query: (id) => ({
        url: `${apiRoutes.users}/${id}/restore`,
        method: "POST",
      }),
      invalidatesTags: ["User"],
    }),
  }),
});
export const { useRestoreUserMutation } = restoreUserApi;
