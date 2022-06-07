import { useEffect, useState } from 'react';
import { FaTimes, FaWeight, FaGripVertical, FaSuperpowers } from 'react-icons/fa';
import {
    ContainerModal, BodyModal, ColumnImage,
    ColumnDetails, InfoPokemon, StatsPokemon, Line
} from './styles';
import { capitalize } from '../../util';

export function ModalPokemon({ pokemon, show, close }) {
    const [display, setDisplay] = useState(false);
    const { abilities, id, image, height, name, types, weight, stats } = pokemon;

    useEffect(() => {
        setDisplay(show);
    }, [show]);

    return display
        ? (
            <ContainerModal >
                <BodyModal >
                    <div className='close' onClick={() => close()} >
                        <FaTimes />
                    </div>
                    <ColumnImage types={types} backgroundImage={image}>
                        <div>
                            <ul>
                                {
                                    types.map((type, index) => (
                                        <li key={index}>{capitalize(type)}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </ColumnImage>
                    <ColumnDetails>
                        <span className='id'>#{id}</span>
                        <h2>{capitalize(name)}</h2>
                        <p>
                            Details.
                        </p>
                        <InfoPokemon>
                            <li>
                                <div>
                                    <FaWeight />
                                    <strong>{(weight / 10).toFixed(1)} Kg</strong>
                                </div>
                                <h4>Peso</h4>
                            </li>
                            <li>
                                <div>
                                    <FaGripVertical />
                                    <strong>{(height / 10).toFixed(1)} m</strong>
                                </div>
                                <h4>Altura</h4>
                            </li>
                            <li>
                                <div>
                                    <FaSuperpowers />
                                    <strong>{abilities[0]}</strong>
                                </div>
                                <h4>Poder Especial</h4>
                            </li>
                        </InfoPokemon>
                        <StatsPokemon>
                            {
                                stats.map((stat, index) => (
                                    <li key={index}>
                                        <h3>{stat.name}</h3>
                                        <h3>{stat.base_stat}</h3>
                                        <div>
                                            <Line value={stat.base_stat} stat={stat.name} />
                                        </div>
                                    </li>
                                ))
                            }
                        </StatsPokemon>
                    </ColumnDetails>
                </BodyModal>
            </ContainerModal>
        )
        : null
        ;
}