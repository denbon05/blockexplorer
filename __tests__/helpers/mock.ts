import { readFileSync } from 'fs';
import nock, { ReplyBody } from 'nock';
import { join } from 'path';
import { matches } from 'lodash';

nock.disableNetConnect();

const getFixtureDirPath = (dirname: string) =>
  join(__dirname, '../..', '__fixtures__', dirname);
const getAlchemyFixture = (method: string) => {
  const fixtureDirpath = getFixtureDirPath('alchemy');
  return readFileSync(join(fixtureDirpath, method), 'utf-8');
};

export const mockAlchemyAPI = <T extends ReplyBody>({
  url = 'https://eth-mainnet.g.alchemy.com/v2/',
  method,
}: {
  url?: Parameters<typeof nock>[0];
  method: string;
}): T => {
  // get data by method name
  const responseData = getAlchemyFixture(method);

  nock(url)
    .post(process.env.APP_ALCHEMY_API_KEY ?? '', matches({ method }))
    .reply(200, responseData);

  return JSON.parse(responseData);
};
