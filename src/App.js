import Header from "./component/Header";
import Content01 from "./component/Content01";
import Content02 from "./component/Content02";
import Content03 from "./component/Content03";
import Footer from "./component/Footer";
import { Link, Route, Routes } from "react-router-dom";
import Detail from "./component/Detail";
import { DATA } from "./data/data";
import { useEffect, useState } from "react";
import styled from "styled-components";


const SECTION = styled.section`
width: 1200px;
margin: 0 auto;
display: grid;
grid-template-columns: repeat(5, 1fr);
gap: 10px;
img {
    max-width: 100%;
}
`

const App = () => {
    const [itm, setItm] = useState([]);
    const getItm = async () => {
        const itm = await fetch('https://desipossa.github.io/shop_cra/assets/data.json')
            .then(r => r.json());
        console.log(itm);
        setItm(itm);
    }
    useEffect(() => {
        getItm()
    }, []);
    return (
        <>
            <Header />

            <Routes>
                {/* <Route path="/" element={<Content01 />} /> */}

                <Route path="/" element={<SECTION>
                    {
                        itm.slice(100, 110).map(it => {
                            return (
                                <div>
                                    <Link to={`/detail/${it.id}`}>
                                        <img src={it.image_link} alt="" />
                                    </Link>
                                </div>
                            )
                        })
                    }
                </SECTION>} >

                    <Route index element={<Content01 />} />
                </Route>
                <Route path="/01" element={<Content01 />} />
                <Route path="/02" element={<Content02 />} />
                <Route path="/03" element={<Content03 />} />
                <Route path="/detail/:id" element={<Detail itm={itm} />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App;