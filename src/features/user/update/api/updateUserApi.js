import { baseApi } from "@/shared/api/baseApi";
import { apiRoutes } from "@/shared/config/routes/apiRoutes";
export const updateUserApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    updateUser: build.mutation({
      query: ({ id, data }) => ({
        url: `${apiRoutes.users}/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});
export const { useUpdateUserMutation } = updateUserApi;
