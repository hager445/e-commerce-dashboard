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
  },

  email: {
    required: "Email is required",
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Please enter a valid email address",
    },
  },

  password: {
    required: "Password is required",
    minLength: {
      value: 8,
      message: "Password must be at least 8 characters",
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
  },

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
};
