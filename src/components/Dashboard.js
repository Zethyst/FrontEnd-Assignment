import React from "react";

const Dashboard = () => {

    const clampStyle6 = {
        display: "-webkit-box",
        WebkitLineClamp: 20, // Set line count dynamically
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
    };


    return (
        <div className="w-full min-h-screen px-4 py-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl sm:text-3xl font-bold text-blue-900">
                    Office Sahayogi's Dashboard
                </h1>
                <button className="bg-[#1840AE] text-white rounded-md px-4 py-1 w-32">
                    <p className="w-24">2023-2024 &#9662;</p>
                </button>
            </div>

            {/* Cards Container */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Top Row Cards */}
                <div className="bg-[#1840AE] text-white rounded-2xl p-4 shadow-md flex flex-col items-start justify-start h-28 overflow-hidden">
                    <p>Option 1</p>
                    <p className="text-xs line-clamp-3">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam a facere quod recusandae iste unde totam dicta, voluptate aut ab, reprehenderit praesentium aperiam exercitationem eum accusamus. Rem quibusdam harum minima odit labore distinctio voluptas ratione sunt et. Numquam, iure quo.
                    </p>
                </div>

                <div className="bg-[#8EB0F0] text-blue-900 rounded-2xl p-4 shadow-md flex flex-col items-start justify-start h-28 overflow-hidden">
                    <p>Option 2</p>
                    <p className="text-xs line-clamp-3">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam a facere quod recusandae iste unde totam dicta, voluptate aut ab, reprehenderit praesentium aperiam exercitationem eum accusamus. Rem quibusdam harum minima odit labore distinctio voluptas ratione sunt et. Numquam, iure quo.
                    </p>
                </div>
                <div className="bg-[#1F2070] text-white rounded-2xl p-4 shadow-md flex flex-col items-start justify-start h-28 overflow-hidden">
                    <p>Option 3</p>
                    <p className="text-xs line-clamp-3">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam a facere quod recusandae iste unde totam dicta, voluptate aut ab, reprehenderit praesentium aperiam exercitationem eum accusamus. Rem quibusdam harum minima odit labore distinctio voluptas ratione sunt et. Numquam, iure quo.
                    </p>
                </div>
                <div className="bg-[#D3E8FD] text-blue-900 rounded-2xl p-4 shadow-md flex flex-col items-start justify-start h-28 overflow-hidden">
                    <p>Option 4</p>
                    <p className="text-xs line-clamp-3">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam a facere quod recusandae iste unde totam dicta, voluptate aut ab, reprehenderit praesentium aperiam exercitationem eum accusamus. Rem quibusdam harum minima odit labore distinctio voluptas ratione sunt et. Numquam, iure quo.
                    </p>
                </div>

                {/* Bottom Row Cards */}
                <div className="bg-white text-blue-900 rounded-2xl p-4 shadow-md flex flex-col items-start justify-start h-96 col-span-2 overflow-hidden">
                    <span className="font-semibold">Option 5</span>
                    <p className="text-xs line-clamp-custom" style={clampStyle6}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, cumque quisquam. Reiciendis, ex. Quibusdam alias accusantium maxime. Debitis exercitationem laborum saepe eum! Repudiandae nam doloremque molestias unde provident minus vel dolore dolorem corrupti deserunt dolores deleniti nesciunt, sapiente, at eius quam ab repellendus officiis eligendi eveniet cumque. Eum dicta quasi, qui, suscipit, eos beatae provident et blanditiis unde in consequatur consectetur quia ipsa. Quasi, dicta? Nobis, beatae obcaecati ipsam expedita iste cumque unde quas commodi nisi. Nesciunt laboriosam rem porro vero itaque eum voluptatibus ipsum illum placeat perferendis blanditiis exercitationem totam quisquam, consequatur accusamus sapiente earum! Dicta nesciunt odio exercitationem pariatur repellat dolore ad ullam, laudantium qui? Dolorum nobis error, saepe at ratione commodi nihil assumenda ipsam laudantium veniam inventore sint hic ipsum molestias illum! Voluptates facere tempora eaque explicabo enim exercitationem iste necessitatibus. Blanditiis necessitatibus et deleniti molestias atque ipsum error vero iste culpa, aperiam voluptates reiciendis voluptatem soluta minus consectetur labore facilis nihil? Natus labore voluptas eum at. Magni eum ex voluptates, excepturi doloremque odit pariatur amet laudantium cum impedit mollitia ut nostrum nobis ducimus iure, autem omnis. Delectus eum accusantium, placeat laudantium asperiores expedita ullam adipisci officia molestias fugiat facilis. Autem molestiae magni ipsam? Exercitationem quia, temporibus rem consequuntur provident in culpa deserunt odio magnam, rerum cupiditate ad ipsam necessitatibus officia magni! Dicta, voluptates eum autem deserunt in odit atque exercitationem tenetur earum et quisquam ex tempora voluptatibus iste maxime quibusdam harum officiis nihil rem, quaerat repellat? Consequuntur obcaecati amet, quos, tempore temporibus aspernatur modi deleniti quasi doloribus rerum voluptatum eum hic voluptate! Consequuntur vitae officiis provident! Doloremque possimus earum nemo excepturi deleniti corrupti deserunt incidunt, accusantium eius nostrum nulla voluptatem assumenda cumque vel debitis architecto rerum iure accusamus commodi dignissimos voluptate eligendi quos libero. Explicabo magnam pariatur qui debitis nostrum, velit excepturi consequatur natus eum tenetur.
                    </p>
                </div>
                <div className="bg-white text-blue-900 rounded-2xl p-4 shadow-md flex flex-col items-start justify-start h-96 overflow-hidden">
                    <span className="font-semibold">Option 6</span>
                    <p className="text-xs line-clamp-custom" style={clampStyle6}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, cumque quisquam. Reiciendis, ex. Quibusdam alias accusantium maxime. Debitis exercitationem laborum saepe eum! Repudiandae nam doloremque molestias unde provident minus vel dolore dolorem corrupti deserunt dolores deleniti nesciunt, sapiente, at eius quam ab repellendus officiis eligendi eveniet cumque. Eum dicta quasi, qui, suscipit, eos beatae provident et blanditiis unde in consequatur consectetur quia ipsa. Quasi, dicta? Nobis, beatae obcaecati ipsam expedita iste cumque unde quas commodi nisi. Nesciunt laboriosam rem porro vero itaque eum voluptatibus ipsum illum placeat perferendis blanditiis exercitationem totam quisquam, consequatur accusamus sapiente earum! Dicta nesciunt odio exercitationem pariatur repellat dolore ad ullam, laudantium qui? Dolorum nobis error, saepe at ratione commodi nihil assumenda ipsam laudantium veniam inventore sint hic ipsum molestias illum! Voluptates facere tempora eaque explicabo enim exercitationem iste necessitatibus. Blanditiis necessitatibus et deleniti molestias atque ipsum error vero iste culpa, aperiam voluptates reiciendis voluptatem soluta minus consectetur labore facilis nihil? Natus labore voluptas eum at. Magni eum ex voluptates, excepturi doloremque odit pariatur amet laudantium cum impedit mollitia ut nostrum nobis ducimus iure, autem omnis. Delectus eum accusantium, placeat laudantium asperiores expedita ullam adipisci officia molestias fugiat facilis. Autem molestiae magni ipsam? Exercitationem quia, temporibus rem consequuntur provident in culpa deserunt odio magnam, rerum cupiditate ad ipsam necessitatibus officia magni! Dicta, voluptates eum autem deserunt in odit atque exercitationem tenetur earum et quisquam ex tempora voluptatibus iste maxime quibusdam harum officiis nihil rem, quaerat repellat? Consequuntur obcaecati amet, quos, tempore temporibus aspernatur modi deleniti quasi doloribus rerum voluptatum eum hic voluptate! Consequuntur vitae officiis provident! Doloremque possimus earum nemo excepturi deleniti corrupti deserunt incidunt, accusantium eius nostrum nulla voluptatem assumenda cumque vel debitis architecto rerum iure accusamus commodi dignissimos voluptate eligendi quos libero. Explicabo magnam pariatur qui debitis nostrum, velit excepturi consequatur natus eum tenetur.
                    </p>
                </div>
                <div className="bg-white text-blue-900 rounded-2xl p-4 shadow-md flex flex-col items-start justify-start h-96 overflow-hidden">
                    <span className="font-semibold">Option 7</span>
                    <p className="text-xs line-clamp-custom" style={clampStyle6}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, cumque quisquam. Reiciendis, ex. Quibusdam alias accusantium maxime. Debitis exercitationem laborum saepe eum! Repudiandae nam doloremque molestias unde provident minus vel dolore dolorem corrupti deserunt dolores deleniti nesciunt, sapiente, at eius quam ab repellendus officiis eligendi eveniet cumque. Eum dicta quasi, qui, suscipit, eos beatae provident et blanditiis unde in consequatur consectetur quia ipsa. Quasi, dicta? Nobis, beatae obcaecati ipsam expedita iste cumque unde quas commodi nisi. Nesciunt laboriosam rem porro vero itaque eum voluptatibus ipsum illum placeat perferendis blanditiis exercitationem totam quisquam, consequatur accusamus sapiente earum! Dicta nesciunt odio exercitationem pariatur repellat dolore ad ullam, laudantium qui? Dolorum nobis error, saepe at ratione commodi nihil assumenda ipsam laudantium veniam inventore sint hic ipsum molestias illum! Voluptates facere tempora eaque explicabo enim exercitationem iste necessitatibus. Blanditiis necessitatibus et deleniti molestias atque ipsum error vero iste culpa, aperiam voluptates reiciendis voluptatem soluta minus consectetur labore facilis nihil? Natus labore voluptas eum at. Magni eum ex voluptates, excepturi doloremque odit pariatur amet laudantium cum impedit mollitia ut nostrum nobis ducimus iure, autem omnis. Delectus eum accusantium, placeat laudantium asperiores expedita ullam adipisci officia molestias fugiat facilis. Autem molestiae magni ipsam? Exercitationem quia, temporibus rem consequuntur provident in culpa deserunt odio magnam, rerum cupiditate ad ipsam necessitatibus officia magni! Dicta, voluptates eum autem deserunt in odit atque exercitationem tenetur earum et quisquam ex tempora voluptatibus iste maxime quibusdam harum officiis nihil rem, quaerat repellat? Consequuntur obcaecati amet, quos, tempore temporibus aspernatur modi deleniti quasi doloribus rerum voluptatum eum hic voluptate! Consequuntur vitae officiis provident! Doloremque possimus earum nemo excepturi deleniti corrupti deserunt incidunt, accusantium eius nostrum nulla voluptatem assumenda cumque vel debitis architecto rerum iure accusamus commodi dignissimos voluptate eligendi quos libero. Explicabo magnam pariatur qui debitis nostrum, velit excepturi consequatur natus eum tenetur.
                    </p>
                </div>
                <div className="bg-white text-blue-900 rounded-2xl p-4 shadow-md flex flex-col items-start justify-start h-96 col-span-2 overflow-hidden">
                    <span className="font-semibold">Option 8</span>
                    <p className="text-xs line-clamp-custom" style={clampStyle6}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, cumque quisquam. Reiciendis, ex. Quibusdam alias accusantium maxime. Debitis exercitationem laborum saepe eum! Repudiandae nam doloremque molestias unde provident minus vel dolore dolorem corrupti deserunt dolores deleniti nesciunt, sapiente, at eius quam ab repellendus officiis eligendi eveniet cumque. Eum dicta quasi, qui, suscipit, eos beatae provident et blanditiis unde in consequatur consectetur quia ipsa. Quasi, dicta? Nobis, beatae obcaecati ipsam expedita iste cumque unde quas commodi nisi. Nesciunt laboriosam rem porro vero itaque eum voluptatibus ipsum illum placeat perferendis blanditiis exercitationem totam quisquam, consequatur accusamus sapiente earum! Dicta nesciunt odio exercitationem pariatur repellat dolore ad ullam, laudantium qui? Dolorum nobis error, saepe at ratione commodi nihil assumenda ipsam laudantium veniam inventore sint hic ipsum molestias illum! Voluptates facere tempora eaque explicabo enim exercitationem iste necessitatibus. Blanditiis necessitatibus et deleniti molestias atque ipsum error vero iste culpa, aperiam voluptates reiciendis voluptatem soluta minus consectetur labore facilis nihil? Natus labore voluptas eum at. Magni eum ex voluptates, excepturi doloremque odit pariatur amet laudantium cum impedit mollitia ut nostrum nobis ducimus iure, autem omnis. Delectus eum accusantium, placeat laudantium asperiores expedita ullam adipisci officia molestias fugiat facilis. Autem molestiae magni ipsam? Exercitationem quia, temporibus rem consequuntur provident in culpa deserunt odio magnam, rerum cupiditate ad ipsam necessitatibus officia magni! Dicta, voluptates eum autem deserunt in odit atque exercitationem tenetur earum et quisquam ex tempora voluptatibus iste maxime quibusdam harum officiis nihil rem, quaerat repellat? Consequuntur obcaecati amet, quos, tempore temporibus aspernatur modi deleniti quasi doloribus rerum voluptatum eum hic voluptate! Consequuntur vitae officiis provident! Doloremque possimus earum nemo excepturi deleniti corrupti deserunt incidunt, accusantium eius nostrum nulla voluptatem assumenda cumque vel debitis architecto rerum iure accusamus commodi dignissimos voluptate eligendi quos libero. Explicabo magnam pariatur qui debitis nostrum, velit excepturi consequatur natus eum tenetur.
                    </p>
                </div>
                <div className="bg-white text-blue-900 rounded-2xl p-4 shadow-md flex flex-col items-start justify-start h-96 col-span-2 overflow-hidden">
                    <span className="font-semibold">Option 9</span>
                    <p className="text-xs line-clamp-custom" style={clampStyle6}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, cumque quisquam. Reiciendis, ex. Quibusdam alias accusantium maxime. Debitis exercitationem laborum saepe eum! Repudiandae nam doloremque molestias unde provident minus vel dolore dolorem corrupti deserunt dolores deleniti nesciunt, sapiente, at eius quam ab repellendus officiis eligendi eveniet cumque. Eum dicta quasi, qui, suscipit, eos beatae provident et blanditiis unde in consequatur consectetur quia ipsa. Quasi, dicta? Nobis, beatae obcaecati ipsam expedita iste cumque unde quas commodi nisi. Nesciunt laboriosam rem porro vero itaque eum voluptatibus ipsum illum placeat perferendis blanditiis exercitationem totam quisquam, consequatur accusamus sapiente earum! Dicta nesciunt odio exercitationem pariatur repellat dolore ad ullam, laudantium qui? Dolorum nobis error, saepe at ratione commodi nihil assumenda ipsam laudantium veniam inventore sint hic ipsum molestias illum! Voluptates facere tempora eaque explicabo enim exercitationem iste necessitatibus. Blanditiis necessitatibus et deleniti molestias atque ipsum error vero iste culpa, aperiam voluptates reiciendis voluptatem soluta minus consectetur labore facilis nihil? Natus labore voluptas eum at. Magni eum ex voluptates, excepturi doloremque odit pariatur amet laudantium cum impedit mollitia ut nostrum nobis ducimus iure, autem omnis. Delectus eum accusantium, placeat laudantium asperiores expedita ullam adipisci officia molestias fugiat facilis. Autem molestiae magni ipsam? Exercitationem quia, temporibus rem consequuntur provident in culpa deserunt odio magnam, rerum cupiditate ad ipsam necessitatibus officia magni! Dicta, voluptates eum autem deserunt in odit atque exercitationem tenetur earum et quisquam ex tempora voluptatibus iste maxime quibusdam harum officiis nihil rem, quaerat repellat? Consequuntur obcaecati amet, quos, tempore temporibus aspernatur modi deleniti quasi doloribus rerum voluptatum eum hic voluptate! Consequuntur vitae officiis provident! Doloremque possimus earum nemo excepturi deleniti corrupti deserunt incidunt, accusantium eius nostrum nulla voluptatem assumenda cumque vel debitis architecto rerum iure accusamus commodi dignissimos voluptate eligendi quos libero. Explicabo magnam pariatur qui debitis nostrum, velit excepturi consequatur natus eum tenetur.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
