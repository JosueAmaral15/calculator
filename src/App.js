import './style.css';
import ButtonPanel from './ButtonPanel.js';
import Button from './Button.js';
import Screen from './Screen.js';
import {useState} from 'react';

export default function App() {
    const [screen, setScreen] = useState("");
    const [firstOperand, setFirstOperand] = useState(0);
    const [signal,setSignal] = useState("");
    const [isPoint, setIsPoint] = useState(false);
    const [clear, setClear] = useState(false);
    const [itsOn, setItsOn] = useState(false);
    const buttons = [
    {name: "7", behavior: function () {if(itsOn) {if(!clear) {setScreen(`${screen}7`);} else {setScreen("7"); setClear(false);}}}},
    {name: "8", behavior: function () {if(itsOn) {if(!clear) {setScreen(`${screen}8`);} else {setScreen("8"); setClear(false);}}}},
    {name: "9", behavior: function () {if(itsOn) {if(!clear) {setScreen(`${screen}9`);} else {setScreen("9"); setClear(false);}}}},
    {name: "/", behavior: function () {
        if(itsOn && !clear) {
            if(signal.length == 0) {
                setFirstOperand(parseFloat(screen));
            } else {
                if(signal === "/") {
                    setFirstOperand(firstOperand/parseFloat(screen))
                    setScreen(String(firstOperand/parseFloat(screen)));
                } else {
                    switch(signal) {
                        case "+":
                            setFirstOperand(firstOperand+parseFloat(screen))
                            setScreen(String(firstOperand+parseFloat(screen)));
                        break;
                        case "*":
                            setFirstOperand(firstOperand*parseFloat(screen))
                            setScreen(String(firstOperand*parseFloat(screen)));
                        break;
                        case "-":
                            setFirstOperand(firstOperand-parseFloat(screen))
                            setScreen(String(firstOperand-parseFloat(screen)));
                        break;
                    }
                }
            } 
            setSignal("/"); 
            setClear(true);
            
            if(isPoint) 
                setIsPoint(false);
        }
        
    }},
    {name: "4", behavior: function () {if(itsOn) {if(!clear) {setScreen(`${screen}4`);} else {setScreen("4"); setClear(false);}}}},
    {name: "5", behavior: function () {if(itsOn) {if(!clear) {setScreen(`${screen}5`);} else {setScreen("5"); setClear(false);}}}},
    {name: "6", behavior: function () {if(itsOn) {if(!clear) {setScreen(`${screen}6`);} else {setScreen("6"); setClear(false);}}}},
    {name: "*", behavior: function () {
        if(itsOn && !clear) {
            if(signal.length == 0) {
                setFirstOperand(parseFloat(screen));
            } else {
                if(signal === "*") {
                    setFirstOperand(firstOperand*parseFloat(screen))
                    setScreen(String(firstOperand*parseFloat(screen)));
                } else {
                    switch(signal) {
                        case "+":
                            setFirstOperand(firstOperand+parseFloat(screen))
                            setScreen(String(firstOperand+parseFloat(screen)));
                        break;
                        case "-":
                            setFirstOperand(firstOperand-parseFloat(screen))
                            setScreen(String(firstOperand-parseFloat(screen)));
                        break;
                        case "/":
                            setFirstOperand(firstOperand/parseFloat(screen))
                            setScreen(String(firstOperand/parseFloat(screen)));
                        break;
                    }
                }
            } 
            setSignal("*");  
            setClear(true);
            if(isPoint) 
                setIsPoint(false);
        }
    }},
    {name: "1", behavior: function () {if(itsOn) {if(!clear) {setScreen(`${screen}1`);} else {setScreen("1"); setClear(false);}}}},
    {name: "2", behavior: function () {if(itsOn) {if(!clear) {setScreen(`${screen}2`);} else {setScreen("2"); setClear(false);}}}},
    {name: "3", behavior: function () {if(itsOn) {if(!clear) {setScreen(`${screen}3`);} else {setScreen("3"); setClear(false);}}}},
    {name: "-", behavior: function () {
        if(itsOn && !clear){
            if(signal.length === 0) {
                setFirstOperand(parseFloat(screen));
            } else {
                if(signal === "-") {
                    setFirstOperand(firstOperand-parseFloat(screen))
                    setScreen(String(firstOperand-parseFloat(screen)));
                } else {
                    switch(signal) {
                        case "+":
                            setFirstOperand(firstOperand+parseFloat(screen))
                            setScreen(String(firstOperand+parseFloat(screen)));
                        break;
                        case "*":
                            setFirstOperand(firstOperand*parseFloat(screen))
                            setScreen(String(firstOperand*parseFloat(screen)));
                        break;
                        case "/":
                            setFirstOperand(firstOperand/parseFloat(screen))
                            setScreen(String(firstOperand/parseFloat(screen)));
                        break;
                    }
                }
                
            } 
            setSignal("-"); 
            setClear(true);
            if(isPoint) 
                setIsPoint(false);
        }
    }},
    {name: "CA", behavior: function () {setScreen(""); setIsPoint(false); setSignal(""); setClear(false); /*setIsCalculated(false)*/}},
    {name: "0", behavior: function () {if(itsOn) {if(!clear) {setScreen(`${screen}0`);} else {setScreen("0"); setClear(false);}}}},
    {name: ".", behavior: function () {if(itsOn && !isPoint) {setScreen(`${screen}.`); setIsPoint(true)}}},
    {name: "+", behavior: function () {
        if(itsOn && !clear){
            if(signal.length == 0) {
                setFirstOperand(parseFloat(screen));
            } else {
                if(signal === "+") {
                    setFirstOperand(firstOperand+parseFloat(screen))
                    setScreen(String(firstOperand+parseFloat(screen)));
                } else {
                    switch(signal) {
                        case "-":
                            setFirstOperand(firstOperand-parseFloat(screen))
                            setScreen(String(firstOperand-parseFloat(screen)));
                        break;
                        case "*":
                            setFirstOperand(firstOperand*parseFloat(screen))
                            setScreen(String(firstOperand*parseFloat(screen)));
                        break;
                        case "/":
                            setFirstOperand(firstOperand/parseFloat(screen))
                            setScreen(String(firstOperand/parseFloat(screen)));
                        break;
                    }
                }
            }
            setSignal("+");
            setClear(true);
            if(isPoint) 
                setIsPoint(false);
        }
    }},
    {name: "=", behavior: function () {
        if(itsOn) {
            if(signal.length != 0 && !clear) {
                switch(signal) {
                    case "+":
                        setScreen(String(parseFloat(screen)+firstOperand));
                    break;
                    case "-":
                        setScreen(String(firstOperand-parseFloat(screen)));
                    break;
                    case "*":
                        setScreen(String(parseFloat(screen)*firstOperand));
                    break;
                    case "/":
                        setScreen(String(firstOperand/parseFloat(screen)));
                    break;
                }
            }
            setSignal("");
            setClear(true);
            setFirstOperand(0);
            if(isPoint) 
                setIsPoint(false);
        }
    }}
    ];

    function turnOnOff(){
        if(itsOn) {
            setItsOn(false);
            setScreen(""); 
            setIsPoint(false); 
            setSignal(""); 
            setClear(false);
        } else {
            setItsOn(true);
        }
    }
    
    return (
    <div className="calculator">
        <div className='external-part'>
            <Screen data={screen} itsOn={itsOn} />
            <div className='center-panel'>
                <Button behavior={turnOnOff}>On/Off</Button>
            </div>
            <ButtonPanel components={buttons} />
        </div>
    </div>
    );
}