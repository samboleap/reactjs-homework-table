import Marquee from "react-fast-marquee";
//define components
export function Welcome(props){
    return <Marquee style={welcome}>Welcome, {props.title}</Marquee>
}
const welcome = {
    color: 'blue',
    fontSize: 40
}