import React from 'react'

const Footer = () => {
  return (
    <div className="px-20 py-5  justify-between bg-slate-300">
        <div className=" flex-[0.7] items-center justify-between">
            <div className="grid grid-cols-3 gap-3">
                <div>
                    <h1 className="text-4xl font-bold text-black">Infos</h1>
                    <div className="text-gray-500 font-bold">
                    <p className="cursor-pointer hover:text-[#9B4444]">Busniss Events</p>
                    <p className="cursor-pointer hover:text-[#9B4444]">Espace Membres</p>
                    <p className="cursor-pointer hover:text-[#9B4444]">Carte interactive</p>
                    <p className="cursor-pointer hover:text-[#9B4444]">Actualités</p>
                    <p className="cursor-pointer hover:text-[#9B4444]">Offres</p>
                    </div>
                </div>
                <div>
                    <h1 className="text-4xl font-bold text-black">Télécharger</h1>
                    <div className="text-gray-500 font-bold">
                    <p className="cursor-pointer hover:text-[#9B4444]">Guides</p>
                    <p className="cursor-pointer hover:text-[#9B4444]">Carte et Plans</p>
                    <p className="cursor-pointer hover:text-[#9B4444]">Dossier de presse</p>
                    <p className="cursor-pointer hover:text-[#9B4444]">Médiathéque</p>
                    <p className="cursor-pointer hover:text-[#9B4444]">Application Mobile</p>
                    </div>
                </div>
                <div>
                    <h1 className="text-4xl font-bold text-black">Contact</h1>
                    <div className="text-gray-500 font-bold">
                    <p className="cursor-pointer hover:text-[#9B4444]">Nous contacter</p>
                    <p className="cursor-pointer hover:text-[#9B4444]">influeunceurs</p>
                    <p className="cursor-pointer hover:text-[#9B4444]">Newsletter</p>
                    <p className="cursor-pointer hover:text-[#9B4444]">Plan du site</p>
                    <p className="cursor-pointer hover:text-[#9B4444]">Conditions générales</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
        
    
  )
}

export default Footer