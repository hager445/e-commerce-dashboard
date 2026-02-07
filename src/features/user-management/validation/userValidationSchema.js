export const userRegisterValidation = {
  name: {
    required: "Name is required",
    minLength: {
      value: 3,
      message: "Name must be at least 3 characters",
    },
    maxLength: {
      value: 30,
      message: "Name must not exceed 30 characters",
    },

    pattern: {
      value: /^[a-zA-Z\s'-]+$/,
      message: "Name can only contain letters, spaces, hyphens and apostrophes",
    },
    validate: {
      noMultipleSpaces: (value) =>
        !/\s{2,}/.test(value) ||
        "Name cannot contain multiple consecutive spaces",
      trimmed: (value) =>
        value.trim() === value || "Name cannot start or end with spaces",
    },
  },

  email: {
    required: "Email is required",
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: "Please enter a valid email address",
    },

    maxLength: {
      value: 254,
      message: "Email is too long",
    },
  },

  password: {
    required: "Password is required",
    minLength: {
      value: 8,
      message: "Password must be at least 8 characters",
    },
    maxLength: {
      value: 128,
      message: "Password must not exceed 128 characters",
    },
    pattern: {
      value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])/,
      message:
        "Password must include uppercase, lowercase, number and special character",
    },
  },

  confirmPassword: {
    required: "Please confirm your password",
    validate: (value, formValues) =>
      value === formValues.password || "Passwords do not match",
  },
  role: {
    required: "Please select a role",
    validate: (value) => {
      const validRoles = ["ADMIN", "USER", "CUSTOMER"];
      return validRoles.includes(value) || "Invalid role selected";
    },
  },
  termsAccepted: {
    required: "You must accept the terms and conditions",
    validate: (value) => value === true || "You must accept the terms",
  },
};
//   phone: {
//     required: "Phone number is required",
//     pattern: {
//       value: /^01[0-2,5]\d{8}$/,
//       message: "Please enter a valid Egyptian phone number",
//     },
//   },

//   role: {
//     required: "Please select a role",
//   },
