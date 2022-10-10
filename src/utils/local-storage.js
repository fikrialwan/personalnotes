import { STORAGE_KEY } from ".";

function isStorageExist() {
  if (!typeof (Storage)) {
    alert('Browser kamu tidak mendukung local storage');
    return false;
  }
  return true;
}

const saveData = (notes) => {
  if (isStorageExist()) {
    const parsed = JSON.stringify(notes);
    localStorage.setItem(STORAGE_KEY, parsed);
  }
}

const loadData = () => {
  const serializedData = localStorage.getItem(STORAGE_KEY);
  const notes = JSON.parse(serializedData);

  return notes;
}

export { saveData, loadData };