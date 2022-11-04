import React from 'react'
import './Style/whatsapp.css'
import {BsWhatsapp}  from 'react-icons/bs'

export const WhatsAppPopUp = () => {
  return (
           <a href="https://wa.me/543804561153?text=Quisiera%20contactar%20contigo%20por%20tus%20productos" class="whatsapp" target="_blank"> <BsWhatsapp className='whatsapp-icon'/> </a>
    )
}
