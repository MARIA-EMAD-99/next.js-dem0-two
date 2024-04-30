import NextAuth from "next-auth/next";
import Githubproviders from  "next-auth/providers/github"

export default NextAuth({
    providers:[
            Githubproviders({
                clientId:process.env.CLIENTID,
                clientSecret:process.env.CLIENTSECRETE
            })
    ]
})