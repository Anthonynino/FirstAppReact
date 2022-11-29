
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({category}) => {

  const { images, isLoading } = useFetchGifs(category);


  return (
    <>
        <h2 className="p-3 h1 text-bold animate__bounceInLeft"> <strong>{category} </strong></h2>
        
        {
          isLoading
          ? ( <h2>Cargando...</h2>) 
          : null
        }
    
          <div className=" row justify-content-center">
          {
              images.map( (images) => (
                <GifItem 
                       key={images.id }
                       {...images}
                 />
              ))

          }
          </div>
        
    </>


  )
}
