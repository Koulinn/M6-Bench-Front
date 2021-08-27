import a from 'axios'
const {get} = a

export const getRequest = async (url)=>{
    try {
        return await get(`${process.env.REACT_APP_URL_PROD}` + url)  
    } catch (error) {
        console.log(error)
    }
}

export const postJSON = async (url, data, contentType)=>{
    try {
        const response = await fetch(`${process.env.REACT_APP_URL_PROD}${url}`,{
            method: 'post',
            body: await JSON.stringify({...data}),
            headers:{
                ...contentType
            }

        })
        const serverData = await response.json()
        return serverData
    } catch (error) {
        console.log(error)
    }
}

const request = {
    getRequest: getRequest,
    postJSON:postJSON
}

export default request