import { OwnedNft } from 'alchemy-sdk';
import moment from 'moment';
import { Component, createEffect, createSignal } from 'solid-js';

const NFTItem: Component<{ nft: OwnedNft }> = (props) => {
  const [lastUpdateLocalTime, setLastUpdateLocalTime] = createSignal('');
  const [imgURL, setImgURL] = createSignal('');
  createEffect(() => {
    // compute last updated time
    setLastUpdateLocalTime(
      moment(props.nft.timeLastUpdated).format('DD-MM-YY HH:mm:ss'),
    );
    // extract preview url
    const media = props.nft.media.find((item) => item.thumbnail);
    if (media?.thumbnail) {
      setImgURL(media.thumbnail);
    }
  });

  return (
    <div class="card my-1">
      <div class="d-flex">
        {imgURL() && <img src={imgURL()} alt="..." />}
        <div class="card-body overflow-x-auto flex-grow-1">
          {props.nft.title && (
            <h5 class="card-title">Title: {props.nft.title}</h5>
          )}
          <ul class="card-text">
            <li>
              <small class="fw-light">Time last update:</small>{' '}
              {lastUpdateLocalTime()}
            </li>
            <li>
              <small class="fw-light">Token ID:</small> {props.nft.tokenId}
            </li>
            {props.nft.contract.openSea?.floorPrice && (
              <li>
                <small class="fw-light">Floor price:</small>{' '}
                {props.nft.contract.openSea?.floorPrice} ETH
              </li>
            )}
            <li>
              <small class="fw-light">Contract address:</small> <br />{' '}
              {props.nft.contract.address}
            </li>
            <li>
              <small class="fw-light">Contract deployer:</small> <br />{' '}
              {props.nft.contract.contractDeployer}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NFTItem;
