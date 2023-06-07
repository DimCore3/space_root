import './index.scss';
import { Props } from './model';

const Cards = ({ data }: Props) => {
    return (
        <div className="cards">
            {data.map((e, index) => (
                <div className="content_portfolio_background">
                    <div className="content_portfolio" key={"content_portfolio_" + index}>
                        <a href={e.link.includes('http') ? e.link : './portfolios/' + e.link} className="sidebar_url">
                            <h3>{e.name}</h3>
                            <img src={require('./assets/img/' + e.img)} alt={e.alt ?? ''} />
                        </a>
                        {e.description && <p>{e.description}</p>}
                        {e.gitLink && <a href={e.gitLink}>Git project link</a>}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Cards;