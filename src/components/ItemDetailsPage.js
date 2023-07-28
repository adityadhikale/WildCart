/**
 * The `ItemDetailsPage` component is a React component that renders the `Itemdetails` component with
 * the `productId`, `apiKey`, and `setProgress` props.
 * 
 * Args:
 *   props: The `props` parameter is an object that contains any additional properties passed to the
 * `ItemDetailsPage` component. These properties can be accessed using dot notation, such as
 * `props.setProgress` and `props.apiKey`.
 * 
 * Returns:
 *   The ItemDetailsPage component is being returned.
 */
import React from 'react';
import { useParams } from 'react-router-dom';
import Itemdetails from './Itemdetails';

const ItemDetailsPage = (props) => {
  let setProgress = props.setProgress;
  let apiKey = props.apiKey
  const { productId } = useParams();
  return (
    <>
      <Itemdetails productId={productId} apiKey={apiKey} setProgress={setProgress} />
    </>
  );
};

export default ItemDetailsPage;
