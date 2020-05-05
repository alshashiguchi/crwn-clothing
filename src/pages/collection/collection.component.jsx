import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selectors';

import { CollectionItemsContainer, CollectionPageContainer, CollectionTitle } from './collection.styles';

import { firestore } from '../../firebase/firebase.utils';

const ColletcionPage = ({ collection }) => {  

  useEffect(() => {
    console.log('i am subscribing');

    const unsubscribeFromCollections = firestore.collection('collections').onSnapshot(async snapshot => console.log(snapshot));

    return () => {
      //clean up function
      console.log('i am unsubscribing');

      unsubscribeFromCollections();
    }
  }, []);
  
  const { title, items } = collection;  

  return (
    <CollectionPageContainer>
      <CollectionTitle>{ title }</CollectionTitle>
      <CollectionItemsContainer>
        {
          items.map(item =><CollectionItem key={item.id} item={item} />)
        }
      </CollectionItemsContainer>
    </CollectionPageContainer>
  )
};

const mapStateToProps = (state, ownProps) => ({collection: selectCollection(ownProps.match.params.collectionId)(state)});

export default connect(mapStateToProps)(ColletcionPage);
