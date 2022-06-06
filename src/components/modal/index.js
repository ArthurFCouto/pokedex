import { useEffect, useState } from 'react';
import { FaTimes, FaWeight, FaGripVertical, FaSuperpowers } from 'react-icons/fa';
import { ContainerModal, BodyModal, ColumnImage,
    ColumnDetails, InfoPokemon, StatsPokemon, Line } from './styles';

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
                                    types.map((type) => (
                                        <li>{type[0].toUpperCase() + type.substring(1).toLowerCase()}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </ColumnImage>
                    <ColumnDetails>
                        <h3 className='id'>#{id}</h3>
                        <h1>{name[0].toUpperCase() + name.substring(1).toLowerCase()}</h1>
                        <p>
                            Pellentesque maecenas vitae vehicula eget. Ultricies ac id massa maecenas nulla arcu lacus. Turpis porttitor.
                        </p>
                        <InfoPokemon>
                            <li>
                                <div>
                                    <FaWeight />
                                    <strong>{(weight / 10).toFixed(1)} Kg</strong>
                                </div>
                                <h5>Peso</h5>
                            </li>
                            <li>
                                <div>
                                    <FaGripVertical />
                                    <strong>{(height / 10).toFixed(1)} m</strong>
                                </div>
                                <h5>Altura</h5>
                            </li>
                            <li>
                                <div>
                                    <FaSuperpowers />
                                    <strong>{abilities[0]}</strong>
                                </div>
                                <h5>Poder Especial</h5>
                            </li>
                        </InfoPokemon>
                        <StatsPokemon>
                            {
                                stats.map((stat) => (
                                    <li>
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