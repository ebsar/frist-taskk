import { FaRuler } from 'react-icons/fa';
import { BsGlobe, BsSearch, BsPercent } from "react-icons/bs";
import { MdDomain } from "react-icons/md";
import { BiAward } from "react-icons/bi";
import {RiText} from "react-icons/ri"
import { HiOutlineSpeakerphone, HiOutlineLightBulb } from "react-icons/hi";
import "./index.css";
const sometext=[
  {
    title: "The TLD",
    icon: <MdDomain/>,
    text: " Does the domain extension math language of the domain name?"
  },
  {
    title: "Domain Length",
    icon: <FaRuler/>,
    text: " Is the domain short enough to remember?"
  },
  {
    title: "Language",
    icon: <BsGlobe/>,
    text: "  How complex is the actual domain name?"
  },
  {
    title: "International reognite",
    icon: <BiAward/>,
    text: "Can the domain name be used on an international scale?"
  },
  {
    title: "Search engine",
    icon: <BsSearch/>,
    text: " How complex is the actual domain name?"
  },
  {
    title: "Advertising Potential",
    icon: <HiOutlineSpeakerphone/>,
    text: "Could the main be used for advertising campaigns?"
  },
  {
    title: "Sales opportunities",
    icon: <BsPercent/>,
    text: "Can the domain name be used on an international scale?"
  },
  {
    title: "Typo susceptibility",
    icon: <RiText/>,
    text: "How high is the risk of mistyping the domain name?"
  },
  
  {
    title: "Business potential" ,
    icon: <HiOutlineLightBulb/>,
    text: "Can the domain be used as your company address?"
  },
];
function App() {
  return (
     <div className='container'>
      {sometext.map((sometextt) => (   
      <div className='post-container'>
        <div class="post-thumb">{sometextt.icon}</div>
        <div class="post-title">{sometextt.title}
        <p className='text'>{sometextt.text}</p></div>
      </div>
       ))}
    </div>
  );
}

export default App;



















