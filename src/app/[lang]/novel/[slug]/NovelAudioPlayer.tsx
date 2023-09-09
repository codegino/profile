'use client';

import type {FC} from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const NovelAudioPlayer: FC<{
  src: string;
}> = ({src}) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <AudioPlayer
        src={src}
        header={<h3>Text-To-Speech Player</h3>}
        style={{
          background: 'transparent',
        }}
      />
    </div>
  );
};

export default NovelAudioPlayer;
