import React, { useEffect } from 'react';
import logo from './../assets/logo.png';
import './../sass/layout.scss';
import { Outlet, Link } from 'react-router-dom';
import { useState } from 'react';
import Cookies from 'js-cookie';
// import { set } from 'js-cookie';

interface objForNav {
    name: string, path: string
}
const Layout: React.FC = () => {

    const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);
    const [allCallsDone, setAllCallsDone] = useState<boolean>(false);

    var listForNav: objForNav[];


    useEffect(() => {
        setIsUserLoggedIn(Cookies.get('usernames') && Cookies.get('usernames').length > 0);
        setTimeout(() => {

            setAllCallsDone(true);
        }, 3000)
        // setIsUserLoggedIn(true);
    }, [])

    listForNav = isUserLoggedIn ? [] : [{ name: 'Sign Up', path: 'signup' }, { name: 'Log In', path: 'login' }];



    return (<>
        { allCallsDone && <header className='header'>

            <nav className='header-nav'>
                <Link to={'home'} ><span className='app-logo'> <img src={logo} alt="" /> <span className='app-name'>ENVELOPE </span> </span></Link>
                <span className='header-nav-list'>
                    {listForNav.map((ele) => {
                        return <Link className='nav-ele' to={ele.path}>{ele.name}</Link>
                    })}

                </span>
            </nav>
        </header>
        }
        {
            !allCallsDone && <div className="loader"></div>
        }
        <Outlet />
        {/* <div className="divider"></div> */}
    </>)
}
export default Layout;