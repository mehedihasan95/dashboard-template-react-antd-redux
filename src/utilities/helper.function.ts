//  SANITIZE FORM DATA
export const sanitizeFormData = <T>(
  data: T,
  options?: {
    except?: string[];
    needs?: string[];
  }
): FormData => {
  const formData = new FormData();
  Object.entries(data as keyof T).forEach(([key, value]) => {
    if (Array.isArray(value) && value.length > 0) {
      if (value[0]?.originFileObj) {
        formData.append(key, value[0].originFileObj);
      }
    }
    if (Array.isArray(value) && value.length > 0) {
      if (
        !value[0].originFileObj &&
        value[0].status !== "done" &&
        value[0].status !== "error"
      ) {
        formData.append(key, JSON.stringify(value));
      }
    }
    if (
      (value || options?.needs?.includes(key)) &&
      !options?.except?.includes(key) &&
      !Array.isArray(value)
    ) {
      formData.append(key, value as string | Blob);
    }
  });
  return formData;
};

export const sanitizeFormValue = <T>(
  data: T,
  options?: {
    except?: string[];
    needs?: string[];
  }
): T => {
  const sanitizeValue = Object.fromEntries(
    Object.entries(data as keyof T).filter(
      ([key, value]) =>
        (value || options?.needs?.includes(key)) &&
        !options?.except?.includes(key)
    )
  );
  return sanitizeValue as T;
};
