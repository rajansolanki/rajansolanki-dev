import { Header } from 'src/components/layout/header/header';
import { Job } from 'src/components/layout/job/job';
import { Link } from 'src/components/layout/link/link';

type Props = {};

const Page = ({}: Props) => {
  return (
    <>
      <Header />
      <Job
        company={'Heckford Advertising'}
        date={{ start: '2017-01-01', end: '2020-01-01' }}
        title={'Junior Frontend Developer'}
        description={
          <ul>
            <li>
              Built and maintained websites and email campaigns for clients
            </li>
          </ul>
        }
      />
      <Link slug="hkfd" title="HKFD" overview="Agency portfolio website" />
    </>
  );
};

export default Page;
