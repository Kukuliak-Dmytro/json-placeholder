import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import './Accordion.css'

export default function Accordion({title, children}){
    const [isOpen, setIsOpen] = useState(false);
    return(
        <div className='accordion'>
            <div className='accordion-title' onClick={()=>{setIsOpen(!isOpen)}}>
                <h2>{title}</h2>
                <ChevronDown />
            </div>
            <div className={`accordion-content ${isOpen ? "open" : ""}`}>
                <div className='accordion-inner'>{children}</div>
            </div>
        </div>
    )
}