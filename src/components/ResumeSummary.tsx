import React from 'react';
import styled from '@emotion/styled';
import {FaEnvelopeSquare} from '@react-icons/all-files/fa/FaEnvelopeSquare';
import {FaMapMarkerAlt} from '@react-icons/all-files/fa/FaMapMarkerAlt';
import Image from 'next/image';
import {mediaQuery} from '../utils/media-query';

export default function ResumeSummary() {
  return (
    <Container>
      <ProfileImage
        src="/assets/profile-picture.jpeg"
        alt="My Photo"
        layout="fixed"
        height={250}
        width={250}
      />
      <div className="summary">
        <div className="designation">
          <h2>{summary.jobTitle}</h2>
          <h2>&nbsp;at {summary.company}</h2>
        </div>
        <h3>
          <FaEnvelopeSquare />
          &nbsp;{summary.email}
        </h3>
        <h3>
          <FaMapMarkerAlt />
          &nbsp;{summary.address}
        </h3>
      </div>
    </Container>
  );
}

const Container = styled.div`
  margin: 2rem 0;
  border-radius: 0.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${mediaQuery(900, `flex-direction: row;`)}

  .summary {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    margin-left: 0;
    ${mediaQuery(900, `margin-left: 2rem;`)}
  }

  .designation {
    display: flex;
    flex-direction: column;
    align-items: center;

    ${mediaQuery(
      900,
      `
      flex-direction: row;
    `,
    )}
  }

  h2 {
    margin: var(--margin-very-small) 0;

    ${mediaQuery(
      900,
      `
      margin-top: 0;
    `,
    )}
  }

  h3 {
    margin: var(--margin-very-small);

    ${mediaQuery(
      900,
      `
        margin-top: var(--margin-small);
      `,
    )}
  }
`;

const ProfileImage = styled(Image)`
  border-radius: 50%;
  ${mediaQuery(900, `border-radius: 0`)}
`;

const summary = {
  jobTitle: 'Senior Software Engineer',
  company: 'NE Digital',
  email: 'carloginocatapang@gmail.com',
  address: 'Tampines, Singapore',
  name: 'Carlo Gino Baldoz Catapang',
};
