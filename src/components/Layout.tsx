import React, { useEffect } from 'react';
import logo from './../assets/logo.png';
import './../sass/layout.scss';
import { Outlet, Link, useLocation, Location } from 'react-router-dom';
import { useState } from 'react';
import Cookies from 'js-cookie';



interface objForNav {
    name: string, path: string
}
const Layout: React.FC = () => {
    const location: Location<{ pathname: string }> = useLocation();

    const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);
    const [allCallsDone, setAllCallsDone] = useState<boolean>(false);
    const [activePage, setActivePage] = useState<string>(location.pathname.split('/')[1])


    var listForNav: objForNav[];


    useEffect(() => {
        setIsUserLoggedIn(Cookies.get('usernames') && Cookies.get('usernames').length > 0);
        setActivePage(location.pathname.split('/')[1])
        setAllCallsDone(true);
    }, [])



    const onClickHandler: (page: string) => void = (page: string) => {

        console.log('click is being called', page);
        setActivePage(page)
        return;
    }


    listForNav = isUserLoggedIn ? [{ name: 'Profile', path: 'profile' }] : [{ name: 'Home', path: '' }, { name: 'Sign Up', path: 'signup' }, { name: 'Log In', path: 'login' }];



    return (<>
        { allCallsDone && <><header className='header'>

            <nav className='header-nav'>
                <Link to={'home'} ><span className='app-logo'> <img src={logo} alt="" /> <span className='app-name'>ENVELOPE </span> </span></Link>
                <span className='header-nav-list'>
                    {listForNav.map((ele) => {
                        return <Link className={`nav-ele ${activePage === ele.path ? 'active' : ''}`} onClick={() => onClickHandler(ele.path)} to={ele.path}>{ele.name}</Link>
                    })}

                </span>
            </nav>
        </header>
            <Outlet /> </>
        }
        {
            !allCallsDone && <div className="loader"></div>
        }
    </>)
}
export default Layout;