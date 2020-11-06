import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';
import { CollectionPreviewConatiner, CollectionPreviewTitle, PreviewContainer } from './collection-preview.styles';

import './collection-preview.styles.scss';

const CollectionPreview = ({title, items}) => (
    <CollectionPreviewConatiner>
        <CollectionPreviewTitle>{title.toUpperCase()}</CollectionPreviewTitle>
        <PreviewContainer>
            { items
                .filter((item, idx) => idx < 4 )
                .map( item => (
                        <CollectionItem key={item.id} item={item} />
                    )
                )
            }
        </PreviewContainer>
    </CollectionPreviewConatiner>
);

export default CollectionPreview;