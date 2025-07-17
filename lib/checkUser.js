import { currentUser } from "@clerk/nextjs/server"
import { db } from "./prisma"

export const checkUser=async()=>{
    const user= await currentUser()
    
    if(!user){
        return null
    }

    try {
        const loggedInUser= await db.user.findUnique(
            {where:{
                clerkUserId: user.id
            },
            include: {
                transactions:{
                    where:{
                        type: "CREDIT_PURCHASE",
                        createdAt:{
                        gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1)
                        }
                    },
                    orderBy: {
                        createdAt: "desc"
                    },
                    take: 1
                }
            }
        }
        )
        if(loggedInUser){
            return loggedInUser
        }

        const name =`${user.firstName} ${user.lastName}`
        const newUser= await db.user.create({
            data: {
                clerkUserId: user.id,
                email: user.emailAddresses[0].emailAddress,
                name,
                imageUrl: user.imageUrl,
                transactions: {
                    create: {
                        amount: 2,
                        type: "CREDIT_PURCHASE",
                        packageId: "free_user",
                    }
                }
            }
        })

        return newUser
    } catch (error) {
        console.error(error.message)
        
    }
}