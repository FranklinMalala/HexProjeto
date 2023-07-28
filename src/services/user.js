import api from "./api"

export const getCampeoes = async () =>{

    const {data} = await api.get('/champs')
    console.log(data)

    return data
}

export const getCampeao = async (id) => {
    const {data} = await api.get('/champs/' + id)

    return data

}

export const createCampeao = async(dados) => {
    const {data} = await api.post('/champs', dados)

    return data


}



export const deleteCampeao = async(id) => {
    const{data} = await api.delete('/champs/' + id)

    return data

}

export const updateCampeao = async(id, dados) => {
    const {data} = await api.put('/champs/' + id, dados)

    return data

}