import { baseApi } from "@/shared/api/baseApi";
import { apiRoutes } from "@/shared/config/routes/apiRoutes";
export const deleteCommentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    deleteComment: build.mutation({
      query: (id) => ({
        url: `${apiRoutes.comments}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result) => [{ type: "Comment", id: result?.postId }],
    }),
  }),
});
export const { useDeleteCommentMutation } = deleteCommentApi;
