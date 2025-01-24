import { apiConfig } from "./api-config"

export async function scheduleFetchById({ id }) {
    try {
        // Fazendo a requisição
        const response = await fetch(`${apiConfig.baseURL}/schedules`)

        // Converte para JSON
        const data = await response.json()

        // Filtra os usuarios pelo id digitado
        const idSchedules = data.filter((schedule) => id)

        return idSchedules
    } catch (error) {
        console.log(error)
        alert("Não foi possível encontrar o usuário desejado.")
    }
}