import { NextResponse } from 'next/server'

export async function GET(){
    return NextResponse.json({
        hello:'Worlsd'
    })
}

export async function POST(request: Request){
    return NextResponse.json({
        hello:'Test'
    })
}