import { ActionIcon } from './svg/ActionIcon'
import { CatalogIcon } from './svg/CatalogIcon'
import { FilterIcon } from './svg/FilterIcon'
import { IconTypes } from '../../src/logic/Types/IconTypes'
import { LayersIcon } from './svg/LayersIcon'
import React from 'react'
import { SearchIcon } from './svg/SearchIcon'
import { SvgProps } from 'react-native-svg'
import { TrashIcon } from './svg/SearchIcon copy'

type IconProps = {
    icon?: IconTypes
} & SvgProps

export const Icon: React.FC<IconProps> = (props) => {
    switch(props.icon) {
        case 'catalog': return <CatalogIcon {...props} />;
        case 'search': return <SearchIcon {...props} />;
        case 'filter': return <FilterIcon {...props} />;
        case 'action': return <ActionIcon {...props} />;
        case 'trash': return <TrashIcon {...props} />;
        default: return <LayersIcon {...props} />
    }
}