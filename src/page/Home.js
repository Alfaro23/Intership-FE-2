import { useSelector } from "react-redux";

export const Home = () => {

    const test = useSelector(state => state.toolkit);
    console.log(test);

    return(
        <h1>Hello</h1>
    )
}