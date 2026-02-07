export const formatErrors = (error) => {
  if (!error) return "An unknown error occurred. try again!";

  // Handle by error code (most reliable)
  if (error.code) {
    const errorMessages = {
      // Rate limiting
      over_email_send_rate_limit:
        "Too many registration attempts. Please try again in an hour.",

      // Auth errors
      user_already_exists:
        "This email is already registered. Please login instead.",
      email_exists: "This email is already registered. Please login instead.",
      invalid_credentials: "Invalid email or password.",
      email_not_confirmed: "Please check your email and confirm your account.",
      weak_password: "Password must be at least 6 characters long.",
      invalid_email: "Please enter a valid email address.",
      signup_disabled: "Registration is currently disabled.",
      email_provider_disabled: "Email registration is not available.",

      // Database errors (PostgreSQL codes)
      23505: "This email is already in use.",
      23502: "All required fields must be filled.",
      23503: "Invalid data reference.",
      23514: "Data does not meet requirements.",
      42501: "Permission denied.",
      PGRST116: "No permission to perform this action.",
    };

    return errorMessages[error.code] || error.message || "An error occurred";
  }

  // Handle by message (fallback)
  if (error.message) {
    const message = error.message.toLowerCase();

    if (message.includes("rate limit")) {
      return "Too many attempts. Please try again later.";
    }
    if (message.includes("already registered")) {
      return "This email is already registered. Please login instead.";
    }
    if (message.includes("invalid login")) {
      return "Invalid email or password.";
    }
    if (message.includes("email not confirmed")) {
      return "Please verify your email address.";
    }

    return error.message;
  }

  return "An error occurred";
};
// console.log(error, "format");

// let errorMessage = "";
// // 1. Fetch API Errors (No response property)
// // so we check like this :
// if (!error) return;
// if (typeof error === "string") {
//   errorMessage = error;
//   return;
// }

// if (!error.response) {
//   if (error.message?.includes("Failed to fetch")) {
//     errorMessage =
//       "Unable to connect. Please check your internet connection.";
//   } else if (error.message?.includes("NetworkError")) {
//     errorMessage = "Network error. Please try again.";
//   } else if (error.message?.includes("timeout")) {
//     errorMessage = "Request timed out. Please try again.";
//   } else if (error.message) {
//     errorMessage = error.message;
//   } else {
//     errorMessage = "Connection failed. Please try again.";
//   }
// } else {
//   //   if there are errors coming with response
//   const { status, data } = error.response;
//   switch (status) {
//     case 400:
//       if (data.errors && typeof data.errors === "object") {
//         Object.keys(data.errors).forEach((error) => {
//           errorMessage += data.errors[error];
//         });
//       } else {
//         errorMessage = data.message || "Invalid data provided";
//       }
//       break;
//     case 401:
//       errorMessage =
//         data.message || "Authentication failed. Please login again.";
//       break;
//     case 403:
//       errorMessage =
//         data.message || "You do not have permission to perform this action.";
//       break;
//     case 404:
//       errorMessage = "Service not found. Please contact support.";
//       break;
//     case 409:
//       errorMessage = data.message;
//       break;
//     case 429:
//       let retryMinutes = data.retryAfter
//         ? Math.ceil(data.retryAfter / 60)
//         : 15;
//       errorMessage =
//         data.message ||
//         `Too many attempts. Please try again in ${retryMinutes} minutes.`;
//       break;
//     case 500:
//     case 502:
//     case 503:
//       errorMessage = "Server error. Please try again later.";
//       break;
//     default:
//       errorMessage = data.message || "An unexpected error occurred";
//       break;
//   }
// }

// return errorMessage;
