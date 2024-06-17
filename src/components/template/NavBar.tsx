// <!--shift + alt + f to format the document-->
// <!--Format Document (Ctrl+Shift+I) - 
//     Format the entire active file. 
//     Format Selection (Ctrl+K Ctrl+F) - 
//     Format the selected text.-->

import { Link } from "react-router-dom";
export default function NavBar() {
    return (
        <>
            <header>
                <h1>
                    <div><Link to="/signin">Sign in</Link></div>
                    <div><Link to="/">HAPPY LEARNING</Link></div>
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
                        <Link to="/games">Games</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}