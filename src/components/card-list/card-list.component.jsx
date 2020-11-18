import './card-list.style.css';
import {Card} from '../card/card.component';

export const CardList = props => (
    <div className='card-list'>
        {
            props.fruits.map(fruit => (
                <Card key={fruit.id} fruit={fruit}/>
            ))
        }
    </div>
);