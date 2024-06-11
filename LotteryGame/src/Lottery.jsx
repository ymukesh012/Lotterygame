import { useState } from "react";
import { genTicket,sum } from "./helper";
import "./Lottery.css";

export default function Lottery(){
    let [ticket,SetTicket]=useState(genTicket(3));
    let isWinning = sum(ticket) === 15;
    
    let buyTicket = () => {
        SetTicket(genTicket(3));
    };

    return(
        <div>
        <h1 style={{color:"Brown"}}>Angel Lottery Game!</h1>
        <div className="ticket">
            <span>{ticket[0]}</span>
            <span>{ticket[1]}</span>
            <span>{ticket[2]}</span>
        </div>
        <br></br>
        <button onClick={buyTicket}>Buy New Ticket</button>
        <br></br>
        <h1 style={{color:"green"}}>{isWinning && "Congratulation,App Ko Milega ek Dairy Milk!"}</h1>
        </div>
    );
}