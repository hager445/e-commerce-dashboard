// config/permissions.js

export const ROLES = {
  ADMIN: "ADMIN",
  MANAGER: "MANAGER",
  USER: "USER",
};

export const PERMISSIONS = {
  // Product permissions
  VIEW_PRODUCTS: "view_products",
  CREATE_PRODUCT: "create_product",
  EDIT_PRODUCT: "edit_product",
  DELETE_PRODUCT: "delete_product",

  // User permissions
  VIEW_USERS: "view_users",
  CREATE_USER: "create_user",
  EDIT_USER: "edit_user",
  DELETE_USER: "delete_user",

  // Order permissions
  VIEW_ORDERS: "view_orders",
  EDIT_ORDER_STATUS: "edit_order_status",
  DELETE_ORDER: "delete_order",

  // Settings
  MANAGE_SETTINGS: "manage_settings",
};

export const ROLE_PERMISSIONS = {
  [ROLES.ADMIN]: [
    // Admin can do everything
    PERMISSIONS.VIEW_PRODUCTS,
    PERMISSIONS.CREATE_PRODUCT,
    PERMISSIONS.EDIT_PRODUCT,
    PERMISSIONS.DELETE_PRODUCT,
    PERMISSIONS.VIEW_USERS,
    PERMISSIONS.CREATE_USER,
    PERMISSIONS.EDIT_USER,
    PERMISSIONS.DELETE_USER,
    PERMISSIONS.VIEW_ORDERS,
    PERMISSIONS.EDIT_ORDER_STATUS,
    PERMISSIONS.DELETE_ORDER,
    PERMISSIONS.MANAGE_SETTINGS,
  ],

  [ROLES.MANAGER]: [
    PERMISSIONS.VIEW_PRODUCTS,
    PERMISSIONS.CREATE_PRODUCT,
    PERMISSIONS.EDIT_PRODUCT,
    PERMISSIONS.VIEW_ORDERS,
    PERMISSIONS.EDIT_ORDER_STATUS,
  ],

  [ROLES.USER]: [PERMISSIONS.VIEW_PRODUCTS, PERMISSIONS.VIEW_ORDERS],
};

export const hasPermission = function (role, permission) {
  const availablePermissions = ROLE_PERMISSIONS[role];
  return availablePermissions?.includes(permission);
};
