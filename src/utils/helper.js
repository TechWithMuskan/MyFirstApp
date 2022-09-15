export const uploadImageOnServer = async imageData => {
  try {
    let response = await fetch('http://192.168.1.4:4000/upload', {
      method: 'POST',
      body: imageData,
      headers: {'Content-Type': 'multipart/form-data'},
    });
    response = response.json();
    return response;
  } catch (error) {
    console.log('error :', error);
  }
};

export const getImageFromServer = async imageName => {
  try {
    let response = await fetch(`http://192.168.1.4:4000/${imageName}`, {
      method: 'GET',
    });
    return response?.url;
  } catch (error) {
    console.log('error :', error);
  }
};
