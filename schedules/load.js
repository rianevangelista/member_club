import { scheduleFetchById } from "../../member_club/services/schedule-fetch-by-id.js"

export async function schedulesId() {
    const idSchedules = await scheduleFetchById({ id })
    console.log(idSchedules)
}