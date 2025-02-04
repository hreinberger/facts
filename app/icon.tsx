import { ImageResponse } from 'next/og';

// Image metadata
export const size = {
  width: 128,
  height: 128,
};
export const contentType = 'image/svg+xml';

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 72,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage:
            'linear-gradient(60deg, rgba(2,0,36,1) 0%, rgba(0,84,227,1) 35%, rgba(206,0,255,1) 100%)',
        }}
      >
        🧐
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported icons size metadata
      // config to also set the ImageResponse's width and height.
      ...size,
    }
  );
}
