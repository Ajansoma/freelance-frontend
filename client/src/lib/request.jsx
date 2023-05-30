const API_URL = `https://freelance-app.onrender.com`;

export const httpSendData = async function (url, data) {
  const response = await fetch(`${API_URL}/${url}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: data === null ? null : JSON.stringify(data),
  });
  if (!response.ok) {
    const txt = await response.text();
    throw Error(txt);
  }
  return await response.json();
};

export const httpGetData = async function (url) {
  const response = await fetch(`${API_URL}/${url}`);
  if (!response.ok) {
    const txt = await response.text();
    throw Error(txt);
  }
  return await response.json();
};

export const httpSendConversations = async function (id) {
  try {
    const response = await fetch(`${API_URL}/conversations`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(id),
    });
    return await response.json();
  } catch (err) {
    return err;
  }
};

export const httpUploadImage = async function (file) {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'grngdewg');
  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/ajansoma/image/upload`,
      {
        method: 'POST',
        body: formData,
      }
    );
    if (!response.ok) throw new Error();
    const { url } = await response.json();
    return url;
  } catch (err) {
    return err;
  }
};
