import Navbar from "../components/Built/Navbar"
import Card from "../components/Built/Card"
import Footer from "../components/Built/Footer"
import Form from '../components/Built/Form'
import Description from '../components/Built/Description'
import HeaderTemp from '../components/Temp/HeaderTemp'
import FooterTemp from '../components/Temp/FooterTemp'
import DescriptionTemp from '../components/Temp/DescriptionTemp'
import CardTemp from '../components/Temp/CardTemp'
import FormTemp from '../components/Temp/FormTemp'

export const sidecom = [
    {
        id : 1,
        alias : "Navbar",
        bodyContent : <Navbar/>,
        defaultContent : <HeaderTemp/>,
        hasDrop : false
    },
    {
        id : 2,
        alias : "Form",
        bodyContent : <Form/>,
        defaultContent : <FormTemp/>,
        hasDrop : false
    },
    {
        id : 3,
        alias : "Card",
        bodyContent : <Card/>,
        defaultContent : <CardTemp/>,
        hasDrop : false
    },
    {
        id : 4,
        alias : "Description",
        bodyContent : <Description/>,
        defaultContent : <DescriptionTemp/>,
        hasDrop : false
    },
    {
        id : 5,
        alias : "Footer",
        bodyContent : <Footer/>,
        defaultContent : <FooterTemp/>,
        hasDrop : false
    },
]