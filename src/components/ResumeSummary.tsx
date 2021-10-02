import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import {useMediaQuery} from 'react-responsive';

export default function ResumeSummary() {
  const isSmallSize = useMediaQuery({query: '(max-width: 375px)'});
  const isMediumSize = useMediaQuery({query: '(max-width: 900px)'});

  return (
    <Container flowDirection={isSmallSize || isMediumSize ? 'column' : 'row'}>
      <ProfileImage
        size={isSmallSize || isMediumSize ? 'small' : 'large'}
        src="/assets/profile-picture.jpeg"
        alt="My Photo"
        layout="fixed"
        height={250}
        width={250}
      />
      <div className="summary">
        <h2>
          {summary.jobTitle} at {summary.company}
        </h2>
        <h3>{summary.email}</h3>
        <h3>{summary.address}</h3>
      </div>
    </Container>
  );
}

const Container = styled.div<{flowDirection: 'row' | 'column'}>`
  margin: 2rem 0;
  border-radius: 0.5rem;
  width: 100%;
  display: flex;
  flex-direction: ${props => props.flowDirection};
  justify-content: center;
  align-items: center;

  .summary {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-left: ${props => (props.flowDirection === 'row' ? '2rem' : '0')};
  }
`;

const ProfileImage = styled(Image)<{size?: 'small' | 'large'}>(props => {
  return {
    borderRadius: props.size === 'small' ? '50%' : '0',
  };
});

const summary = {
  jobTitle: 'Senior Software Engineer',
  company: 'NE Digital',
  email: 'carloginocatapang@gmail.com',
  address: 'Tampines, Singapore',
  name: 'Carlo Gino Baldoz Catapang',
};
