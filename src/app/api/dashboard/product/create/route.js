import {NextResponse} from "next/server";
import { PrismaClient } from "@prisma/client"
import { headers } from 'next/headers'
export async function POST(req, res) {
    try {
        const headersList = headers()
        const UserEmail = headersList.get('email')
        let reqBody = await req.json();
        reqBody.UserEmail=UserEmail
        const prisma=new PrismaClient();
        const result=await prisma.products.create({data:reqBody})
        return NextResponse.json({status:"success",data:result})
    }
    catch (e) {
        return  NextResponse.json({status:"fail",data:e.toString()})
    }
}