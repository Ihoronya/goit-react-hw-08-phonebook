import { Oval } from 'react-loader-spinner';
import { Block } from './Loader.styled';

export const Loader = () => {
  return (
    <Block>
      <Oval
        height="100"
  width="100"
  color="#4fa94d"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel="three-circles-rotating"
  outerCircleColor="green"
  innerCircleColor="green"
  middleCircleColor="green"
      />
    </Block>
  );
};
