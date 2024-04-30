import { getSession, signIn } from 'next-auth/react';
import React, { useEffect, useState } from 'react';

const Dashboard = () => {
    const [loading , setLoading]=useState(true)
    useEffect( ()=>{
        const securePage=async ()=>{
        const session=await getSession()
        if (!session) 
        signIn()
    else{
        setLoading(false)
    }
        }
        securePage()
    },[])
    if (loading)  return <div>Loading...</div>
    else return (
        <div>
            <h1>Dashboard</h1>
        </div>
    );
}

export default Dashboard;