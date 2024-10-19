import dayjs from "dayjs";

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

//  SANITIZE FORM VALUE
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

// TEXT TRUNCATE
export const truncateText = (
  text: string | undefined,
  length?: number
): string | null => {
  const effectiveLength: number = length ?? 20;
  if (!text) {
    return null;
  }
  return text.length > effectiveLength
    ? text.slice(0, effectiveLength).concat("...")
    : text;
};

// DATE FORMATTER
export const dateAndTimeFormatter = (
  date: string,
  format:
    | "DD MMM YYYY"
    | "DD MMM YYYY, hh:mm A"
    | "DD/MM/YYYY"
    | "DD/MM/YYYY, hh:mm A" = "DD MMM YYYY"
) => {
  return dayjs(date).format(format);
};

// YAER CONCAT WITH DATE AND MONTH
export const yearConcatWithDate = (year: number) => {
  return dayjs(dayjs().format("MM-DD").concat(`-${year}`));
};

// NUMBER FORMAT TO FIXED DECIMAL
export const formatToFixedDecimals = (
  number: number,
  decimals: number = 2
): number => {
  return Number(number?.toFixed(decimals));
};
