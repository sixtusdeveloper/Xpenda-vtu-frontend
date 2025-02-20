export const validatePhoneNumber = (phoneNumber: string): boolean => {
    const phoneRegex = /^(?:\+234|0)[789][01]\d{8}$/; // Nigerian phone number format
    return phoneRegex.test(phoneNumber);
  };
  
  export const validateSmartCardNumber = (smartCardNumber: string): boolean => {
    const smartCardRegex = /^\d{10,11}$/; // Allows only 10-11 digits
    return smartCardRegex.test(smartCardNumber);
  };
  