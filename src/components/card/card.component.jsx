import './card.styles.css';

export const Card = (props) => (
    <div className='card-container'>
        <img alt='fruit' src={`https://robohash.org/${props.fruit.id}?set=set2&size=180x180`}></img>
        <h1>{props.fruit.name}</h1>
        <p>{props.fruit.email}</p>
    </div>
);