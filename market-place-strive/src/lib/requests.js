import a from 'axios'
const {get} = a

export const getRequest = async (url)=>{
    try {
        return await get(`${process.env.REACT_APP_URL_PROD}` + url)  
        
    } catch (error) {
        console.log(error)
    }

}

const request = {
    getRequest: getRequest
}

export default request