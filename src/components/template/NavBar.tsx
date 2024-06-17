// <!--shift + alt + f to format the document-->
// <!--Format Document (Ctrl+Shift+I) - 
//     Format the entire active file. 
//     Format Selection (Ctrl+K Ctrl+F) - 
//     Format the selected text.-->

import { MouseEventHandler, useContext } from "react";
import { Link } from "react-router-dom";
import { UserProfileContext } from "../contexts/UserContext";
export default function NavBar() {

    const user = useContext(UserProfileContext);

    function handleAuthorization() {
        if (!user)
            console.log("You have to login first");

    }

    return (
        <>
            <header>

                <h1>
                    <img src="" alt="logo"></img>
                    <Link to="/">HAPPY LEARNING</Link>
                </h1>
            </header>
            <nav>
                <ul>
                    <li id="li_experiment_series">
                        <Link to="/series">Science Experiment Series</Link>
                        <ul>
                            <Link to="/stemseries">STEM</Link>
                            <Link to="/roboticseries">Robotics</Link>
                        </ul>
                    </li>
                    <li id="li_programming_languages">
                        <Link to="/programminglangueges">Programming</Link>
                        <ul>
                            <Link to="/ml">Machine Learning</Link>
                            <Link to="/scratch">Scratch</Link>
                            <Link to="/unity">Unity</Link>
                        </ul>
                    </li>
                    <li id="li_games">
                        {/* <a href="">Contactos</a> */}
                        <Link to="/games" onClick={handleAuthorization}>Games</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}