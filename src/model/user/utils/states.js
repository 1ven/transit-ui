export const isSignedUpCustomer = profile =>
  profile.role === "customer" && !profile.role_entry;

export const isOnboardedCustomer = profile =>
  profile.role === "customer" && profile.role_entry;
