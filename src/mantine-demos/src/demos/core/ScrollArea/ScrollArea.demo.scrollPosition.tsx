import React, { useState } from 'react';
import { Stack, Code, Text, ScrollArea } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import { Content } from './_content';

const code = `
import { useState } from 'react';
import { Text, ScrollArea, Code } from '@mantine/core';

function Demo() {
  const [scrollPosition, onScrollPositionChange] = useState({ x: 0, y: 0 });

  return (
    <>
      <ScrollArea
        style={{ width: 300, height: 200 }}
        onScrollPositionChange={onScrollPositionChange}
      >
        <div style={{ width: 600 }}>
          {/* ... content */}
        </div>
      </ScrollArea>

      <Text>
        Scroll position: <Code>{\`{ x: \${scrollPosition.x}, y: \${scrollPosition.y} }\`}</Code>
      </Text>
    </>
  );
}
`;

function Demo() {
  const [scrollPosition, onScrollPositionChange] = useState({ x: 0, y: 0 });

  return (
    <Stack align="center">
      <ScrollArea
        style={{ width: 300, height: 200 }}
        onScrollPositionChange={onScrollPositionChange}
      >
        <div style={{ width: 600 }}>
          <Content />
        </div>
      </ScrollArea>
      <Text>
        Scroll position: <Code>{`{ x: ${scrollPosition.x}, y: ${scrollPosition.y} }`}</Code>
      </Text>
    </Stack>
  );
}

export const scrollPosition: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
