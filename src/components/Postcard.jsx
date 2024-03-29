import React from "react";
import { Link } from "react-router-dom";
import service from "../appwrite/config";

function Postcard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-white/10 backdrop-blur-sm rounded-xl p-2 hover:scale-105 duration-200">
        <div className="w-full justify-center mb-4 max-h-[70%]">
          <img
            src={service.getFilePreview(featuredImage)}
            alt={title}
            className="rounded-xl"
          />
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  );
}

export default Postcard;
