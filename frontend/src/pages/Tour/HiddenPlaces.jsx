import React from "react";

const HiddenPlaces = () => {
  return (
    // <div className="mx-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8">
    //   <p className="uppercase text-5xl">
    //     get a brief about Hidden beauties in srilanka
    //   </p>
    //   {/* first */}
    //   <div className="grid grid-cols-2 mt-10 gap-5">
    //     <div className="text-xl mt-5">
    //       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt fugiat
    //       cupiditate quas vitae, ducimus saepe quos voluptatibus, accusantium
    //       qui voluptates earum voluptatum. Consequuntur alias beatae laborum
    //       neque quisquam, quae sit, inventore maxime sed eligendi aliquid a cum
    //       voluptatum nostrum deleniti cumque minima ab ullam impedit eveniet
    //       nulla sequi quis odit?
    //     </div>
    //     <div>
    //       <img
    //         src="https://firebasestorage.googleapis.com/v0/b/travely-7264c.appspot.com/o/dsc_0128.webp?alt=media&token=a06ac6b6-450a-49ac-9330-e345e9e0e755"
    //         alt=""
    //       />
    //     </div>
    //   </div>
    //   {/* second */}
    //   <div className="grid grid-cols-2 mt-10 gap-5">
    //     <div>
    //       <img
    //         src="https://firebasestorage.googleapis.com/v0/b/travely-7264c.appspot.com/o/dsc_0128.webp?alt=media&token=a06ac6b6-450a-49ac-9330-e345e9e0e755"
    //         alt=""
    //       />
    //     </div>
    //     <div className="text-xl mt-5">
    //       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt fugiat
    //       cupiditate quas vitae, ducimus saepe quos voluptatibus, accusantium
    //       qui voluptates earum voluptatum. Consequuntur alias beatae laborum
    //       neque quisquam, quae sit, inventore maxime sed eligendi aliquid a cum
    //       voluptatum nostrum deleniti cumque minima ab ullam impedit eveniet
    //       nulla sequi quis odit?
    //     </div>
    //   </div>
    // </div>
    <div class="mx-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8 mt-10">
      <p class="uppercase text-5xl">
        get a brief about Hidden beauties in World
      </p>
      {/* <!-- first --> */}
      <div class="grid grid-cols-1 md:grid-cols-2 mt-10 gap-5">
        <img
          src="https://cdn.audleytravel.com/1080/770/79/15996690-secluded-beach-in-palawan.webp"
          alt=""
        ></img>
        <div class="text-xl">
          <p className="font-extrabold text-2xl mb-3">Palawan,Philippines</p>
          <p>
            Palawan, often called the "last frontier" of the Philippines, is a stunning archipelago located in the western part of the country. Known for its pristine natural beauty, Palawan boasts crystal-clear turquoise waters, lush rainforests, dramatic limestone cliffs, and some of the most biodiverse marine ecosystems in the world. Highlights include the Puerto Princesa Underground River, a UNESCO World Heritage Site and one of the New 7 Wonders of Nature, and El Nido and Coron, which are famous for their breathtaking lagoons, hidden beaches, and vibrant coral reefs.
          </p>
        </div>
      </div>
      {/* <!-- second --> */}
      <div class="grid grid-cols-1 md:grid-cols-2 mt-20 gap-5">
        <div class="md:order-last">
          <img
            src="https://www.travelandleisure.com/thmb/6UwUc0qiA8ANOErYMuHJ1D5Dv4o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ha-long-bay-vietnam-MOSTBEAUTIFUL0921-910a3a82a03f4bb59d49290fbdc2a6db.jpg"
            alt=""
          ></img>
        </div>
        <div class="text-xl">
          <p className="font-extrabold text-2xl mb-3">Ha Long Bay</p>
          <p>
          Ha Long Bay, located in northeastern Vietnam, is a UNESCO World Heritage Site renowned for its stunning natural beauty and geological significance. The bay features nearly 2,000 limestone islands and islets that rise dramatically from the emerald waters of the Gulf of Tonkin. Many of these formations are topped with lush vegetation, and some house magnificent caves and grottoes, shaped over millions of years by wind and water erosion. The name "Ha Long" translates to "Descending Dragon," and local legends speak of dragons sent by the gods to protect the land from invaders, creating the islands as they descended into the sea.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HiddenPlaces;
