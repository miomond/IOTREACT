import "./styleBlog.css";
import LandinngFooterSection from "../../components/footer/LandinngFooterSection";
import  secondImg1 from "../../assets/inner1.jpeg";
import secondImg2 from "../../assets/dash.png";
import secondImg3 from "../../assets/tv.jpg";
import axios from 'axios'
import { useState } from "react";
import { useEffect } from "react";
import PostPage from "./PostsPage/PostPage";
import HeroPost from "./heroPost/HeroPost";
import SearchInput from "./searchInput/SearchInput";
import HeaderMaster from "./master/HeaderMaster";
import MasterPost from "./masterPost/MasterPost";




const itemData = [
  {
    img: `${secondImg1}`,
    title: 'Control your living room ',
    paragraph:'Imagine your all device controller become on your smart phone with one click away its time to say goodbye for tv remote controller who keep hiding from you every single time you need it '
  },
  {
    img: `${secondImg2}`,
    title: 'Control your office ',
    paragraph:'with our automated temperature sensors controlling the Air conditioner its time to say its never too cold nor too hot  to be able to focus more on your job avoiding any boring useless waste of time movement  '
  },
  {
    img: `${secondImg3}`,
    title: 'Control Your Kitchen',
    paragraph:'with us your kitchen can be more enjoyable because finally you can make sure that nothing will be burnt or got out the oven early because you always can know when its done and can stop the heat once its done even if you were outside the kitchen'
  }
]
function BlogPage() {

  const [products , setProducts]= useState([])
  useEffect(()=>{
      axios.get('http://localhost:5000/user').then(res=>{
          // console.log(res.data.products);
          setProducts([...res.data.products])
      })
  },[])

console.log(products);

  return (
    <>
      <HeaderMaster></HeaderMaster>

      <SearchInput></SearchInput>

      <MasterPost></MasterPost>


      <div className="parent-second  d-flex justify-content-around w-100 flex-wrap " style={{width:'fit-content',height:'fit-content'}}>
     
          {
            itemData.map((item,i)=>{
              return(
                <div>
              <HeroPost item={item}  i={i} />
              </div>)
            })
          }


        </div>




        {
            itemData.map((item,i)=>{
              return(
                
              <PostPage item={item}  i={i} />
            )
            })
          }
  
      <LandinngFooterSection></LandinngFooterSection>
    </>
  );
}

export default BlogPage;
