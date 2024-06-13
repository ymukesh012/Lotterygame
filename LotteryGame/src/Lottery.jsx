import { useState } from "react";
import { genTicket,sum } from "./helper";
import "./Lottery.css";
import Ticket from "./Ticket";

export default function Lottery({n = 3,winningSum = 15}){
    let [ticket,SetTicket]=useState(genTicket(n));
    let isWinning = sum(ticket) === winningSum;
    
    let buyTicket = () => {
        SetTicket(genTicket(n));
    };

    return(
        <div>
        <h1 style={{color:"brown"}}>Angel Guess Game!</h1>
        <div className="ticket">
            <Ticket ticket={ticket}/>
        </div>
        <br></br>
        <button onClick={buyTicket}>Buy New Ticket</button>
        <br></br>
        <h1 style={{color:"green"}}>{isWinning && "Congratulation,App Ko Milega ek Dairy Milk!"}</h1>
        </div>
    );
}