

export const heroBG = (url) =>{
    let imageUrl = 'https://images.unsplash.com/photo-1593280359364-5242f1958068?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1875&q=80)}https://images.unsplash.com/photo-1593280359364-5242f1958068?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1875&q=80'
    return `linear-gradient(345deg, rgba(23, 23, 21, 0.75) 25%, rgba(114, 120, 117, 0.75) 60%, 
    rgba(157, 163, 160, 0.7) 70%, rgba(191, 205, 198, 0.6) 79%, rgba(215, 229, 240, 0.55) 87%), 
    url(${url ? `'${url}'` : `'${imageUrl}'`})`
}



const generalAux ={
    heroBG: heroBG
}

export default generalAux