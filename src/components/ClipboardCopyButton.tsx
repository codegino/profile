import * as React from 'react';
import styled from '@emotion/styled';
import {FaCheck as CheckIcon} from '@react-icons/all-files/fa/FaCheck';
import {FaCopy as CopyIcon} from '@react-icons/all-files/fa/FaCopy';

async function copyToClipboard(value: string) {
  try {
    if ('clipboard' in navigator) {
      await navigator.clipboard.writeText(value);
      return true;
    }

    const element = document.createElement('textarea');
    element.value = value;
    document.body.append(element);
    element.select();
    document.execCommand('copy');
    element.remove();

    return true;
  } catch {
    return false;
  }
}

interface ClipboardCopyButtonProps {
  value: string;
}

enum State {
  Idle = 'idle',
  Copy = 'copy',
  Copied = 'copied',
}

function ClipboardCopyButton({value}: ClipboardCopyButtonProps) {
  const [state, setState] = React.useState<State>(State.Idle);

  React.useEffect(() => {
    async function transition() {
      switch (state) {
        case State.Copy: {
          await copyToClipboard(value);
          setState(State.Copied);
          break;
        }
        case State.Copied: {
          setTimeout(() => {
            setState(State.Idle);
          }, 2000);
          break;
        }
        default:
          break;
      }
    }
    void transition();
  }, [state, value]);

  return (
    <CopyButton onClick={() => setState(State.Copy)}>
      <LabelText>{state === State.Copied ? 'Copied' : 'Copy'}</LabelText>
      {state === State.Copied ? (
        <CheckIcon fill="var(--color-primary)" />
      ) : (
        <CopyIcon fill="var(--color-primary)" />
      )}
    </CopyButton>
  );
}

const CopyButton = styled.button`
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  background-color: transparent;
  color: var(--color-font);
`;

const LabelText = styled.span`
  display: inline-block;
  margin-right: 0.5rem;
  font-size: 0.9em;
`;

export {ClipboardCopyButton};
