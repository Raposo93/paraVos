import React from 'react'
import './Style/whatsapp.css'
import {BsWhatsapp}  from 'react-icons/bs'

export const WhatsAppPopUp = () => {
  return (
           <a href="https://wa.me/5211234567890?text=Quisiera%20Contactar%20Contigo" class="whatsapp" target="_blank"> <BsWhatsapp className='whatsapp-icon'/> </a>
    )
}
