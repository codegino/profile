import styled from '@emotion/styled';
import {BottomLeftShape} from './extras/BottomLeftShape';
import {BottomRightShape} from './extras/BottomRightShape';
import {TopLeftShape} from './extras/TopLeftShape';
import {TopRightShape} from './extras/TopRightShape';

export const FullScreenWrapper: React.FC<{
  tr?: boolean;
  tl?: boolean;
  bl?: boolean;
  br?: boolean;
  id?: string;
  children: any;
}> = ({children, tr, bl, br, tl, ...props}) => {
  return (
    <FullScreenContainer {...props}>
      {tr && <TopRightShape />}
      {bl && <BottomLeftShape />}
      {tl && <TopLeftShape />}
      {br && <BottomRightShape />}
      {children}
    </FullScreenContainer>
  );
};

const FullScreenContainer = styled.section`
  min-height: 100vh;
  min-width: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
`;
