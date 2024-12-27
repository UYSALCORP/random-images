import data from '../helper/data'
import Picture from '../components/Picture'

const Homepage = () => {
    return (
        <div className="gallery">
            {data.map((item, index)=> (
                <Picture key={index}
                photographer={item.photographer}
                src ={item.src.large}
                />
            ))}
        </div>
    )
}

export default Homepage