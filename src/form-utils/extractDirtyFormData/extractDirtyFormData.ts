import extractDirtyObject from '../extractDirtyObject/extractDirtyObject';
import formDataToObject from '../formDataToObject/formDataToObject';
import objectToFormData from '../objectToFormData/objectToFormData';

function extractDirtyFormData(baseFormData: FormData, submittedFormData: FormData): FormData {
  const baseObj = formDataToObject(baseFormData);
  const submittedObj = formDataToObject(submittedFormData);
  const dirtyObj = extractDirtyObject(baseObj, submittedObj);
  const dirtyFormData = objectToFormData(dirtyObj);
  return dirtyFormData;
}

export default extractDirtyFormData;
