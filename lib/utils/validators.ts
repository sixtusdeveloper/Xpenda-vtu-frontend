export const validatePhoneNumber = (phoneNumber: string): boolean => {
    const phoneRegex = /^(?:\+234|0)[789][01]\d{8}$/; // Nigerian phone number format
    return phoneRegex.test(phoneNumber);
  };
  