
import BasketInfo from '../basket-info'

import { useNavigate } from "react-router-dom";

import './Header.css'


function Header(props){

    const getAuthUser =  JSON.parse(sessionStorage.getItem('authUser'))

    const navigate = useNavigate()


    function goBack(){
        navigate(-1)
    }

    function goExit(){
        navigate("/")
    }


    function GetBtnToBack(){
        return (
            <button className="btn-toback" onClick={goBack}>
                  <img srcSet="/ReactApp_Burger-site/images/icon/back-icon.svg" alt="назад" />
            </button>
        )
    }

    return (
        <header className="header">
                <div className="container header-wrapper">
                    {(props.addBtnToBack) ? <GetBtnToBack />: ""}

                    <h1 className='header__title'>
                        {(props.addTitle) ? props.addTitle : ""}
                    </h1>

                    {(props.addBasket) ? <BasketInfo />: ""}


                    <div className='header__user-auth user-auth'>
                        <p>
                            <span>Пользователь :</span><br></br>
                            <span>{getAuthUser.login}</span>
                        </p>
                        <button className="btn-secondary" onClick={goExit}>
                            <img srcSet="/ReactApp_Burger-site/images/icon/exit-icon.svg" width="30" alt="" />
                        </button>
                    </div>
                    
                </div>
        </header>
    )
}

export default Header