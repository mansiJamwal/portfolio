import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
export async function POST(req:NextRequest){
    try{
        const body=await req.json();
        const {name, email, message}=body;
        const transporter=nodemailer.createTransport({
            service:"gmail",
            host:"smtp.gmail.com",
            port:465,
            secure:true,
            auth:{
                user:process.env.EMAIL,
                pass:process.env.PASS
            }
        })
        const mailData={
            from:process.env.EMAIL,
            to:"jamwalmansi16@gmail.com",
            subject:`New Message from ${name}`,
            text:`
                Name: ${name},
                Email: ${email},
                Message: ${message}
            `,
            html:`
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong> ${message}</p>
            `
        }
        await transporter.sendMail(mailData);
        return NextResponse.json({
            "message":"Email sent successfully"
        })
    }catch(e){
        console.error("Error sending email: ",e);
        return NextResponse.json({
            "message":"Failed"
        })
    }
}
