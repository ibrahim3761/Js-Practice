import React, { useContext } from 'react';
import { AssetContext } from './FamilyTree';

const Special = ({name,assets}) => {
    const newAsset = useContext(AssetContext);
    return (
        <div>
            <h3>Special: {name}</h3>
            <p>Assets: {assets}</p>
            <p>New Asset: {newAsset}</p>
        </div>
    );
};

export default Special;