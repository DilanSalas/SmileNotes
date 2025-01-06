

export const fileUpload = async(files) => {
  
    if(!files) throw new Error('files is required');

    const cloudUrl = 'https://api.cloudinary.com/v1_1/dilan-salas/upload';

    const formData = new FormData();

    formData.append('upload_preset', 'React-Journal');
    formData.append('file', files);

    try {

        const response = await fetch(cloudUrl, {
            method: 'POST',
            body: formData,
        });

        if(!response.ok) throw new Error('no se pudo subir la imagen');

        const cloudResponse = await response.json();


        
        return cloudResponse.secure_url;
        
    } catch (error) {
        throw new Error(error.message);
        
    }
}