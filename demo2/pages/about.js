import { getSession } from 'next-auth/react';
import React from 'react';

const About = ({data}) => {
    return (
        <div>
            <h1 className="text-center">About , {data}</h1>
        </div>
    );
}

export default About;
export async function getServerSideProps(context){
   const session= await getSession(context)
   if(!session)
   return{
        redirect: {
            destination:"api/auth/signin?callbackUrl=/about",
        }
}
else return {
    props:{data:"hello"}
}
}
