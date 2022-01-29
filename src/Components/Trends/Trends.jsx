import data from "../../Localization/Data";
import { Context } from "../../Context/Localization";
import { Context as ThemeContext } from "../../Context/Theme"
import "./Trends.scss"
import React from "react";
import Settings from "../../Assets/Images/settings.svg"
import Nuqta from "../../Assets/Images/nuqta.svg"
import Mushtariy from "../../Assets/Images/Ellipse2.png"
import Boy from "../../Assets/Images/Ellipse.png"

import { NavLink } from "react-router-dom"

function Trend() {
    const {state} = React.useContext(Context);
    const { theme } = React.useContext(ThemeContext);
    
    return <div id="trend-wrapper" className={theme === "light" ? "light" : "dark"}>
        <div className="trend">
            <input className="form-control" type="text" placeholder={data[state].trend.trendWrapper.searchTwitter} />
        </div>
        <div id="revolition" className={theme === "light" ? "light" : "dark"}>
            <div className="revolition__wrapper">
                <h3 id="revolition__heading" className={theme === "light" ? "light" : "dark"}>
                    {data[state].trend.revolitionWrapper.revolitionHeading.Trendsforyou}
                </h3>
                <img src={Settings} alt="settings" width={21} height={21} />
            </div>
            <ul className="list">
                <li className="list__item">
                    <div className="list__wrapper">
                        <p id="list__treending-text" className={theme === "light" ? "light" : "dark"}>Trending in Germany</p>
                        <h5 id="list__heading" className={theme === "light" ? "light" : "dark"}>
                            Revolution
                        </h5>
                        <p id="list__text" className={theme === "light" ? "light" : "dark"}>
                            50.4K {data[state].trend.list.listWrapper.listText.Tweets}
                        </p>
                    </div>
                    <img src={Nuqta} alt="nuqta" width={17} height={4}/>
                </li>
                <li className="list__item">
                    <div className="list__wrapper">
                        <p id="list__treending-text" className={theme === "light" ? "light" : "dark"}>Trending in Germany</p>
                        <h5 id="list__heading" className={theme === "light" ? "light" : "dark"}>
                            Revolution
                        </h5>
                        <p id="list__text" className={theme === "light" ? "light" : "dark"}>
                            50.4K {data[state].trend.list.listWrapper.listText.Tweets}
                        </p>
                    </div>
                    <img src={Nuqta} alt="nuqta" width={17} height={4}/>
                </li>
                <li className="list__item">
                    <div className="list__wrapper">
                        <p id="list__treending-text" className={theme === "light" ? "light" : "dark"}>Trending in Germany</p>
                        <h5 id="list__heading" className={theme === "light" ? "light" : "dark"}>
                            Revolution
                        </h5>
                        <p id="list__text" className={theme === "light" ? "light" : "dark"}>
                            50.4K {data[state].trend.list.listWrapper.listText.Tweets}
                        </p>
                    </div>
                    <img src={Nuqta} alt="nuqta" width={17} height={4}/>
                </li>
            </ul>
            <a id="show-more" href="#" className={theme === "light" ? "light" : "dark"}>{data[state].trend.showMore.ShowMore}</a>
        </div>
        <div id="might" className={theme === "light" ? "light" : "dark"}>
            <h3 className={theme === "light" ? "light" : "dark"} id="might__heading">{data[state].trend.might.mightHeading.YouMightLike.Youmightlike}</h3>
            <ul className="might__list">
                <li className="might__list-item">
                    <img className="might__list-img" src={Mushtariy} alt="img-mushtariy" width={60} height={60}/>
                    <div className="might__list-wrapper">
                        <h4 id="might__list-heading" className={theme === "light" ? "light" : "dark"}>Mushtariy</h4>
                        <p id="might__list-text" className={theme === "light" ? "light" : "dark"}>@Mushtar565266</p>
                    </div>
                    <a id="might__list-link" href="#" className={theme === "light" ? "light" : "dark"}>{data[state].trend.might.mightList.mightListItem.mightListLink.Follow}</a>
                </li>
                <li className="might__list-item">
                    <img className="might__list-img" src={Boy} alt="img-mushtariy" width={60} height={60}/>
                    <div className="might__list-wrapper">
                        <h4 id="might__list-heading" className={theme === "light" ? "light" : "dark"}>Mushtariy</h4>
                        <p id="might__list-text" className={theme === "light" ? "light" : "dark"}>@Mushtar565266</p>
                    </div>
                    <a id="might__list-link" href="#" className={theme === "light" ? "light" : "dark"}>{data[state].trend.might.mightList.mightListItem.mightListLink.Follow}</a>
                </li>
            </ul>
            <a id="show-more" href="#" className={theme === "light" ? "light" : "dark"}>{data[state].trend.showMore.ShowMore}</a>
        </div>
        <ul className="link__list">
            <li className="link__list-item">
                <a id="link__list-link" href="#" className={theme === "light" ? "light" : "dark"}>Terms of Service</a>
            </li>
            <li className="link__list-item">
                <a id="link__list-link" href="#" className={theme === "light" ? "light" : "dark"}>Privacy Policy</a>
            </li>
            <li className="link__list-item">
                <a id="link__list-link" href="#" className={theme === "light" ? "light" : "dark"}>Cookie Policy</a>
            </li>
            <li className="link__list-item">
                <a id="link__list-link" href="#" className={theme === "light" ? "light" : "dark"}>Imprint</a>
            </li>
            <li className="link__list-item">
                <a id="link__list-link" href="#" className={theme === "light" ? "light" : "dark"}>Ads Info</a>
            </li>
            <li className="link__list-item">
                <a id="link__list-link" href="#" className={theme === "light" ? "light" : "dark"}>More</a>
            </li>
            <li className="link__list-item">
                <a id="link__list-link" href="#" className={theme === "light" ? "light" : "dark"}>© 2021 Twitter, Inc.</a>
            </li>
        </ul>
    </div>
}

export default Trend;