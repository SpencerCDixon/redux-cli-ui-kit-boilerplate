import React, { Component } from 'react';
import Button from 'components/Button';

import Example from 'components/Example';
import ExampleDescription from 'components/ExampleDescription';
import ExampleContent from 'components/ExampleContent';
import CodeBlock from 'components/CodeBlock';

class BasicExample extends Component {
  render() {
    return (
      <Example title="Basic">
        <ExampleDescription>
        </ExampleDescription>

        <ExampleContent>
          <Button>
            Click Me!
          </Button>
        </ExampleContent>

        <CodeBlock>
          {`
  <ExampleContent>
    <Button>
      Click Me!
    </Button>
  </ExampleContent>
          `}
        </CodeBlock>
      </Example>
    );
  }
}

export default BasicExample;
