import a from 'axios'
const { get } = a

export const getRequest = async (url) => {
    try {
        return await get(`${process.env.REACT_APP_URL_PROD}` + url)
    } catch (error) {
        console.log(error)
    }
}

export const postJSON = async (url, data) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_URL_PROD}${url}`, {
            method: 'POST',
            body: await JSON.stringify({ ...data }),
            headers: {
                "Content-Type": "application/json"
            }

        })
        const serverData = await response.json()
        return serverData
    } catch (error) {
        console.log(error)
    }
}

export const uploadImage = async (url, image) => {
    try {
        console.log(image)
        const response = await fetch(`${process.env.REACT_APP_URL_PROD}${url}`, {
            method: 'PUT',
            body: image,
        })
        return response

    } catch (error) {
        console.log(error)
    }
}

const request = {
    getRequest: getRequest,
    postJSON: postJSON,
    uploadImage: uploadImage
}

export default request