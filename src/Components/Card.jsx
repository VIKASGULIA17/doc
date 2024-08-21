import React, { useState } from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaRegFileAlt } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion"
const Card = ({ data,reference }) => {
  return (
    <>
      <motion.div drag dragConstraints={reference} whileDrag={{scale:1.1}} className="relative w-60 h-72 rounded-[50px] bg-zinc-900/90 overflow-hidden p-5 text-white">
        <FaRegFileAlt />
        <p className="mt-5 text-xl leading-tight font-semibold flex items-center justify-center py-7">
          {data.title}
        </p>

        <div className="footer bottom-0 absolute w-full   left-0">
          <div className="flex justify-between items-center px-8 py-5 mb-3">
            <h5>{data.size}</h5>
            <span className="w-7 h-7 bg-zinc-700 flex items-center rounded-full justify-center">
              {data.close ? <IoCloseSharp /> : <MdOutlineFileDownload />}
            </span>
          </div>
          {data.tag.isopen &&(
           <div className={`tag w-full p-3 ${data.tag.color==="blue"?"bg-blue-400" :(data.tag.color==="red"?"bg-red-400":"bg-green-500")} flex justify-center`}>
            <h5 className=" text-md font-semibold">{data.tag.tagtitle}</h5>
          </div>)}
          
        </div>
      </motion.div>
    </>
  );
};

export default Card;
