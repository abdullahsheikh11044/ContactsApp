import { apiSlice } from "../../app/api/apiSlice";
// import { apiRoutes } from "../../constants/Constants";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: { ...credentials },
      }),
      transformResponse: (response) => ({
        access: response.accessToken,
        // refresh: response.refresh,
      }),
      transformErrorResponse: (response) => ({
        response: response.data.detail,
      }),
    }),
    signup: builder.mutation({
      query: (body) => ({
        url: "/register",
        method: "POST",
        body: { ...body },
      }),
      transformResponse: (response) => ({
        message: response.message,
        email: response.email,
        status: response.status,
      }),
      transformErrorResponse: (response) => ({
        status: response.status,
        error: response.data,
        message: response.data?.message,
      }),
    }),
    current: builder.query({
      query: () => ({
        url: "/current",
        method: "GET",
      }),
      transformResponse: (response) => console.log(response),
      //   ({
      //     message: response.message,
      //     email: response.email,
      //     status: response.status,
      //   }),
      //   transformErrorResponse: (response) => ({
      //     status: response.status,
      //     error: response.data,
      //     message: response.data?.message,
      //   }),
    }),
    // signupVerify: builder.mutation({
    //   query: (data) => ({
    //     url: apiRoutes.signup_verify,
    //     method: "POST",
    //     body: { ...data },
    //   }),
    //   transformResponse: (response) => ({
    //     status: response.status,
    //     message: response.message,
    //   }),
    //   transformErrorResponse: (response) => ({
    //     status: response.status,
    //     error: response.data,
    //     message: response.data?.message,
    //   }),
    // }),
    // socialAuth: builder.mutation({
    //   query: (data) => ({
    //     url: apiRoutes.social_auth,
    //     method: "POST",
    //     body: { ...data },
    //   }),
    //   transformResponse: (response) => ({
    //     access: response.access,
    //     refresh: response.refresh,
    //     email: response.email,
    //   }),
    //   transformErrorResponse: (response) => ({
    //     status: response.status,
    //     error: response.data,
    //   }),
    // }),
    // logout: builder.mutation({
    //   query: (data) => {
    //     return {
    //       url: apiRoutes.logout,
    //       method: "POST",
    //       body: { ...data },
    //     };
    //   },
    //   transformResponse: (response) => ({
    //     message: response.message,
    //     status: response.status,
    //   }),
    //   transformErrorResponse: (response) => ({
    //     detail: response,
    //     message: response.message,
    //     status: response.status,
    //   }),
    // }),
    // loginRefresh: builder.mutation({
    //   query: (refreshToken) => {
    //     return {
    //       url: apiRoutes.login_refresh,
    //       method: "POST",
    //       body: { ...refreshToken },
    //     };
    //   },
    //   transformResponse: (response) => ({
    //     access: response.access,
    //     refresh: response.refresh,
    //   }),
    //   transformErrorResponse: (response) => ({
    //     ...response,
    //   }),
    // }),
  }),
});

export const {
  useLoginMutation,
  useSignupMutation,
  useCurrentQuery,
  //   useSignupVerifyMutation,
  //   useSocialAuthMutation,
  //   useLogoutMutation,
  //   useLoginRefreshMutation,
} = authApiSlice;
