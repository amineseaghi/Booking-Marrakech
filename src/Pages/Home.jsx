import React from "react"


const Home = () => {


  

  return (
    <div className=" flex flex-col px-4 mt-4">
      <div className="bg-[url('https://www.marrakechbestof.com/wp-content/uploads/2022/08/08B55E43-BC48-4A02-9A24-2854D864E0AE.jpeg')] px-4 h-[100vh] bg-no-repeat bg-cover bg-center  rounded-lg">
        <div className="flex items-start">
          <h1 className=" mt-20 px-20 font-bold text-white text-7xl">Enjoy Your<br/> Dream Vacation <br />In Marrakesh </h1>       
        </div>
        <form className="flex items-center justify-center border-solid border-black h-4 mt-8">
          <input className="flex w-[20%] p-2 border-2 border-solid border-black " type="text" name="destination" placeholder="Where are you vacation home ?" />
          <input className="flex w-[20%] p-2 border-2 border-solid border-black text-center" type="date" name="checkIn" placeholder="check-in date"/>
          <input className="flex w-[20%] p-2 border-2  border-solid border-black text-center" type="date" name="checkOut" placeholder="check-out date" />
          <div>
            <span className=" bg-white flex p-2  border-2 border-solid border-black">{'adults  - children -  room'}</span>
          </div>
          <button type="submit" className=" border-2 border-solid border-white w-[20%] bg-blue-500 text-white p-2 hover:bg-blue-600">Search</button>
        </form>
      </div>

      <div className="flex flex-col items-center justify-between mt-8">
        <div className="flex flex-col items-start justify-start">
          <h2 className="font-bold text-4xl text-black">Offers</h2>
          <p className="font-bold text-xl text-[#9B4444]">Promotions, deals, and special offers for you</p>
        </div>

        <div className="mt-4 flex items-center relative">
          <img className="object-fill bg-cover" src="https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFycmFrZWNofGVufDB8fDB8fHww" alt="" />
          <div className="absolute items-center justify-between bottom-1 px-2">
          <h2 className="text-3xl font-bold text-white">Housing</h2>
          <p className="text-white font-bold">Marrakesh has a wide range of accommodation</p>
          </div>   
        </div>
      </div>
      <div className="mt-20 mx-20 items-center justify-center grid grid-cols-6 gap-3">
        <div className="flex w-30 flex-col gap-1">
          <img className="rounded-lg" src="https://stayhere.ma/wp-content/uploads/2023/10/Guide-Ultime-pour-Explorer-Agafay-Astuces-et-Conseils-scaled.webp" alt="Agafay" />
          <h1 className="font-bold">Agafay</h1>
          <p>26 Km Away</p>
        </div>

        <div className="flex w-30 flex-col gap-1">
          <img className="rounded-lg" src="https://media.tacdn.com/media/attractions-splice-spp-674x446/06/ea/8d/9d.jpg" alt="Ourika Valley" />
          <h1 className="font-bold">Ourika Valley</h1>
          <p>36 Km Away</p>
        </div>

        <div className="flex w-30 flex-col gap-1">
          <img className="rounded-lg" src="https://www.lesjardinsdelamedina.com/blog/wp-content/uploads/2019/11/OUKA%C3%8FMEDEN.jpg" alt="Oukaimden" />
          <h1 className="font-bold">Oukaimden</h1>
          <p>76,2 Km Away</p>
        </div>

        <div className="flex w-30 flex-col gap-1">
          <img className="rounded-lg" src="https://media.tacdn.com/media/attractions-splice-spp-674x446/0e/50/7a/6b.jpg" alt="Imlil" />
          <h1 className="font-bold">Imlil</h1>
          <p>64,4 Km Away</p>
        </div>

        <div className="flex w-30 flex-col gap-1">
          <img className="rounded-lg" src="https://www.refugedutoubkal.com/uploads/1553853091-s4.jpg" alt="Toubkal" />
          <h1 className="font-bold">Toubkal</h1>
          <p>79,6 Km Away</p>
        </div>

        <div className="flex w-30 flex-col gap-1">
          <img className="rounded-lg" src="https://www.hltravel-marrakech.com/uploads/0000/19/2020/05/29/73495134-2595406100525874-4756052792802541568-o.jpg" alt="Terre d'almanar" />
          <h1 className="font-bold">Terre d'amanar</h1>
          <p>40 Km Away</p>
        </div>

      </div>

      <div className=" mt-8 flex flex-col items-center justify-center">
        <h2 className=" text-5xl font-bold text-[#9B4444]">Entire establishment of choice</h2>
      </div>
      <div className="mx-20 mt-10 grid grid-cols-3 gap-6">
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure><img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/265369973.jpg?k=c1e6db70e77dbb780dc91d63634b3082fb5a951d6064ce0a84a9475ab20f6580&o=&hp=1" alt="Appartement" /></figure>
          <div className="card-body">
          <h2 className="card-title text-2xl font-bold">Wazo Appart- Hotel </h2>
          <p className="font-bold text-black">500.00 DH</p>
          <p className="font-bold text-[#9B4444]">Avenue Abdelkrim Khattabi, Marrakech</p>
          <div className="card-actions justify-end">
          <button className="btn text-white bg-[#9B4444] hover:bg-[#9B4444]">Reserve Now</button>
          </div>
          </div>
        </div>

        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure><img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/319413410.jpg?k=c42ee8a9032a2801b0f5c2cefc0a588cdf597d4d1f60088750d0a35104936d38&o=&hp=1" alt="Appartement" /></figure>
          <div className="card-body">
          <h2 className="card-title text-2xl font-bold">Palais Mirage Atlas</h2>
          <p className="font-bold text-black">1200.00 DH</p>
          <p className="font-bold text-[#9B4444]">Palmerie, Marrakech</p>
          <div className="card-actions justify-end">
          <button className="btn text-white bg-[#9B4444] hover:bg-[#9B4444]">Reserve Now</button>
          </div>
          </div>
        </div>

        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure><img src="https://static11.travel-trends-now.com/uploads/hotel/130136/photo/riad-art-emotions-boutique-hotel-spa_159025436910.jpg" alt="Riad" /></figure>
          <div className="card-body">
          <h2 className="card-title text-2xl font-bold">Riad Art & emotions boutique hotel & spa</h2>
          <p className="font-bold text-black">1200.00 DH</p>
          <p className="font-bold text-[#9B4444]">Médina, Marrakech</p>
          <div className="card-actions justify-end">   
          <button className="btn text-white bg-[#9B4444] hover:bg-[#9B4444]">Reserve Now</button>
          </div>
          </div>
        </div>  

        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure><img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/178904413.jpg?k=ccc6a8b5a722defdd91f0e3f90b2704d5da84c92793568958cd20fa68f64d058&o=&hp=1" alt="Riad" /></figure>
          <div className="card-body">
          <h2 className="card-title text-2xl font-bold">Villa entière GOLF MARRAKECH</h2>
          <p className="font-bold text-black">2000.00 DH</p>
          <p className="font-bold text-[#9B4444]">Palmerie Golf, Marrakech</p>
          <div className="card-actions justify-end">   
          <button className="btn text-white bg-[#9B4444] hover:bg-[#9B4444]">Reserve Now</button>
          </div>
          </div>
        </div>

        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure><img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/501247803.jpg?k=83e810728116293ec60a79a0954f5585c0441f821be31b6fb6a4b9517bd6e8ea&o=&hp=1" alt="Riad" /></figure>
          <div className="card-body">
          <h2 className="card-title text-2xl font-bold">L'Orientale By La Siredrah</h2>
          <p className="font-bold text-black">900.00 DH</p>
          <p className="font-bold text-[#9B4444]">Palmerie, Marrakech</p>
          <div className="card-actions justify-end">
          <div className="flex items-center justify-between">
          </div>   
          <button className="btn text-white bg-[#9B4444] hover:bg-[#9B4444]">Reserve Now</button>
          </div>
          </div>
        </div>

        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure><img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/298686821.jpg?k=91cec9deb124861bf95e93e7da2fd058c0dbc36b8a2e66ccdfaca8a7ebe2a0bd&o=&hp=1" alt="Riad" /></figure>
          <div className="card-body">
          <h2 className="card-title text-2xl font-bold">La Maison Des Oliviers</h2>
          <p className="font-bold text-black">560.00 DH</p>
          <p className="font-bold text-[#9B4444]">Route d'Ourika, Marrakech</p>
          <div className="card-actions justify-end">   
          <button className="btn text-white bg-[#9B4444] hover:bg-[#9B4444]">Reserve Now</button>
          </div>
          </div>
        </div>
      </div>
      <div className="mx-20 mt-10 flex flex-col items-center ">
        <h1 className="text-4xl text-black font-bold">Actus & Best Of Marrakech</h1>
        <p className="text-[#9B4444] font-bold mt-1">Toute l'actualité qui fait la une de Marrakech: événements, tourisme, people, culture, sortie, nouveautés,...</p>
      </div>

      <div className=" mx-20 mt-5  mb-10 flex items-center">
        <div className="flex-[0.5] relative justify-between">
          <img className="w-[100vw] h-[75vh] rounded-lg" src="https://visitmarrakech.com/wp-content/uploads/2024/02/ROYAL-MANSOUR1.jpg" alt="Actus" />
          <div className="absolute items-center justify-between bottom-1 px-2">
          <h1 className="text-3xl font-bold text-white">RAMADAN 2024: Découvrez les Meilleures Adresses pour<br/> le Ftour et le  Séjour à Marrakech</h1><br/>
          <p className="text-xl font-bold text-white">Ramadan 2024, Marrakech se prépare à accueillir ses visiteurs avec une sélection Soignement choisie...</p><br/>
          </div>
        </div>
        <div className="flex-[0.5] mx-3 justify-between">
        <div className="grid grid-cols-2 gap-2">
          <div className=" justify-between relative">
            <img className="rounded-xl w-full h-full" src="https://visitmarrakech.com/wp-content/uploads/2023/12/AJ106742.jpg" alt="kech Roumance" />
            <div className="absolute items-center text-white bottom-1 px-2">
              <h1 className="text-md font-bold text-white">Royale Mansour Marrakech Reconnues parmis les 10 Meilleurs Hôtels au Monde</h1>
            </div>
          </div>

          <div className=" justify-between relative">
            <img className="rounded-xl w-full h-full" src="https://visitmarrakech.com/wp-content/uploads/2024/02/royal-mansour-valentine-1.jpg" alt="kech Roumance" />
            <div className="absolute items-center text-white bottom-1 px-2">
              <h1 className="text-md font-bold text-white">Marrakech ville de l'amour: Célébrez la romance à la Saint-valantin. </h1>
            </div>
          </div>

          <div className=" justify-between relative">
            <img className="rounded-xl w-full h-full" src="https://visitmarrakech.com/wp-content/uploads/2024/01/MARATHON2024-8.jpg" alt="Marathon" />
            <div className="absolute items-center text-white bottom-1 px-2">
              <h1 className="text-md font-bold text-white">La 34 éme édition de Marathon international de Marrakech</h1>
            </div>
          </div>

          <div className=" justify-between relative">
            <img className="rounded-xl w-full h-full" src="https://airport-world.com/wp-content/uploads/2022/10/Aeroport-Marrakech-6-copy.jpg" alt="Aeroprt Menara" />
            <div className="absolute items-center text-white bottom-1 px-2">
              <h1 className="text-md font-bold text-white">L'architecture est moderne et lumineuse et offre une excellente sélection de services au passager.</h1>
            </div>
          </div>

        </div>
          

        </div>

      </div>
    </div>
  )
}

export default Home