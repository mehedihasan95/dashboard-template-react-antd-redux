export type LoginTypes = {
  email: string;
  password: string;
};

export type AuthError = {
  status:
    | number
    | "FETCH_ERROR"
    | "CUSTOM_ERROR"
    | "PARSING_ERROR"
    | "TIMEOUT_ERROR";
  data: {
    success: boolean;
    message: string;
  };
};
