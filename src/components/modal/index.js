import { useEffect, useState } from 'react';
import { IoClose, IoScale, IoEllipsisVertical, IoFlash } from 'react-icons/io5';
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
                    <div data-testid='close' className='close' onClick={() => close()} >
                        <h1>
                            <IoClose />
                        </h1>
                    </div>
                    <ColumnImage types={types} backgroundImage={image}>
                        <div>
                            <ul>
                                {
                                    Array.isArray(types) &&
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
                            Details
                        </p>
                        <InfoPokemon>
                            <li>
                                <div>
                                    <IoScale />
                                    <strong>{(weight / 10).toFixed(1)} Kg</strong>
                                </div>
                                <h4>Peso</h4>
                            </li>
                            <li>
                                <div>
                                    <IoEllipsisVertical />
                                    <strong>{(height / 10).toFixed(1)} m</strong>
                                </div>
                                <h4>Altura</h4>
                            </li>
                            <li>
                                <div>
                                    <IoFlash />
                                    <strong>{abilities[0]}</strong>
                                </div>
                                <h4>Poder Especial</h4>
                            </li>
                        </InfoPokemon>
                        <StatsPokemon>
                            {
                                Array.isArray(stats) &&
                                stats.map((stat, index) => (
                                    <li key={index}>
                                        <h4>{stat.name}</h4>
                                        <h4>{stat.base_stat}</h4>
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