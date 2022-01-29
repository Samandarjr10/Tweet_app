import "./Main.scss";
import React from "react";
import { Context } from "../../Context/Localization";
import { Context as ThemeContext} from "../../Context/Theme"

import Movlonov from "../../Assets/Images/movlonov.png"
import Stark from "../../Assets/Images/yulduz.svg"
import Picture from "../../Assets/Images/izabrajeniya.svg"
import Gif from "../../Assets/Images/gif.svg"
import Stats from "../../Assets/Images/stats.svg"
import Smile from "../../Assets/Images/smile.svg"
import Data from "../../Assets/Images/data.svg"
import data from "../../Localization/Data";

import { NavLink } from "react-router-dom";

function Main() {
    const { state,  setState } = React.useContext(Context);

    const { theme,  setTheme } = React.useContext(ThemeContext);

    const [ users, setUsers ] = React.useState([]);

    React.useEffect(() => {
		(async () => {
			try {
				const response = await fetch('https://reqres.in/api/users');
				const data = await response.json();

				if (data?.data?.length > 0) {
					setUsers([...data.data]);
				}
			} catch (err) {
				console.log(err);
			}
		})();
	}, []);

    return <div id="home" className={ theme === "light" ? "light" : "dark"}>
    <div className="select__wrapper">
        <select className='select' onChange={evt => setState(evt.target.value)}>
                <option value="en">EN</option>
                <option value="ru">RU</option>
                <option value="uz">UZ</option>
        </select>
        <select className="select" value={theme} onChange={evt => setTheme(evt.target.value)}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
        </select>
    </div>

    <section className="hero">
        <div className="home__wrapper">
            <h2 id="home__wrapper-heading" className={ theme === "light" ? "light" : "dark"}>{data[state].home.hero.homeWrapper.homeWrapperHeading.Home}</h2>
            <img className="home__wrapper-star" src={Stark} alt="star" width={22} height={21} />
        </div>
        <span className="line"></span>
        <div className="home__inner-wrapper">
             <img className="home__inner-wrapper-img" src={Movlonov} alt="movlonov" width={60} height={61} />
             <h3 id="home__inner-wrapper-heading" className={ theme === "light" ? "light" : "dark"}>{data[state].home.hero.homeInnerWrapper.homeInnerWrapperHeading.WhatsHappening}</h3>
        </div>
        <div className="home__list-wrapper">
            <ul className="home__list">
                <li className="home_list-item">
                    <button className="home__list-btn">
                        <img className="home__list-img" src={Picture} alt="future" width={20} height={20} />
                    </button>
                    </li>
                <li className="home_list-item">
                    <button className="home__list-btn" >
                        <img className="home__list-img" src={Gif} alt="future" width={21} height={20} />
                    </button>
                </li>
                <li className="home__list-item">
                    <button className="home__list-btn">
                        <img className="home__list-img" src={Stats} alt="future" width={20} height={19} />
                    </button>
                </li>
                <li className="home__list-item">
                    <button className="home__list-btn">
                        <img className="home__list-img" src={Smile} alt="future" width={21} height={21} />
                    </button>
                </li>
                <li className="home__list-item">
                    <button className="home__list-btn">
                        <img className="home__list-img" src={Data} alt="future" width={20} height={20} />
                    </button>
                </li>
            </ul>
            <a id="btn__tweet" className={ theme === "light" ? "light" : "dark"}>{data[state].home.hero.homeListWrapper.button.Tweet}</a>
        </div>
        <span className="line line-2"></span>

        <ul className="user-list">
            {users.length > 0 && users.map((user) => (
                <li className="user-list__item" key={user.id}>
                <NavLink className="navlink" to={'profill/' + user.id}>
                    <div className="user-list__wrapper">
                        <img className="rounded-circle user-list__img" src={user.avatar} width='60' height='61' alt={user.last_name + "'s avatar"}/>
                        <div>
                            <h3 id="user__heading" className={ theme === "light" ? "light" : "dark"}>
                                {user.first_name + ' ' + user.last_name}
                            </h3>
                            <a id="user-list__link" className={ theme === "light" ? "light" : "dark"} href={'mailto:' + user.email}>
                                {user.email}
                            </a>
                            <p id="user__text" className={ theme === "light" ? "light" : "dark"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis non debitis nostrum dignissimos, vero voluptates.</p>
                        </div>
                    </div>
                </NavLink>
                <span className="line"></span>
            </li>
            ))}
        </ul>
    </section>  
    </div>
}

export default Main