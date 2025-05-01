import zod from "zod"
export const  profileImagezod=zod.object({
    profileImage:zod.string().min(1)
})