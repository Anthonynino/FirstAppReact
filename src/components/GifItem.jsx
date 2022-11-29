import PropTypes from 'prop-types'

export const GifItem = ({ title, url, id }) => {



  return (
   
        <div className=" col-sm-12 col-md-6 col-lg-3 card m-1 gap-1 shadow" style={{width:'20rem'}} >

          <img src={ url } alt={ title } width={150} height={200} className ='card-img-top pt-2' />
          <div className='card-body'>
          <p className='card-title text-center'>{title}</p>
          </div>
        </div>
    
  )
}

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
