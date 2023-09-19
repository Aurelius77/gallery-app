import React, { useState, useEffect } from "react";
import '../styles/index.css'
import Loader from "./Loader";
import Navbar from './Navbar'
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

export default function Gallery(){
const ACCESS_KEY = import.meta.env.VITE_ACCESS_KEY
const [images, setImages] = React.useState([])
const [loading, setLoading] = useState(true)
const [itemOrder, setItemOrder] = useState([]);
const storageKey = "galleryItemOrder";

 function saveOrderToLocalStorage (order)  {
    localStorage.setItem(storageKey, JSON.stringify(order));
  };

   function loadOrderFromLocalStorage () {
    const storedOrder = localStorage.getItem(storageKey);
    if (storedOrder) {
      setItemOrder(JSON.parse(storedOrder));
    }
  };


async function fetchRequest(){
  const data = await fetch(
    `https://api.unsplash.com/photos?page=1&per_page=35&client_id=${ACCESS_KEY}&fit=max`
  );
  console.log('API Response:', data);
  const dataJ = await data.json();
  console.log(dataJ);
  setImages(dataJ)
  setLoading(false)
};
React.useEffect(() => {
   loadOrderFromLocalStorage();
   fetchRequest();
   
}, []);

const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const reorderedImages = [...images];
    const [reorderedItem] = reorderedImages.splice(result.source.index, 1);
    reorderedImages.splice(result.destination.index, 0, reorderedItem);
    
    setImages(reorderedImages);
    saveOrderToLocalStorage(reorderedImages)
    

}


function filterSearch(val){
 

 const filteredImages = val ? images.filter((image)=>(
  image.user.first_name.toLowerCase().includes(val.toLowerCase())
 )) : images;
 setImages(filteredImages)
 console.log(images)
}


const displayOrder = itemOrder.length> 0 ? itemOrder : images

    return(
        <>
        <Navbar onSearch = {filterSearch}/>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="imageList" direction="horizontal">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="grid-container"
            >
              {loading ? (
                <Loader />
              ) : (
                images.map((image, index) => (
                  <Draggable
                    key={image.id}
                    draggableId={image.id}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        className="grid-items"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <div className="container">
                          <img
                            src={image.urls.regular}
                            className="grid-image"
                            style={{ objectFit: "cover" }}
                            alt={image.user.first_name}
                          />
                          <p className="tag-text">{image.user.first_name}</p>
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))
              )}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
        </>
    )
}