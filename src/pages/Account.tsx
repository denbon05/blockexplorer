import { useLocation } from '@solidjs/router';
import Balance from '@src/components/profile/Balance';
import NFTList from '@src/components/profile/NFTList';
import { Component } from 'solid-js';

const Account: Component = () => {
  const location = useLocation<string>();
  // the last string in the path is the address hash
  const [address] = location.pathname.split('/').reverse();

  return (
    <div class="container mt-3">
      <div class="row justify-content-center">
        <div class="col-10 col-md-8 col-lg7">
          <div class="card">
            <div class="card-body">
              <div class="d-flex flex-column justify-content-center">
                <div class="d-flex justify-content-between">
                  <div>Address:</div>
                  <div>{address}</div>
                </div>
                <div class="d-flex justify-content-between">
                  <div>Balance:</div>
                  <Balance balance={location.state || ''} />
                </div>
              </div>
            </div>
          </div>
          <div class="card mt-2">
            <div class="card-body">
              <NFTList address={address} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
