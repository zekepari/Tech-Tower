import { useEffect } from "react";

function Home(props) {
    console.log(props.title)
    useEffect(() => {
        document.title = props.title || ""
    }, [props.title])

    return
}

export default Home;