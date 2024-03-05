import './headerMaster.css'
import { useSpring, animated } from '@react-spring/web'

function HeaderMaster() {


  const props = useSpring({
    from: { size: '20%' },
    to: { size: '100%' },
    config: { duration: 3000 },
  })


  return (
   <>
   
   <section className="master" style={props}>
        <h1>Blog Smart Home</h1>
        <p>
          our creative solution is always there for people to to higher their quality of life 
          so we always hope to be able to support more devices & categories 
         here you can find our latest and greatest achievement in the IOT felid 
        </p>
      </section>
   
   </>
  )
}

export default HeaderMaster