function objectToFormData(obj: Record<string, unknown>): FormData {
  const formData = new FormData();
  for (const [key, value] of Object.entries(obj)) {
    formData.set(key, value as string | Blob);
  }
  return formData;
}

export default objectToFormData;
