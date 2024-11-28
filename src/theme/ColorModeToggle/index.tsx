import React from 'react';
import ColorModeToggle from '@theme-original/ColorModeToggle';
import type ColorModeToggleType from '@theme/ColorModeToggle';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof ColorModeToggleType>;

export default function ColorModeToggleWrapper(props: Props): React.ReactElement {
  return (
    <div style={{
      marginLeft: "0.5rem",
    }}>
      <ColorModeToggle {...props} />
    </div>
  );
}
