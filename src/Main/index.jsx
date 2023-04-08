import "./style.css";
import * as info from './info'
import Card from "../Card";

export default function Main() {
    return (
        <main>
            <div className="content">
                <div className="row">
                    <div className="results filter">
                        {info.genres.map(item => <div key={item}>{item}</div>)}
                    </div>
                    <div className="results sort">
                        <p>SORT BY</p>
                        <div>
                            {info.sortBy.map(item => <div key={item}>{item}</div>)}
                            <div className="arrow">▼</div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="results">
                        <div><strong>39</strong> movies found</div>
                    </div>
                </div>
                <div className="found">
                    {info.movies.map(item => <Card key={item.name} movie={item} />)}
                </div>
            </div>
        </main>
    );
}